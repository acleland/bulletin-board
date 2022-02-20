// import functions and grab DOM elements
// import { getPosts } from './fetch-utils.js';
import { getUser, logout } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';
const bulletinContainer = document.getElementById('bulletin-container');
const logoutButton = document.getElementById('logout');
const loginButton = document.getElementById('login');
const createButton = document.getElementById('create');
const loginSpan = document.getElementById('login-email');

window.addEventListener('load', async () => {
    if (getUser()) {
        loginButton.classList.add('hide');
        logoutButton.classList.remove('hide');
        loginSpan.textContent = getUser().email;
    } 
    await renderPosts(bulletinContainer);
});

logoutButton.addEventListener('click', () => {
    console.log('logout clicked');
    logout();
    location.replace('./auth');
});

createButton.addEventListener('click', () => {
    if (getUser()) {
        location.replace('./create');
    } else {
        location.replace('./auth');
    }
});


