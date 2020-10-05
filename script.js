"use strict";

const movies = () => {
	const movieList = document.querySelector("#movieList"); //select
	movieList.addEventListener("change", fetchMovies);
}

const fetchMovies = async event => {
	const movieUrl = `https://www.omdbapi.com/?apikey=d17f780&t=${event.target.value}`;
	const response = await fetch(movieUrl);
	const movieData = await response.json();
	renderDom(movieData);
}
const renderDom = (data) => {
	const posterDiv = document.getElementById("posterDiv");
	posterDiv.innerHTML = ""; //clean the div upon every select action
	//add image
	let poster = document.createElement("img");
	poster.src = data.Poster;
	posterDiv.appendChild(poster);
	//add title
	let title = document.createElement("h1");
	title.textContent = data.Title;
	console.log(title.innerHTML);
	posterDiv.appendChild(title);
	//add plot
	const moviePlot = document.createElement('p');
	posterDiv.appendChild(moviePlot);
	moviePlot.innerText = `${data.Plot}`;
}

window.onload = movies();