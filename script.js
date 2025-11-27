const API_URL = "https://public-api.wordpress.com/wp/v2/sites/sunildharajiya.wordpress.com/posts";

// Fetch + Display
async function loadPosts() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        console.log(posts)
        const limitedPosts = posts.slice(0, 4); // Only first 7

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
        card.className = "card m-2 p-3 post-card";

        card.innerHTML = `
            <h3 class="fs-5 fw-bold">${post.title.rendered}</h3>

            <!-- SAME DESCRIPTION AS WORDPRESS -->
            <div class="post-desc">
                ${post.excerpt.rendered}
            </div>

            <a href="${post.link}" target="_blank" class="btn btn-success mt-2">Read Post</a>
        `;

        container.appendChild(card);
    });
}

loadPosts();