// login variables
console.log("hello peeps");

// declare variable for api data

// first api data --------------------------------------------------------

// let apiData=[];

// const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
//     const apiToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzEyYzg4OTlhMTMyMzM3MjE2NDMxMWQ5MzI3MDg3NyIsIm5iZiI6MTcyNjU1NTk3MS4xMDIzNjUsInN1YiI6IjY2ZTkyNjM3NWMwNTE5YTIzNGQyYjY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1BwoUhmmHhO4fS3w0FEdoXyfGB8fU-S4LpxX6AFcIyA";

//     const options = {method: 'GET', headers: {accept: 'application/json'}};

//     fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
//       .then(response => response.json())
//       .then(response => mineData(response))
//       .catch(err => console.error(err));

//     // Fetch the trending movies and TV shows
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "accept": "application/json",
//         "Authorization": apiToken,
//       },
//     })
//     .then(response => response.json())
//     .then(data => {

//       //grap each item and push to array

//       data.results.forEach(item => {
//       apiData.push(item);
//      });

//     })
//     console.log(apiData);

//--------------------------------------------- movie api
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2FhZDgxMDQ4YzlmMjNmZWI1ZGYzN2Y3YjA2ZmNiYyIsIm5iZiI6MTcyOTY5MDg3Mi43NTI1NDgsInN1YiI6IjY2ZWMxNjRkOWJkNDI1MDQzMDc0OWI4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6MZErar8nBOsywfFcHUnUON9vcuqk-FxQuuMHjjq6pg",
  },
};

async function getApiData() {
  await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  )
    .then((res) => res.json())
    .then((res) => mineData(res))
    .catch((err) => console.error(err));
}
getApiData();

//-- tv api--------------------

// const options1 = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2FhZDgxMDQ4YzlmMjNmZWI1ZGYzN2Y3YjA2ZmNiYyIsIm5iZiI6MTcyOTY5MDg3Mi43NTI1NDgsInN1YiI6IjY2ZWMxNjRkOWJkNDI1MDQzMDc0OWI4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6MZErar8nBOsywfFcHUnUON9vcuqk-FxQuuMHjjq6pg'
//   }
// };

// fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

//- danae-------------- class for movie arr

class movie {
  constructor(
    backdropImg,
    genreIdArr,
    movieTitle,
    overview,
    popularity,
    movieImg,
    voteAve,
    movieID
  ) {
    this.movieTitle = movieTitle;
    this.backdropImg = backdropImg;
    this.genreIdArr = genreIdArr;
    this.overview = overview;
    this.popularity = popularity;
    this.movieImg = movieImg;
    this.voteAve = voteAve;
    this.movieID = movieID;
  }

  getTitle() {
    return this.movieTitle;
  }
  getMovieImg() {
    return this.movieImg;
  }

  getID() {
    return this.movieID;
  }

  getBackdropImg() {
    return this.backdropImg;
  }

  getPopularity() {
    return this.popularity;
  }
  getGenreArr() {
    return this.genreIdArr;
  }

  getGenreForOutput() {
    let output = "";
    output += this.genreIdArr[0];
    for (let i = 1; i < this.genreIdArr.length; i++) {
      output += " | " + this.genreIdArr[i];
    }
    return output;
  }

  getvoteAve() {
    return this.voteAve;
  }
  getOverview() {
    return this.overview;
  }
}

//-------------------------- Code to extract api data danae  -------------------

let movieObjArr = [];
let tvObjArr = [];
let watchList = [];

// arrays for filter values
let arrAll = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

// arrays to capture filters for the movie page
let arrAction = [];
let arrAnimation = [];
let arrComedy = [];
let arrHorror = [];
let arrScienceFiction = [];

localStorage.setItem("watchLisr", []);

