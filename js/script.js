// login variables
console.log("hello peeps");

// declare variable for api data 
let apiData=[];

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

      //grap each item and push to array
      
      data.results.forEach(item => {
      apiData.push(item);
     });
     
    })
    console.log(apiData);
    