import React from "react";
import memesData from "../memesData.js";
import { useState } from "react";

function Form() {
	//const randomImage = {Math.floor(Math.random() * memesData.data.memes.length)}
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = useState(memesData);
	function getMemeImage() {
		const memesArr = memesData.data.memes;
		const randomImageIndex = Math.floor(Math.random() * memesArr.length);
		const url = memesArr[randomImageIndex].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
		console.log(url);
	}
	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top text" className="form--input" />
				<input type="text" placeholder="Bottom text" className="form--input" />
				<button className="form--button" onClick={getMemeImage}>
					Get a new meme image 🖼
				</button>
			</div>
			<img src={meme.randomImage} className="meme-image" />
		</main>
	);
}

export default Form;