function mineData(data) {
  // console.log(data);

  for (let i = 0; i < data.results.length; i++) {
    // mine data for each movie
    let backdropImg = data.results[i].backdrop_path;
    let genreIdArr = [];

    //------------- sorthing thrugh the genre ids and sorting them
    for (let j = 0; j < data.results[i].genre_ids.length; j++) {
      if (data.results[i].genre_ids[j] == 28) {
        genreIdArr.push("Action");
        arrAction.push(i);
      } else if (data.results[i].genre_ids[j] == 12) {
        genreIdArr.push("Adventure");
      } else if (data.results[i].genre_ids[j] == 16) {
        genreIdArr.push("Animation");
        arrAnimation.push(i);
      } else if (data.results[i].genre_ids[j] == 35) {
        genreIdArr.push("Comedy");
        arrComedy.push(i);
      } else if (data.results[i].genre_ids[j] == 80) {
        genreIdArr.push("Crime");
      } else if (data.results[i].genre_ids[j] == 99) {
        genreIdArr.push("Documentary");
      } else if (data.results[i].genre_ids[j] == 18) {
        genreIdArr.push("Drama");
      } else if (data.results[i].genre_ids[j] == 10751) {
        genreIdArr.push("Family");
      } else if (data.results[i].genre_ids[j] == 14) {
        genreIdArr.push("Fantasy");
      } else if (data.results[i].genre_ids[j] == 36) {
        genreIdArr.push("History");
      } else if (data.results[i].genre_ids[j] == 27) {
        genreIdArr.push("Horror");
        arrHorror.push(i);
      } else if (data.results[i].genre_ids[j] == 10402) {
        genreIdArr.push("Music");
      } else if (data.results[i].genre_ids[j] == 9648) {
        genreIdArr.push("Mystery");
      } else if (data.results[i].genre_ids[j] == 10749) {
        genreIdArr.push("Romance");
      } else if (data.results[i].genre_ids[j] == 878) {
        genreIdArr.push("Science Fiction");
        arrScienceFiction.push(i);
      } else if (data.results[i].genre_ids[j] == 10770) {
        genreIdArr.push("TV Movie");
      } else if (data.results[i].genre_ids[j] == 53) {
        genreIdArr.push("Thriller");
      } else if (data.results[i].genre_ids[j] == 10752) {
        genreIdArr.push("War");
      } else if (data.results[i].genre_ids[j] == 37) {
        genreIdArr.push("Western");
      }
    }

    let movieTitle = data.results[i].title;
    let overview = data.results[i].overview;
    let popularity = data.results[i].popularity;
    let movieImg = data.results[i].poster_path;
    let voteAve = data.results[i].vote_average;
    let movieID = i;

    createMovieObj(
      backdropImg,
      genreIdArr,
      movieTitle,
      overview,
      popularity,
      movieImg,
      voteAve,
      movieID
    );
  }
}

//----------- code to save each obj into an array---------
let arrPopulated = false;
let count = 0;
function createMovieObj(
  backdropImg,
  genreIdArr,
  movieTitle,
  overview,
  popularity,
  movieImg,
  voteAve,
  movieID
) {
  movieObjArr.push(
    new movie(
      backdropImg,
      genreIdArr,
      movieTitle,
      overview,
      popularity,
      movieImg,
      voteAve,
      movieID
    )
  );
  count++;
  if (count == 20) {
    arrPopulated = true;
  }
}

// console.log(movieObjArr);
//populateHomePage();

function checkIfDataLoaded() {
  const interval = setInterval(() => {
    if (movieObjArr.length == 20) {
      // console.log('Data is done loading!');
      clearInterval(interval); // Stop checking once the data is loaded

      afterDataLoaded(); // Call the callback function after data is loaded
    } else {
      //console.log('Waiting for data to load...');
    }
  }, 100); // Check every 100 milliseconds
}

checkIfDataLoaded();

function afterDataLoaded() {
  console.log("data is loaded girll");

  // Store movieObjArr in localStorage
  localStorage.setItem("movieObjArr", JSON.stringify(movieObjArr));

  try {
    // First, try calling displayLibraryFromArr
    displayLibraryFromArr(arrAll);
  } catch (error) {
    console.error("Error in displayLibraryFromArr:", error);
  }

  try {
    // Then, try calling populateHomeScreen
    populateHomeScreen();
  } catch (error) {
    console.error("Error in populateHomeScreen:", error);
  }
}

