"use strict";

const fetchMovies = () => {
	const movieList = document.querySelector("#movieList"); //select
	movieList.addEventListener("change", async event => {
		const movieUrl = `https://www.omdbapi.com/?apikey=d17f780&t=${event.target.value}`;
		const response = await fetch(movieUrl);
		const movieData = await response.json();
		console.log(movieData);
		renderDom(movieData);
	});
}

const renderDom = (data) => {
	const posterDiv = document.getElementById("posterDiv");
	posterDiv.innerHTML = "";
	let poster = document.createElement("img");
	poster.src = data.Poster;
	let title = document.createElement("h1");
	console.log(title);
	title.innerHTML = data.Title;
	posterDiv.appendChild(title);
	posterDiv.appendChild(poster);
	const moviePlot = document.createElement('p');
	moviePlot.innerHTML = '';
	posterDiv.appendChild(moviePlot);
	moviePlot.innerHTML = `${data.Plot}`;
}

window.onload = fetchMovies();