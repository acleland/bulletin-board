// import functions and grab DOM elements
// import { getPosts } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const bulletinContainer = document.getElementById('bulletin-container');


window.addEventListener('load', async () => {
    await renderPosts(bulletinContainer);
});