//--------------------------js for user page and user name on home

function userSelected(UserName) {
  //console.log(UserName);
  localStorage.setItem("userSelected", UserName);
  window.location.href = "../index.html";
}

function populateHomeScreen() {
  //--------------------------------------------populate header section --------------------------------

  //- get local storrage for name selected

  let user = localStorage.getItem("userSelected");

  document.getElementById("homeHero").innerHTML = `
      <div id="overlaySlay">
        <img src= 'https://image.tmdb.org/t/p/original${movieObjArr[18].getBackdropImg()}' >
        
      </div>
      <div id="heroDiv">
      <h3>Howdy ${user}</h3>
      <h2>${movieObjArr[18].getTitle()}</h2>
      <h4> ${movieObjArr[18].getOverview()}</h4>
      <button type="submit" class="buttonWatch" onclick="openSingleView(18)">Watch Now</button>
       
      </div>
      `;

  let topPickContainer = document.getElementById("top-picks");

  // loop through array values 0-9 ( 10 images) for top pics row
  for (let i = 0; i < 9; i++) {
    let movieToAdd = `  <div class="movieContainerImg" onclick="openSingleView(${movieObjArr[
      i
    ].getID()})">              
                              <img src= 'https://image.tmdb.org/t/p/original${movieObjArr[
                                i
                              ].getMovieImg()}'>
                             
                              <div class="title-with-button">
                               <h3>${movieObjArr[i].getTitle()}</h3>
                                
                                </div>
                            </div>`;

    topPickContainer.innerHTML += movieToAdd;
  }

  //loop for top movies row
  let topMoviesContainer = document.getElementById("top-movies");

  for (let i = 9; i < 19; i++) {
    let movieToAdd = `  <div class="movieContainerImg"  onclick="openSingleView(${movieObjArr[
      i
    ].getID()})">              
                              <img src=  'https://image.tmdb.org/t/p/original${movieObjArr[
                                i
                              ].getMovieImg()}' >
                              
                              <div class="title-with-button">
                              <h3>${movieObjArr[i].getTitle()}</h3>
                               
                                </div>
                            </div>`;

    topMoviesContainer.innerHTML += movieToAdd;
  }

  // displayWatchList();
}

function displayWatchList(arr) {
  let watchListContainer = document.getElementById("watch-list");
  watchListContainer.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let movieAdd = ` <div class="movieContainerImg" onclick="openSingleView(${arr[
      i
    ].getID()})">              
                              <img src=  'https://image.tmdb.org/t/p/original${arr[
                                i
                              ].getMovieImg()}'>
                              <h3>${arr[i].getTitle()}</h3>
                            </div>`;
    watchListContainer.innerHTML += movieAdd;
  }
}

//fires when added to watchlist

function addToWatchList(id) {
  console.log(localStorage.getItem("watchList"));
  //console.log("data to display",JSON.parse(localStorage.getItem("watchList")));
  let objectToAdd = movieObjArr[id];
  //  watchList.push(movieObjArr[id]);
  //console.log(objectToAdd);
  watchListData = JSON.parse(localStorage.getItem("watchList")) || [];
  console.log(watchListData);
  console.log(watchListData.length);

  let allreadyInList = false;

  if (watchListData.length > 0) {
    console.log("something in the local storage");
    for (let i = 0; i < watchListData.length; i++) {
      if (watchListData[i].movieID == id) {
        allreadyInList = true;
        alert(`${movieObjArr[data].getTitle()} is already in your watchlist.`);
        return;
      }
    }
  } else if (watchListData == null) {
    console.log("first value added");
    let arr = [objectToAdd];
    localStorage.setItem("watchList", JSON.stringify(arr));
  }

  if (allreadyInList === false) {
    console.log("only reaches here if item not in list");
    console.log(movieObjArr[id]);
    watchListData.push(movieObjArr[id]);
    // console.log("watchlist data:",watchListData);
    localStorage.setItem("watchList", JSON.stringify(watchListData));
    alert(`${movieObjArr[id].getTitle()} has been added to your watchlist!`);
  }
}

