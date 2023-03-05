const images = ["0.img.jpg", "1.img.jpg", "2.img.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img"); //<img>

image.src = `img/${chosenImage}`; //image is now <img src="img/0.img.jpg">

document.body.appendChild(image); //at the end / prepend -> at the top
