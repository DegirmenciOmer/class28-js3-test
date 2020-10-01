'use strict'

const movieUrl = `https://www.omdbapi.com/?apikey=d17f780&`;

const fetchJSON = async url => {
    try {
        const response = await fetch(url);
        console.log(response);
        const parsedData = await response.json();
        console.log(parsedData);
        console.log(parsedData.Title, parsedData.Plot, parsedData.Poster);
        const dropMenu = document.querySelector('#select-dropdown');
        console.log(dropMenu);
        const movieList = document.querySelector('#movieList')//select
       
    } catch (error) {
        console.log(error);

    }

}

window.onload = fetchJSON(movieUrl);


