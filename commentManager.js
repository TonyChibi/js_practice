




function commentManager() {
    let counter = 0;
    let products = [];
    let storage = window.localStorage;
    if (storage.getItem("products")) {
        products = JSON.parse(storage.getItem("products"));
    } else {
        storage.setItem("products", JSON.stringify(products));

    }
    if (storage.getItem("reviewsCounter")) {
        counter = JSON.parse(storage.getItem("reviewsCounter"));
    } else {
        storage.setItem("reviewsCounter", JSON.stringify(counter));

    }

    let newComment = function (commentText) {
        // if (commentText.length >= 50 && commentText.length <= 500) {
        //     return new Comment(commentText);
        // } else {
        //     throw new Error("incompatible length of the comment")
        // }
        counter++;
        storage.setItem("reviewsCounter", JSON.stringify(counter));
        return new Review(commentText, counter);

    }

    let start = function () {
        let button = document.querySelector(".comment-form__button");
        let textInput = document.querySelector(".text-input");
        let nameInput = document.querySelector(".name-input");

        button.addEventListener("click", (event) => {
            let value = nameInput.value ? nameInput.value.toLowerCase() : "unknown";


            let comment = newComment(textInput.textContent);

            if (products.find((item) =>
                item.name == value
            )) {
                console.log(value);
                products[products.findIndex((item) => item.name == value)].comments.push(comment);

            } else {
                console.log(value.toUpperCase())

                let product = new Product(value, [comment])
                products.push(product);
            }
            storage.setItem("products", JSON.stringify(products));
            textInput.textContent = "";
            nameInput.value = "";


        })

    }
    start();


}