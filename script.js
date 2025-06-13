fetch('https://public-api.wordpress.com/wp/v2/sites/sunildharajiya.wordpress.com/posts')
      .then(res => res.json())
      .then(posts => {
        const blogContainer = document.querySelector("#wordpress");

        posts.forEach(post => {
          const div = document.createElement("div");
          div.className = "col-md-6";
          div.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title">${post.title.rendered}</h5>
                <p class="card-text">${post.excerpt.rendered.slice(0, 150)}...</p>
                <a href="${post.link}" target="_blank" class="btn btn-success">Read More</a>
              </div>
            </div>
          `;
          blogContainer.appendChild(div);
        });
      })
      .catch(err => {
        console.error("Blog fetch error:", err);
        document.querySelector("#wordpress").innerHTML = `
          <div class="alert alert-danger" role="alert">
            Couldn't load blog posts. Please try again later.
          </div>`;
      });
      