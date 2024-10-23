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

//---------------------2nd api data and data mining----------------------------------

const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "R3-VhE4bDvXgKFaoUhqTAVliGkwsbPeYqLcYAE6lSrWtHaG2sD");
myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "4f700f4a-4bd2-4604-8d5b-7b5e4c976c65");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

//Calling the API
fetch("https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-movies", requestOptions)
   .then((response) => response.json())
   // console.log(response)
   .then((result) => {mineData(result);
    checkIfDataLoaded(afterDataLoaded);
   })
   .catch((error) => console.error(error));

 
  




//- danae-------------- class for movie arr 

class movie{

  constructor(movieTitle, imgSrc, trailerLink, movieCategorieArr,staringArr,date,movieID){
    this.movieTitle= movieTitle;
    this.imgSrc= imgSrc;
    this.trailerLink= trailerLink;
    this.movieCategorieArr= movieCategorieArr;
    this.staringArr= staringArr;
    this.date= date;
    this.movieID= movieID;
  }

  getTitle(){
  
    return this.movieTitle;
  }
  getImg(){
    return this.imgSrc;
  }
  getStaring(){
    if(this.staringArr.length!==0){
      
    let staringString="";
    for(let i=0; i<this.staringArr.length; i++){
    
      if(i==this.staringArr.length-1){
        staringString+= this.staringArr[i];
      }else{
        staringString+= this.staringArr[i]+ ", ";
      }

    }
    return staringString;
   } else {
    return "No staring";
   }
  }

  getID(){
    return this.movieID;
  }

  getTrailerLink(){
    return this.trailerLink;
  }

  getDate(){
    return this.date;
  }
  getCategorie(){
    if(this.movieCategorieArr.length!==0){

      let catString= "";
      for(let i =0; i<this.movieCategorieArr.length; i++){
        if(i== this.movieCategorieArr.length-1){
          catString+= this.movieCategorieArr[i];
        }else{
        catString+= this.movieCategorieArr[i]+" | ";
        }
      }

      return catString;
    }
    else{
      return "No Categorie"
    }
  }

  getCategorieArr(){
    return this.movieCategorieArr;
  }


}

//-------------------------- Code to extract api data -------------------

let movieObjArr= [];


   function mineData(data){
   
   //  console.log(data);
   
  let movieIDCounter= 0;

   for(let i =0; i<data.movies.length; i++){
    
   
      for(let j =0; j<data.movies[i].list.length; j++){
     
        // mine data for each movie 
        let movieID= movieIDCounter;
        let movieTitle= data.movies[i].list[j].title;
        let imgSrc= data.movies[i].list[j].image;
        let trailerLink = data.movies[i].list[j].link;
        let movieCategorieArr= data.movies[i].list[j].categories;
        let staringArr= data.movies[i].list[0].staring;
        let date= data.movies[i].date;

      
       createMovieObj(movieTitle, imgSrc, trailerLink, movieCategorieArr,staringArr,date,movieID);
      movieIDCounter++;
    }
    

   }
  
   

}

//----------- code to save each obj into an array---------

  function createMovieObj(movieTitle,imgSrc,trailerLink,movieCategorieArr,staringArr,date,movieID){
      movieObjArr.push( new movie(movieTitle, imgSrc, trailerLink, movieCategorieArr,staringArr,date,movieID));
  }

  function checkIfDataLoaded(callback) {
    const interval = setInterval(() => {
      if (movieObjArr.length > 0) {
       // console.log('Data is done loading!');
        clearInterval(interval); // Stop checking once the data is loaded
        callback(); // Call the callback function after data is loaded
      } else {
       // console.log('Waiting for data to load...');
      }
    }, 100); // Check every 100 milliseconds
  }

  function openSingleView(id){
    console.log("opended single view");
    console.log(id);

    // trying to populate the single view class------------------------------------------------

    window.location.href = "pages/singleView.html";
  
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
  }

  function afterDataLoaded() {
    //set hero image 
    document.getElementById("homeHero").innerHTML= `
    <div id="overlaySlay">
      <img src= ${movieObjArr[129].getImg()}>
    </div>
    <div id="heroDiv">
    <h2>${movieObjArr[129].getTitle()}</h2>
    <h3>Starring:</h3>
    <h4> ${movieObjArr[129].getStaring()}</h4>
    <button type="submit" class="buttonWatch" onclick="openSingleView(129)">Watch Now</button>
    </div>
    `;

    // array movieObjArr is now populated and ready to use
    
    
    
     let topPickContainer= document.getElementById("top-picks");

     // loop through array values 0-9 ( 10 images) for top pics row
     for( let i  =0; i<9; i++){
      let movieToAdd = `  <div class="movieContainerImg" onclick="openSingleView(${movieObjArr[i].getID()})">              
                            <img src= ${movieObjArr[i].getImg()}>
                            <h3>${movieObjArr[i].getTitle()}</h3>
                          </div>`;

    topPickContainer.innerHTML+= movieToAdd;
     }

     //loop for top movies row
     let topMoviesContainer = document.getElementById("top-movies");

     for( let i  =9; i<19; i++){
      let movieToAdd = `  <div class="movieContainerImg" onclick="openSingleView(${movieObjArr[i].getID()})">              
                            <img src= ${movieObjArr[i].getImg()}>
                            <h3>${movieObjArr[i].getTitle()}</h3>
                          </div>`;

    topMoviesContainer.innerHTML+= movieToAdd;

     
     }
//loop for watchlist row 
     let watchListContainer = document.getElementById("watch-list");
     for( let i  =21; i<24; i++){

      let movieToAdd = `  <div class="movieContainerImg" onclick="openSingleView(${movieObjArr[i].getID()})">              
                            <img src= ${movieObjArr[i].getImg()}>
                            <h3>${movieObjArr[i].getTitle()}</h3>
                          </div>`;

    watchListContainer.innerHTML+= movieToAdd;

     
     }


  }
 
  


 



 

//  class movie{
//     constructor(movieTitle, date, imgSrc, staringArr, categorie){
//         this.movieTitle= movieTitle;
//         this.date= date;
//         this.imgSrc= imgSrc;
//         this.staringArr= staringArr;
//         this.categorie= categorie;
//     }

//     displayMovieNDate(){
//         console.log( "title:   " + this.movieTitle +   "      date:  "+ this.date );
//     }

//     displayStaring(){
//         let out="";
//         for( let i =0; i<this.staringArr.length; i++){
//             out+= this.staringArr[i]+"  ";
//         }
//         console.log("staring :   " + out);
//     }

//  }


// class documentary extends movie{
//     constructor(movieTitle, date, imgSrc, staringArr){
//     super(movieTitle,date, imgSrc, staringArr);
//     this.categorie= "Documentary";

//     }
// }

// class horror extends movie{
//     constructor(movieTitle, date, imgSrc, staringArr){
//         super(movieTitle,date,imgSrc,staringArr);
//         this.categorie= "Horror";
//     }
// }

// console.log(horrorObjArr);
// console.log(movieObjArr);
// console.log(docuObjArr);



  

