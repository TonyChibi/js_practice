let slider = document.querySelector(".images");
let pagination = document.querySelector(".pagination")

let prev = document.querySelector(".prevBtn")
let next = document.querySelector(".nextBtn")
let images = [];
let currentImg = null;
let currentPage = null;
let imgBoxWidth = "600px";
addImage();

async function addImage(id = 0) {
    let url = await getCat();

    let img = document.createElement("img");
    img.src = url;
    img.alt = "IMAGE";
    img.style.width = `${imgBoxWidth}`;
    img.style.height = "inherit";
    img.style.transition = " width 0.6s ";


    img.setAttribute("imgId", id);
    slider.append(img);



    let pag = document.createElement("span");
    pag.textContent = id + 1 + "\t";
    pag.setAttribute("imgId", id);
    pag.classList.add("active");
    pagination.append(pag);
    images.push(img);
    currentImg = img;
    currentPage = pag;
}

pagination.addEventListener("click", ev => {
    if (ev.target.tagName == "SPAN") {
        currentImg.style.width = "0px";
        currentPage.classList.remove("active");

        currentImg = images[+ev.target.getAttribute("imgId")];
        currentPage = pagination.querySelector(`[imgId = "${currentImg.getAttribute('imgId')}"]`)


        currentImg.style.width = `${imgBoxWidth}`;
        currentPage.classList.add("active");

    }
})

prev.addEventListener("click", ev => {
    if (currentImg.getAttribute("imgId") > 0) {
        currentImg.style.width = "0px";
        currentPage.classList.remove("active");

        currentImg = images[+currentImg.getAttribute("imgId") - 1];
        currentPage = pagination.querySelector(`[imgId = "${currentImg.getAttribute('imgId')}"]`)

        currentImg.style.width = `${imgBoxWidth}`;
        currentPage.classList.add("active");
    }

})

next.addEventListener("click", ev => {
    currentImg.style.width = "0px";
    currentPage.classList.remove("active");

    if (currentImg.getAttribute("imgId") == images.length - 1) {
        addImage(images.length);

    } else {
        currentImg = images[+currentImg.getAttribute("imgId") + 1];
        currentPage = pagination.querySelector(`[imgId = "${currentImg.getAttribute('imgId')}"]`)


        currentImg.style.width = `${imgBoxWidth}`;
        currentPage.classList.add("active");

    }
})