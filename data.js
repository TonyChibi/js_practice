let src = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=2";
// let key = "DEMO-API-KEY";
async function getJson() {
    let response = await fetch(src);
    let data = await response.json();
    for (obj of data) {
        console.log(obj.url);
    }
    return data;
}

async function getData(src) {
    const url = "https://example.org/products.json";
    try {
        const response = await fetch(src);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

getJson();
getData(src);