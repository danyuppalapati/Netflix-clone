const movies=document.querySelectorAll(".movie-row img");

movies.forEach(movie=>{

movie.addEventListener("mouseenter",()=>{

movie.style.boxShadow="0 0 25px red";

});

movie.addEventListener("mouseleave",()=>{

movie.style.boxShadow="none";

});

});