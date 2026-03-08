// Basic Blog Functionality

// Example: Add interactivity to blog posts
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blog loaded successfully!');
    
    // You can add more JavaScript functionality here
    // For example: adding event listeners, fetching data, etc.
    
    // Example: Highlight the current page in navigation
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#ffd700';
        }
    });
});

// Function to load blog posts dynamically (example)
function loadBlogPosts(posts) {
    const postsContainer = document.querySelector('.posts');
    postsContainer.innerHTML = '';
    
    posts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>Posted on <time datetime="${post.date}">${post.date}</time></p>
            <p>${post.summary} <a href="#">Read more</a></p>
        `;
        postsContainer.appendChild(article);
    });
}
