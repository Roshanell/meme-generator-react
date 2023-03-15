import React from "react";
import memesData from "../memesData.js";

function Form() {
	//const randomImage = {Math.floor(Math.random() * memesData.data.memes.length)}
	function getMemeImage() {
		const memesArr = memesData.data.memes;
		const randomImageIndex = Math.floor(Math.random() * memesArr.length);
		const url = memesArr[randomImageIndex].url;
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
		</main>
	);
}

export default Form;