//----------- code for remove item from watch list

function removeItemWatch(id) {
  console.log("from the remove id", id);
  let watchListArr = JSON.parse(localStorage.getItem("watchList")) || [];
  console.log(watchListArr);

  for (let i = 0; i < watchListArr.length; i++) {
    if (id == watchListArr[i].movieID) {
      watchListArr.splice(i, 1);
    }
  }

  localStorage.setItem("watchList", JSON.stringify(watchListArr));
  displayWatchListOnPage();
}
//--------------------codee for movie watch list--------------mwl

if (window.location.pathname.includes("movieWatchlist.html")) {
  displayWatchListOnPage();
  // console.log(movieObjArr);
}

function displayWatchListOnPage() {
  const watchListArr = JSON.parse(localStorage.getItem("watchList")) || [];
  // console.log(watchListArr);

  let movieWatchlistContainer = document.getElementById(
    "movieWatchlistContainer"
  );
  // console.log(movieWatchlistContainer);
  //console.log(watchListArr[0].)

  let dataToDislay = "";
  for (let i = 0; i < watchListArr.length; i++) {
    dataToDislay += `<div class="libraryMovie">
     
      <img src='https://image.tmdb.org/t/p/original${watchListArr[i].movieImg}' onclick="openSingleView(${watchListArr[i].movieID})">
       <div class="tAndRemove">
        <h3>${watchListArr[i].movieTitle}</h3>
          <p onclick="removeItemWatch(${watchListArr[i].movieID})">-</p>
        </div>
      </div> `;
  }

  movieWatchlistContainer.innerHTML = dataToDislay;
}

//addToWatchList(2);
//  for( let i  =0; i<watchList.length; i++){

//   let movieToAdd = `  <div class="movieContainerImg" onclick="openSingleView(${watchList[i].getID()})">
//                         <img src= ${watchList[i].getMovieImg()}>
//                         <h3>${watchList[i].getTitle()}</h3>
//                       </div>`;

// watchListContainer.innerHTML+= movieToAdd;

//  }

function openSingleView(id) {
  console.log("opended single view");

  // trying to populate the single view class------------------------------------------------
  // -- this next line of code opens the single view page.
  localStorage.setItem("selectedMovieId", id);

  // -- check if we are on the home page or from within the single View page
  //console.log(window.location.pathname);
  if (window.location.pathname.includes("/index.html")) {
    console.log("on home from single view");

    window.location.href = "pages/singleView.html";
  } else if (window.location.pathname.includes("movieLibrary.html")) {
    window.location.href = "singleView.html";
  } else if (window.location.pathname.includes("movieWatchlist.html")) {
    window.location.href = "singleView.html";
  }
}

