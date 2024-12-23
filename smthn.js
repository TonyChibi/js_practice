

function addImg(src) {
    let box = document.createElement("div");
    let img = document.createElement("img");
    let field = document.querySelector(".images");
    img.alt = "cat";
    img.src = src;
    img.classList.add("cat-img")
    box.appendChild(img);
    box.classList.add("img-box")
    field.appendChild(box);


}
async function fillImages() {
    let data = await getJson();
    for (obj of data) {
        console.log(obj.url);
        addImg(obj.url);
    }
}
fillImages();