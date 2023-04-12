const img = document.createElement("img");

const imgUrl = new URL("../media/badbatch.jpg", import.meta.url);
img.src = imgUrl;

console.log(import.meta);

document.body.append(img);


