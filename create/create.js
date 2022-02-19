import { getUser, createPost } from '/fetch-utils.js';

const createForm = document.getElementById('create-form');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (getUser()) {
        const formData = new FormData(createForm);
        const bulletin = {
            title: formData.get('title'),
            message: formData.get('message'),
            contact: formData.get('contact'),
            user_id: getUser().id
        };
        await createPost(bulletin);
        location.replace('/');
    } else {
        console.error('Cannot create post without being logged in.');
    }
    
});