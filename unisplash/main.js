let url = "https://api.unsplash.com/photos/random?client_id=kHsDq_n2exOyC8_DWONSaBe9AYco2OMFUnfIj8MWOD0";
// &fm=jpg&w=400&fit=max?
// kHsDq_n2exOyC8_DWONSaBe9AYco2OMFUnfIj8MWOD0
let imageEl = document.querySelector(".image");
console.log(imageEl)

async function getPhoto() {
    try {
        let resp = await fetch(url)
        let img = await resp.json();
        console.log(img.links)

        if (resp.ok) {

            imageEl.setAttribute("src", img.urls.small);
            imageEl.setAttribute("alt", img.description);
            likesCounter = +img.likes;
            counter.textContent = likesCounter;
            let author = document.createElement("h1");
            author.textContent = `Author: ${img.user.name} or ${img.user.username} `;
            let collection = document.createElement("h2")
            collection.textContent = `Collection ${img.current_user_collections.title}`;
            imageEl.insertAdjacentElement("afterend", collection);
            imageEl.insertAdjacentElement("afterend", author);

        }
    }
    catch (err) { }

}
getPhoto();