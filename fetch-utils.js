const SUPABASE_URL = 'https://rkwuoifoqjtdyuamlqbt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrd3VvaWZvcWp0ZHl1YW1scWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE2MTAsImV4cCI6MTk1OTkxNzYxMH0.0bzW8RqDL090ne0FvaYqJLDBsUCtpfGm0oN6I-xwziw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signInUser(email, password) {
    const resp = await client.auth.signIn({ email, password });
    return resp.user;
}

export async function signUpUser(email, password) {
    const resp = await client.auth.signUp({ email, password });
    return resp.user;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/');
    }
}

export async function getPosts() {
    const resp = await client.from('bulletins').select('*');
    return checkError(resp);
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}