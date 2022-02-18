import { signInUser, signUpUser, redirectIfLoggedIn } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const user = await signInUser(email, password);
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email, password);
    const user = await signUpUser(email, password);
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
    
});

