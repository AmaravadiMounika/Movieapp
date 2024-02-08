let movies=[
    {
        name:"Avengers Endgame",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcRO7MIC2K79KcHegzrkEcAcD15ILwPk0eplp9HHqHlnPjtK5fmVqpMyDOB3gK2RdkwM&usqp=CAU",
        rating:8.9 
    },
    {
        name:"Money Heist",
        poster:"https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg?width=768&mxf-ref=https://bbfc.co.uk",
        rating:9.3
    },
    {
        name:"Wednesday",
        poster:"https://i.ebayimg.com/images/g/lv0AAOSwwXxjzvJ7/s-l1200.jpg",
        rating:8.6
    },
    {
        name:"Harry Potter",
        poster:"https://rukminim2.flixcart.com/image/850/1000/l0pm3680/poster/3/i/j/large-harry-potter-the-sorcerer-s-stone-poster-poster-print-on-original-imagcfwh8av8gukb.jpeg?q=20",
        rating:9.7
    },
    {
        name:"rab ne bana di jodi",
        poster:"https://hippy.in/wp-content/uploads/2014/07/bollywood-spoof-posters-hand-painted-2.jpg",
        rating:8
    },
    {
        name:"Baar Baar Dekho",
        poster:"https://images.wedmegood.com/wp-content/uploads/2016/12/Baar-Baar-Dekho-First-Look-Poster-2.jpg",
        rating:8.9
    },
    {
        name:"yeh jawaani hai deewani",
        poster:"https://m.media-amazon.com/images/I/91s44mjwgzL._AC_UF894,1000_QL80_.jpg",
        rating:9.5
    },
    {
        name:"ae dil hai mushkil",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6_RPeV4SnGC9HpDQFxkBl7pz3vwsDfh27bobh7GlzARJwZrcfS2MGiCfyWRHfOZU0Q8&usqp=CAU",
        rating:7.5
    },
    {
        name:"Skanda",
        poster:"https://cdn.123telugu.com/content/wp-content/uploads/2023/08/skandha-1.jpg",
        rating:7.6
    },
    {
        name:"Kushi",
        poster:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/kushi-20230924114527-19055.jpg",
        rating:8.3
    },

    {
        name:"Maestro",
        poster:"https://pbs.twimg.com/media/E9OGne1UUAE6s9i.jpg",
        rating:8.2
    },
    {
        name:"Dhamaka",
        poster:"https://m.media-amazon.com/images/M/MV5BZGU5NjkzNTgtOTI0Yy00YjNlLWFkZDktZDZkOGYwZTgyZTQ3XkEyXkFqcGdeQXVyMTU1ODQyNzg5._V1_.jpg",
        rating:8.9
    }
   





];


function searchMovie()
{
    let movieName = document.getElementById('searchvalue').value;
    if(movieName!=="")
    {
        let result=movies.filter(function(movie)
                    {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase())
                    })
        displayMovies(result);
        
    }
    else
    {
        displayMovies(movies);

    }
}
function displayMovies(data)
{
    let htmlString=``;
    for(let i=0;i<data.length;i++)
    { 
        document.getElementById("movies").innerHTML="";
    
        htmlString=htmlString+`
        <div class="movie">
            <div class="overlay">
                <div class="video">

                </div>
                <div class="details">
                    <h1>${data[i].name}</h1>
                    <h2>IMDB:${data[i].rating}</h2>
                    <p>Rami Malek . John Jacobs . Emma Stone</p>

                </div>
            </div>
            <img class="poster" src="${data[i].poster}" alt="poster">

        </div>
        `

    }
    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;
    
     
}
displayMovies(movies);








//let movieDIV=document.createElement("div");
//movieDIV.classList.add('movie');

//let overlayDIV=document.createElement("div");
//overlayDIV.classList.add("overlay");

//movieDIV.appendChild(overlayDIV);

//console.log(movieDIV);