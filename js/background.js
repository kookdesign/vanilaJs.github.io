const images = ["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg","bg6.jpg","bg7.jpg","bg8.jpg","bg9.jpg","bg10.jpg"]
const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("div");
bgImage.id = 'bgImg';

document.body.appendChild(bgImage);

bgImage.style.background = `url(img/${chosenImg}) no-repeat left top / cover`;