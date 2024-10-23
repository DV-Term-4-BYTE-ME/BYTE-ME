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
//       .then(response => console.log(response))
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

    //------------------- movie api
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2FhZDgxMDQ4YzlmMjNmZWI1ZGYzN2Y3YjA2ZmNiYyIsIm5iZiI6MTcyOTY5MDg3Mi43NTI1NDgsInN1YiI6IjY2ZWMxNjRkOWJkNDI1MDQzMDc0OWI4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6MZErar8nBOsywfFcHUnUON9vcuqk-FxQuuMHjjq6pg'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(res => res.json())
      .then(res => mineData(res))
      .catch(err => console.error(err));

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

class movie{

  constructor(backdropImg, genreIdArr, movieTitle, overview,popularity,movieImg,voteAve,movieID){
    this.movieTitle= movieTitle;
    this.backdropImg= backdropImg;
    this.genreIdArr= genreIdArr;
    this.overview= overview;
    this.popularity= popularity;
    this.movieImg= movieImg;
    this.voteAve= voteAve;
    this.movieID= movieID;
  }

  getTitle(){
  
    return this.movieTitle;
  }
  getMovieImg(){
    return this.movieImg;
  }

  getID(){
    return this.movieID;
  }

  getBackdropImg(){
    return this.backdropImg;
  }

  getPopularity(){
    return this.popularity;
  }
  getGenreArr(){
    return this.genreIdArr;
  }

  getvoteAve(){
    return this.voteAve;
  }
  getOverview(){
    return this.overview;
  }


}

//-------------------------- Code to extract api data -------------------

let movieObjArr= [];
let tvObjArr=[];
let watchList =[];



   function mineData(data){
   
    // console.log(data);
  
  
   
   for(let i =0; i<data.results.length; i++){
    

        // mine data for each movie 
        let backdropImg= data.results[i].backdrop_path;
        let genreIdArr =[];

        //------------- sorthing thrugh the genre ids and sorting them
        for(let j =0; j<data.results[i].genre_ids.length;j++){
          if(data.results[i].genre_ids[j]==28){
            genreIdArr.push("Action");
          }else if(data.results[i].genre_ids[j]==12){
            genreIdArr.push("Adventure");
          }else if(data.results[i].genre_ids[j]==16){
            genreIdArr.push("Animation");
          }else if(data.results[i].genre_ids[j]==35){
            genreIdArr.push("Comedy");
          }else if(data.results[i].genre_ids[j]==80){
            genreIdArr.push("Crime");
          }else if(data.results[i].genre_ids[j]==99){
            genreIdArr.push("Documentary");
          }else if(data.results[i].genre_ids[j]==18){
            genreIdArr.push("Drama");
          }else if(data.results[i].genre_ids[j]==10751){
            genreIdArr.push("Family");
          }else if(data.results[i].genre_ids[j]==14){
            genreIdArr.push("Fantasy");
          }else if(data.results[i].genre_ids[j]==36){
            genreIdArr.push("History");
          }else if(data.results[i].genre_ids[j]==27){
            genreIdArr.push("Horror");
          }else if(data.results[i].genre_ids[j]==10402){
            genreIdArr.push("Music");
          }else if(data.results[i].genre_ids[j]==9648){
            genreIdArr.push("Mystery");
          }else if(data.results[i].genre_ids[j]==10749){
            genreIdArr.push("Romance");
          }else if(data.results[i].genre_ids[j]==878){
            genreIdArr.push("Science Fiction");
          }else if(data.results[i].genre_ids[j]==10770){
            genreIdArr.push("TV Movie");
          }else if(data.results[i].genre_ids[j]==53){
            genreIdArr.push("Thriller");
          }else if(data.results[i].genre_ids[j]==10752){
            genreIdArr.push("War");
          }else if(data.results[i].genre_ids[j]==37){
            genreIdArr.push("Western");
          }
        
        }
     
        let movieTitle = data.results[i].title;
        let overview= data.results[i].overview;
        let popularity= data.results[i].popularity;
        let movieImg= data.results[i].poster_path;
        let voteAve= data.results[i].vote_average;
        let movieID= i;


    
      
       createMovieObj(backdropImg, genreIdArr, movieTitle, overview,popularity,movieImg,voteAve,movieID);

    
    

   }
  
   

}

