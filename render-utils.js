import { getPosts } from './fetch-utils.js';

export function renderPost(post) {
    const div = document.createElement('div');
    div.classList.add('sticky-note');
    const h3 = document.createElement('h3');
    const pMessage = document.createElement('p');
    h3.textContent = post.title;
    pMessage.textContent = post.message;
    const pContact = document.createElement('p');
    pContact.textContent = post.contact;
    pContact.classList.add('contact');
    div.append(h3, pMessage, pContact);
    return div;
}

export async function renderPosts(container) {
    const posts = await getPosts();
    for (let post of posts) {
        container.append(renderPost(post));
    }
}
