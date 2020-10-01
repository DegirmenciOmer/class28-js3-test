"use strict";

const dropMenu = document.querySelector("#select-dropdown");
const movieList = document.querySelector("#movieList"); //select
movieList.addEventListener("change", async event => {
	const apiKey = "d17f780";
	const movieUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${event.target.value}`;

	const response = await fetch(movieUrl);
	const movieData = await response.json();
	let poster = document.createElement("img");
	const imageUrl = movieData.Poster;
	poster.src = imageUrl;
	const posterDiv = document.getElementById("posterDiv");
	posterDiv.innerHTML = "";
	posterDiv.appendChild(poster);
});