//--- function that displays single view data
function displaySingleView() {
  // Retrieve movieObjArr from localStorage
  const movieObjArrString = localStorage.getItem("movieObjArr");
  const movieObjArr = movieObjArrString ? JSON.parse(movieObjArrString) : [];
  //get id from local storage
  let movieId = parseInt(localStorage.getItem("selectedMovieId"));

  let genreArr = movieObjArr[movieId].genreIdArr;
  //console.log(genreArr);
  let genreOut = "";
  genreOut += genreArr[0];
  for (let i = 1; i < genreArr.length; i++) {
    genreOut += "  |  " + genreArr[i];
  }

  // console.log(genreOut);

  let singleContainer = document.getElementById("singleViewContainer");

  let movieViewed = `
     <img id="backImgSingle" src=  'https://image.tmdb.org/t/p/original${movieObjArr[movieId].backdropImg}'>
      <p id="blurSingleBackground"></p>
    <div id= "movieDataSingle">
      <div class="movieDetails">
        
        <H1>${movieObjArr[movieId].movieTitle}</H1>
        <h2>${movieObjArr[movieId].overview}</h2>
        <h3>${genreOut}</h3>
       
        <p class="smallInfoSingleView">Popularity & Views: ${movieObjArr[movieId].popularity} </p>
        <p class="smallInfoSingleView">Rating: ${movieObjArr[movieId].voteAve}</p>
        <div class ="btnCon">
        <button>Watch Now</button>
        <button class="addWatchBtn" onclick="addToWatchList(${movieId})">Add To Wachlist</button>
      </div>
      </div>
    
      <div class="moviePosterSingle">
         <img  src='https://image.tmdb.org/t/p/original${movieObjArr[movieId].movieImg}'>
      </div>
    </div>

    `;
  // <p class="genreSingleView">${movieObjArr[movieId].getGenreForOutput()}</p>
  singleContainer.innerHTML = movieViewed;

  //----------- find containers for recomemded movies

  let recomendedContainer = document.getElementById("top-picks");
  let i = movieId + 1;

  if (i > 14) {
    i = movieId - 7;
  }
  let final = "";
  let j = 0;
  while (j < 6) {
    let dataToAdd = ` 
       <div>
      <img  src='https://image.tmdb.org/t/p/original${movieObjArr[i].movieImg}'   onclick="openSingleView(${movieObjArr[i].movieID})">
      <div class="title-with-button">
        <h3>${movieObjArr[i].movieTitle}</h3>
        
    </div>
    </div>
      
      `;
    final += dataToAdd;
    i++;
    j++;
  }

  recomendedContainer.innerHTML = final;
}

//------------------when single view page is opend ---------display sinngle
if (window.location.pathname.includes("singleView.html")) {
  displaySingleView();
}

function clearLocal() {
  localStorage.clear();
  displayWatchListOnPage();
}

function displayLibraryFromArr(arr) {
  // find container
  //console.log("fired from the library page");

  let displayContainer = document.getElementById("movieLibraryContainer");
  //console.log(displayContainer);

  let dataToDislay = "";
  for (let i = 0; i < arr.length; i++) {
    dataToDislay += `<div class="libraryMovie">
    <img src='https://image.tmdb.org/t/p/original${movieObjArr[
      arr[i]
    ].getMovieImg()}}' onclick="openSingleView(${movieObjArr[arr[i]].getID()})">
     <h3>${movieObjArr[arr[i]].getTitle()}</h3>
    </div>`;
  }
  displayContainer.innerHTML = dataToDislay;
}

//---------------code for watchFilter --

function watchFilter(id) {
  //console.log(id);
  if (id == "all") {
    displayWatchListOnPage();
  } else if (id == "recent") {
    let arr = JSON.parse(localStorage.getItem("watchList"));
    let newArr = [];
    for (let i = arr.length - 1; i > -1; i--) {
      newArr.push(arr[i]);
    }
    displayChangesWatch(newArr);
  } else {
    //alfabetically

    let arr = JSON.parse(localStorage.getItem("watchList"));
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].movieTitle);
    }
    newArr.sort();
    //console.log(newArr);
    let toLog = [];

    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr.length; j++) {
        if (arr[j].movieTitle == newArr[i]) {
          toLog.push(arr[j]);
        }
      }
    }

    //console.log(toLog);
    displayChangesWatch(toLog);
  }
}

function displayChangesWatch(arr) {
  // const watchListArr = JSON.parse(localStorage.getItem('watchList')) || [];
  // console.log(watchListArr);

  let movieWatchlistContainer = document.getElementById(
    "movieWatchlistContainer"
  );
  // console.log(movieWatchlistContainer);
  //console.log(watchListArr[0].)

  let dataToDislay = "";
  for (let i = 0; i < arr.length; i++) {
    dataToDislay += `<div class="libraryMovie">
     
      <img src='https://image.tmdb.org/t/p/original${arr[i].movieImg}' onclick="openSingleView(${arr[i].movieID})">
       <div class="tAndRemove">
        <h3>${arr[i].movieTitle}</h3>
          <p onclick="removeItemWatch(${arr[i].movieID})">-</p>
        </div>
      </div> `;
  }

  movieWatchlistContainer.innerHTML = dataToDislay;
}
