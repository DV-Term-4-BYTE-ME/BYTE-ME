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

fetch("https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-movies", requestOptions)
   .then((response) => response.json())
   // console.log(response)
   .then((result) => mineData(result))
   .catch((error) => console.error(error));

  


//--------------------------------login js --------------------------------------------------------





let validEmail= "william@openwindow.co.za";
let validPassword = "Will-I-Am-001";

function validateEmail(){
  let emailInput = document.getElementById("loginEmail");
  let passwordInput = document.getElementById("loginPassword");

  if(emailInput.value !== validEmail){

    emailInput.style.borderBottomColor='red';
    console.log("email hoe");
  }if(passwordInput.value!==validPassword){
    passwordInput.style.borderBottomColor='red';
    console.log("ooi");
  }
  if(emailInput.value==validEmail && passwordInput.value ==validPassword){
    console.log("done");
    document.location.href = "../index.html";
  }
}



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
    console.log("hello from inside gettitle");
    return this.movieTitle;
  }
  getImg(){
    return this.imgSrc;
  }


}

//-------------------------- Code to extract api data -------------------

let movieObjArr= [];


   function mineData(data){
     console.log(data);
   
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
      movieObjArr.push( new movie(movieTitle, imgSrc, trailerLink, movieCategorieArr,staringArr,date,movieID))
  }

  console.log(movieObjArr);



 

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



  