//----------- code to save each obj into an array---------

  function createMovieObj(backdropImg,genreIdArr,movieTitle,overview,popularity,movieImg,voteAve,movieID){
      movieObjArr.push( new movie(backdropImg,genreIdArr,movieTitle,overview,popularity,movieImg,voteAve,movieID));
  }


 // console.log(movieObjArr);
  //populateHomePage();



  function checkIfDataLoaded(arr) {
    const interval = setInterval(() => {
      if (arr.length == 20) {
       // console.log('Data is done loading!');
        clearInterval(interval); // Stop checking once the data is loaded
        afterDataLoaded(); // Call the callback function after data is loaded
      } else {
        //console.log('Waiting for data to load...');
      }
    }, 100); // Check every 100 milliseconds
  }

  checkIfDataLoaded(movieObjArr);

  function afterDataLoaded() {
    console.log('data is loaded hoes');
    
    //set hero image 
    populateHomeScreen();
    
  
  
  }


console.log(watchList);
    
  
    function populateHomeScreen(){
      document.getElementById("homeHero").innerHTML= `
      <div id="overlaySlay">
        <img src= 'https://image.tmdb.org/t/p/original${movieObjArr[2].getBackdropImg()}' >
        
      </div>
      <div id="heroDiv">
      <h2>${movieObjArr[2].getTitle()}</h2>
      <h4> ${movieObjArr[2].getOverview()}</h4>
      <button type="submit" class="buttonWatch" onclick="openSingleView(129)">Watch Now</button>
      </div>
      `;
  
  
      
      
      
       let topPickContainer= document.getElementById("top-picks");
  
       // loop through array values 0-9 ( 10 images) for top pics row
       for( let i  =0; i<9; i++){
      
        let movieToAdd = `  <div class="movieContainerImg" onclick="openSingleView(${movieObjArr[i].getID()})">              
                              <img src= 'https://image.tmdb.org/t/p/original${movieObjArr[i].getMovieImg()}'>
                              <h3>${movieObjArr[i].getTitle()}</h3>
                            </div>`;
  
      topPickContainer.innerHTML+= movieToAdd;
       }
  
       //loop for top movies row
       let topMoviesContainer = document.getElementById("top-movies");
       
  
       for( let i  =9; i<19; i++){
      
        let movieToAdd = `  <div class="movieContainerImg" onclick="openSingleView(${movieObjArr[i].getID()})">              
                              <img src=  'https://image.tmdb.org/t/p/original${movieObjArr[i].getMovieImg()}'>
                              <h3>${movieObjArr[i].getTitle()}</h3>
                            </div>`;
  
      topMoviesContainer.innerHTML+= movieToAdd;
  
       
       }


//---------------- watchlist population with 3 values
  for(let i =0; i<3; i++){
    watchList.push(movieObjArr[i]);
  }

 displayWatchList();
  
  }

  function displayWatchList(){
   
      let watchListContainer = document.getElementById("watch-list");
      for(let i =0; i<watchList.length;i++){
        let movieAdd= ` <div class="movieContainerImg" onclick="openSingleView(${watchList[i].getID()})">              
                              <img src=  'https://image.tmdb.org/t/p/original${watchList[i].getMovieImg()}'>
                              <h3>${watchList[i].getTitle()}</h3>
                            </div>`
         watchListContainer.innerHTML+= movieAdd;
      
    }
  }

  
      //  for( let i  =0; i<watchList.length; i++){
  
      //   let movieToAdd = `  <div class="movieContainerImg" onclick="openSingleView(${watchList[i].getID()})">              
      //                         <img src= ${watchList[i].getMovieImg()}>
      //                         <h3>${watchList[i].getTitle()}</h3>
      //                       </div>`;
  
      // watchListContainer.innerHTML+= movieToAdd;
  
       
      //  }

    
  
   


    
 
  


 
  // function openSingleView(id){
  //   console.log("opended single view");
  //   console.log(id);

  //   // trying to populate the single view class------------------------------------------------

  //   window.location.href = "pages/singleView.html";
  
   // let container= document.getElementById("singleViewContainer");
  //  let addContent = 

  //  `
  //  <div class = "content">

  //  <p>${movieObjArr[id].getDate()}</p>
  //   <h1>${movieObjArr[id].getTitle()}</h1>
  //   <p>${movieObjArr[id].getCategorie()}</p>
  //   <p>${movieObjArr[id].getStaring()}</p>
  //   <p>${movieObjArr[id].getTrailerLink()}</p>
  //  </div>

  //  <div class="movieImg">
  //  <img src="${movieObjArr[id].getImg()}"
  //  </div>
  //  ` ;

  //  container.innerHTML= addContent;
  // }




 


  

