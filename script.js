const API_URL = "https://public-api.wordpress.com/wp/v2/sites/sunildharajiya.wordpress.com/posts";

// Fetch + Display Posts
async function loadPosts() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        
        const limitedPosts = posts.slice(0, 4); // Show only first 4 posts

        displayPosts(limitedPosts);

    } catch (error) {
        console.log("Error loading posts:", error);
    }
}

function displayPosts(posts) {
    const container = document.getElementById("wordpress");
    container.innerHTML = "";

    posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "card post-card";

        card.innerHTML = `
            <h3 class="fs-5 fw-bold">${post.title.rendered}</h3>

            <div class="post-desc">
                ${post.excerpt.rendered}
            </div>

            <!-- OPEN YOUR CUSTOM POST PAGE -->
            <a href="posts.html?id=${post.id}" class="btn btn-success mt-2">Read Post</a>
        `;

        container.appendChild(card);
    });
}

loadPosts();