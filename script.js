"use strict";

const container = document.getElementsByClassName("container");
const dropMenu = document.querySelector("#select-dropdown");
const movieList = document.querySelector("#movieList"); //select
movieList.addEventListener("change", async event => {
	const apiKey = "d17f780";
	const movieUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${event.target.value}`;
	const response = await fetch(movieUrl);
    const movieData = await response.json();
	const title = document.createElement("p");
	title.innerText = movieData.title;
	//container.appendChild(title);
	console.log(movieData);
});
