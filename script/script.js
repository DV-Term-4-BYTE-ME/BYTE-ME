const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
    const apiToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzEyYzg4OTlhMTMyMzM3MjE2NDMxMWQ5MzI3MDg3NyIsIm5iZiI6MTcyNjU1NTk3MS4xMDIzNjUsInN1YiI6IjY2ZTkyNjM3NWMwNTE5YTIzNGQyYjY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1BwoUhmmHhO4fS3w0FEdoXyfGB8fU-S4LpxX6AFcIyA";

    // Fetch the trending movies and TV shows
    fetch(url, {
      method: "GET",
      headers: {
        "accept": "application/json",
        "Authorization": apiToken,
      },
    })
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('movie-container');

      // Loop through each result and display the info
      data.results.forEach(item => {
        const title = item.title || item.name;
        const releaseDate = item.release_date || item.first_air_date;
        const posterPath = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

        // Create movie div
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        // Create image element for the poster
        const img = document.createElement('img');
        img.classList.add('poster');
        img.src = posterPath;
        img.alt = `${title} poster`;

        // Create div for movie info
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('movie-info');
        infoDiv.innerHTML = `
          <h2>${title}</h2>
          <p>Release Date: ${releaseDate}</p>
        `;

        // Append elements to the movie div
        movieDiv.appendChild(img);
        movieDiv.appendChild(infoDiv);

        // Append movie div to the container
        container.appendChild(movieDiv);
      });
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    });