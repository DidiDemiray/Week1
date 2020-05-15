const compleet = {
    Movies: [
      {
        Title: "X-Men: Days of Future Past",
        Year: "2014",
        imdbID: "tt1877832",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "X-Men: First Class",
        Year: "2011",
        imdbID: "tt1270798",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SX300.jpg",
      },
      {
        Title: "X-Men",
        Year: "2000",
        imdbID: "tt0120903",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "X2: X-Men United",
        Year: "2003",
        imdbID: "tt0290334",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_SX300.jpg",
      },
      {
        Title: "X-Men: The Last Stand",
        Year: "2006",
        imdbID: "tt0376994",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
      },
      {
        Title: "X-Men Origins: Wolverine",
        Year: "2009",
        imdbID: "tt0458525",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
      },
      {
        Title: "X-Men: Apocalypse",
        Year: "2016",
        imdbID: "tt3385516",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg",
      },
      {
        Title: "X-Men: The Animated Series",
        Year: "1992–1997",
        imdbID: "tt0103584",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
      {
        Title: "X-Men: Evolution",
        Year: "2000–2003",
        imdbID: "tt0247827",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOWMyMThhN2UtMGMzYi00ODVmLWFlODItYmZlMzMxYzE3MmZkXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
      },
      {
        Title: "Wolverine and the X-Men",
        Year: "2008–2009",
        imdbID: "tt0772145",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzk4Nzg3NjMyMV5BMl5BanBnXkFtZTcwMjk3MjU0Mg@@._V1_SX300.jpg",
      },
      {
        Title: "The Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      },
      {
        Title: "Avengers: Infinity War",
        Year: "2018",
        imdbID: "tt4154756",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
      },
      {
        Title: "Avengers: Age of Ultron",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
      },
      {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
      },
      {
        Title: "The Avengers",
        Year: "1998",
        imdbID: "tt0118661",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
      },
      {
        Title: "The Avengers: Earth's Mightiest Heroes",
        Year: "2010–2012",
        imdbID: "tt1626038",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
      },
      {
        Title: "Ultimate Avengers",
        Year: "2006",
        imdbID: "tt0491703",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg",
      },
      {
        Title: "Ultimate Avengers II",
        Year: "2006",
        imdbID: "tt0803093",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
      {
        Title: "The Avengers",
        Year: "1961–1969",
        imdbID: "tt0054518",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg",
      },
      {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
      },
      {
        Title: "Batman v Superman: Dawn of Justice",
        Year: "2016",
        imdbID: "tt2975590",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "Batman",
        Year: "1989",
        imdbID: "tt0096895",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
      },
      {
        Title: "Batman Returns",
        Year: "1992",
        imdbID: "tt0103776",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
      },
      {
        Title: "Batman Forever",
        Year: "1995",
        imdbID: "tt0112462",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      },
      {
        Title: "Batman & Robin",
        Year: "1997",
        imdbID: "tt0118688",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
      },
      {
        Title: "The Lego Batman Movie",
        Year: "2017",
        imdbID: "tt4116284",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
      },
      {
        Title: "Batman: The Animated Series",
        Year: "1992–1995",
        imdbID: "tt0103359",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
      },
      {
        Title: "Batman: Under the Red Hood",
        Year: "2010",
        imdbID: "tt1569923",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
      {
        Title: "Batman: The Dark Knight Returns, Part 1",
        Year: "2012",
        imdbID: "tt2313197",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
      },
      {
        Title: "The Princess Bride",
        Year: "1987",
        imdbID: "tt0093779",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg",
      },
      {
        Title: "Princess Mononoke",
        Year: "1997",
        imdbID: "tt0119698",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      },
      {
        Title: "The Princess Diaries",
        Year: "2001",
        imdbID: "tt0247638",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "The Princess and the Frog",
        Year: "2009",
        imdbID: "tt0780521",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjEyOTQ5NzAzNl5BMl5BanBnXkFtZTcwMTcyNTU1Mg@@._V1_SX300.jpg",
      },
      {
        Title: "The Princess Diaries 2: Royal Engagement",
        Year: "2004",
        imdbID: "tt0368933",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODljNTU2ZGMtMWI5Yy00MGNkLTg2MTktN2NhZjY0NDcwMDhiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "Xena: Warrior Princess",
        Year: "1995–2001",
        imdbID: "tt0112230",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTdkYjA4YzAtMjNiZS00OTgyLTg5Y2ItNGIwZGQyMTUzNzFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
    ]
};

console.log(compleet);

const MovieList = compleet.Movies;
const lijst = document.getElementById('movieweergave');
const radiobut = document.querySelector('.radiobut');

//naar scherm krijgen

const allMoviesPoster = MovieList.map((poster) => {
    return poster.Poster;
})

const allMoviesLink = MovieList.map((ID) =>{
    return ID.imdbID;
})

for(let i =0 ; i < MovieList.length; i++ ){
    let posterNameMovie = allMoviesPoster [i];
    let imdbSite = allMoviesLink [i];
    //maak elementen die in movieweergave moeten komen
    let listItem = document.createElement('li');
    let imdbRef = document.createElement('a');
    let imgPoster = document.createElement('img');
    // geef de elementen een betekenis
    imgPoster.setAttribute('src', posterNameMovie);
    imdbRef.setAttribute('href', 'https://www.imdb.com/title/' + imdbSite);
    //voeg de elementen toe aan lijst(movieweergave)
    lijst.appendChild(listItem);
    listItem.appendChild(imdbRef);
    imdbRef.appendChild(imgPoster);
}
console.log('Alle films');

//functies aan de radiobuttons geven dmv addEventListener

const radiobutn = document.getElementById('radiobuttons');

//dmv value aanroepen
Array.from(radiobutn).forEach((radiobutton) => {
    radiobutton.addEventListener('change', () => {
        (console.log(event.target));
        (console.log(event.target.value));

        while (movieweergave.firstChild){
            lijst.firstChild.remove();
        }

    const valueChange = event.target.value;
        switch (valueChange){

                    // per filter behandelen op bijna dezelfde manier Recent/Avengers/X-men/Princess/Batman
                     
            case 'recent':

                    //returnen van een film uit het jaar 2014 en later, meerdere opties dmv ||
                    const releaseYear = MovieList.filter((filterObject) => {
                        return filterObject.Year.includes('2014') || filterObject.Year.includes('2015') || filterObject.Year.includes('2016') || filterObject.Year.includes('2017') || filterObject.Year.includes('2018') || filterObject.Year.includes('2019') || filterObject.Year.includes('2020');
                    }).map((poster) => {
                        return poster.Poster;
                    })

                    const IDsearch = MovieList.filter((filterObject) => {
                        return filterObject.Year.includes('2014') || filterObject.Year.includes('2015') || filterObject.Year.includes('2016') || filterObject.Year.includes('2017') || filterObject.Year.includes('2018') || filterObject.Year.includes('2019') || filterObject.Year.includes('2020');
                    }).map((ID) => {
                        return ID.imdbID;
                    })

                    //voor alle films muit het jaar 2014+, voer het volgende uit, 1 voor 1 i++
                    for(let i = 0; i< releaseYear.length; i++){
                        let posterNameMovie = releaseYear[i];
                        let imdbIDsearch = IDsearch[i];
                        // elementen maken die straks met appendChild in de ul(lijst) worden gezet
                        let listItem = document.createElement('li');
                        let imdbReference = document.createElement('a');
                        let imgPoster = document.createElement('img');
                        // gemaakte elementen een 'betekenis' geven, dmv de poster en de imdbID er aan te koppelen
                        imdbReference.setAttribute('src', posterNameMovie);
                        imgPoster.setAttribute('href', 'https://www.imdb.com/title/' + imdbIDsearch);
                        // gemaakte elementen toevoegen aan de parrent, dmv parrent.appendChild(child)
                        lijst.appendChild(listItem);
                        listItem.appendChild(imdbReference);
                        imdbReference.appendChild(imgPoster);
                        }
                        console.log('Recent Movie')
                        break
                        


            case'avengers':
                     
                    //returnen van een film die avengers bevat
                    const filterAvengers = MovieList.filter((filterObject) => {
                        return filterObject.Title.includes('Avengers');
                    }).map((poster) => {
                        return poster.Poster;
                    })

                    const filterAvengersID = MovieList.filter((filterObject) => {
                        return filterObject.Title.includes('Avengers');
                        }).map((ID) => {
                        return ID.imdbID;
                    })

                    //voor alle films met avengers in de naam, voer het volgende uit, 1 voor 1 i++
                    for(let i = 0; i< filterAvengers.length; i++){
                        let posterNameMovie = filterAvengers[i];
                        let imdbIDsearch = filterAvengersID[i];
                        // elementen maken die straks met appendChild in de ul(lijst) worden gezet
                        let listItem = document.createElement('li');
                        let imdbReference = document.createElement('a');
                        let imgPoster = document.createElement('img');
                        // gemaakte elementen een 'betekenis' geven, dmv de poster en de imdbID er aan te koppelen
                        imdbReference.setAttribute('src', posterNameMovie);
                        imgPoster.setAttribute('href', 'https://www.imdb.com/title/' + imdbIDsearch);
                        // gemaakte elementen toevoegen aan de parrent, dmv parrent.appendChild(child)
                        lijst.appendChild(listItem);
                        listItem.appendChild(imdbReference);
                        imdbReference.appendChild(imgPoster);
                        }
                        console.log('Avengers Movie')
                        break

            case 'x-men':

                    //returnen van een film die X-men bevat
                    const filterXmen = MovieList.filter((filterObject) => {
                        return filterObject.Title.includes('X-men');
                    }).map((poster) => {
                        return poster.Poster;
                    })

                    const filterXmenID = MovieList.filter((filterObject) => {
                        return filterObject.Title.includes('X-men');
                        }).map((ID) => {
                        return ID.imdbID;
                    })

                    //voor alle films met X-men in de naam, voer het volgende uit, 1 voor 1 i++
                    for(let i = 0; i< filterAvengers.length; i++){
                        let posterNameMovie = filterXmen[i];
                        let imdbIDsearch = filterXmenID[i];
                        // elementen maken die straks met appendChild in de ul(lijst) worden gezet
                        let listItem = document.createElement('li');
                        let imdbReference = document.createElement('a');
                        let imgPoster = document.createElement('img');
                        // gemaakte elementen een 'betekenis' geven, dmv de poster en de imdbID er aan te koppelen
                        imdbReference.setAttribute('src', posterNameMovie);
                        imgPoster.setAttribute('href', 'https://www.imdb.com/title/' + imdbIDsearch);
                        // gemaakte elementen toevoegen aan de parrent, dmv parrent.appendChild(child)
                        lijst.appendChild(listItem);
                        listItem.appendChild(imdbReference);
                        imdbReference.appendChild(imgPoster);
                        }
                        console.log('X-men Movie')
                        break

            case 'princess':

                    //returnen van een film die princess bevat
                    const filterPrincess = MovieList.filter((filterObject) => {
                        return filterObject.Title.includes('Princess');
                    }).map((poster) => {
                        return poster.Poster;
                    })

                    const filterPrincessID = MovieList.filter((filterObject) => {
                        return filterObject.Title.includes('Princess');
                        }).map((ID) => {
                        return ID.imdbID;
                    })

                    //voor alle films met princess in de naam, voer het volgende uit, 1 voor 1 i++
                    for(let i = 0; i< filterPrincess.length; i++){
                        let posterNameMovie = filterPrincess[i];
                        let imdbIDsearch = filterPrincessID[i];
                        // elementen maken die straks met appendChild in de ul(lijst) worden gezet
                        let listItem = document.createElement('li');
                        let imdbReference = document.createElement('a');
                        let imgPoster = document.createElement('img');
                        // gemaakte elementen een 'betekenis' geven, dmv de poster en de imdbID er aan te koppelen
                        imdbReference.setAttribute('src', posterNameMovie);
                        imgPoster.setAttribute('href', 'https://www.imdb.com/title/' + imdbIDsearch);
                        // gemaakte elementen toevoegen aan de parrent, dmv parrent.appendChild(child)
                        lijst.appendChild(listItem);
                        listItem.appendChild(imdbReference);
                        imdbReference.appendChild(imgPoster);
                        }
                        console.log('Princess Movie')
                        break

                    
            case 'batman':

                        //returnen van een film die Batman bevat
                    const filterBatman = MovieList.filter((filterObject) => {
                        return filterObject.Title.includes('Batman');
                    }).map((poster) => {
                        return poster.Poster;
                    })

                    const filterBatmanID = MovieList.filter((filterObject) => {
                        return filterObject.Title.includes('Avengers');
                        }).map((ID) => {
                        return ID.imdbID;
                    })

                    //voor alle films met Batman in de naam, voer het volgende uit, 1 voor 1 i++
                    for(let i = 0; i< filterAvengers.length; i++){
                        let posterNameMovie = filterBatman[i];
                        let imdbIDsearch = filterBatmanID[i];
                        // elementen maken die straks met appendChild in de ul(lijst) worden gezet
                        let listItem = document.createElement('li');
                        let imdbReference = document.createElement('a');
                        let imgPoster = document.createElement('img');
                        // gemaakte elementen een 'betekenis' geven, dmv de poster en de imdbID er aan te koppelen
                        imdbReference.setAttribute('src', posterNameMovie);
                        imgPoster.setAttribute('href', 'https://www.imdb.com/title/' + imdbIDsearch);
                        // gemaakte elementen toevoegen aan de parrent, dmv parrent.appendChild(child)
                        lijst.appendChild(listItem);
                        listItem.appendChild(imdbReference);
                        imdbReference.appendChild(imgPoster);
                        }
                        console.log('Batman Movies')
                        break

            }
        })
    })
    



    //  WAAAAAR GAAAT HEEEETTT MISSSS?