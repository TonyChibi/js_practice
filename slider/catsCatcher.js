let url = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";

async function getCat() {
    try {
        let resp = await fetch(url);
        if (resp.ok) {
            let catUrl = await resp.json();

            return catUrl[0].url;
        } else throw new Error("bugubgubg");
    } catch (e) {
        console.log("something wrong")
        console.log(e)
    }

}