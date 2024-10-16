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
   //.then((result) => mineData(result))
   .catch((error) => console.error(error));

   function mineData(data){
    //console.log(data);
   // let temp = JSON.parse(data);
  
  
    //find the display container- sothat we can append to it
   let displayContainer= document.getElementById("container");

  //console.log(temp);
  //console.log(temp.movies[0].list);
  //loop through the array and sort the info
  for(let i =0; i<data.movies.length; i++){
    let date = data.movies[i].date;
    let movieTitle= data.movies[i].list[0].title;
   // console.log(movieTitle);
   
    let imgSrc= data.movies[i].list[0].image;
    let movieDescription= data.movies[i].list[0].categories[0];
   
    //structure the data in html form

    let dataToDisplay=`
    <div class="item">
    <img src=${imgSrc}>
    <h3>${movieTitle}</h3>
    <p>${movieDescription}</p>
    </div>`;

    displayContainer.innerHTML+=dataToDisplay;
  }
}


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



//- danae class activity classes 

//-------------------------- vars to acces obj--------------------

let movieObjArr= [];
let horrorObjArr=[];
let docuObjArr=[];

   function mineData(data){
    // console.log(data);
   // let temp = JSON.parse(data);

   for(let i =0; i<data.movies.length; i++){
    let date = data.movies[i].date;
    let movieTitle= data.movies[i].list[0].title;
   // console.log(movieTitle);
   
    let imgSrc= data.movies[i].list[0].image;
    let movieCategorie= data.movies[i].list[0].categories[0];
    let staringArr= data.movies[i].list[0].staring;

    if(movieCategorie=="Documentary"){
      docuObjArr.push( new documentary(movieTitle, date, imgSrc, staringArr));
    }else if (movieCategorie =="Horror"){
      horrorObjArr.push(new horror(movieTitle,date,imgSrc,staringArr));
    }else{
        
      movieObjArr.push(new  movie(movieTitle,date,imgSrc,staringArr,movieCategorie));

    }
    

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



  

