

let viewer = function () {
    let currentProduct = null;
    let products = [];
    let reviewsBox = document.querySelector(".product-reviews");
    let productsBox = document.querySelector(".products-box");

    let showReviews = function (product) {
        if (product.comments.length) {
            product.comments.forEach(element => {
                reviewsBox.append(makeComment(element));
            });
        } else {
            reviewsBox.append("NO COMMENTS")
        }

    }

    let makeComment = function (comment) {
        let reviewBox = document.createElement("div");
        let reviewText = document.createElement("p");
        let reviewDelete = document.createElement("button");

        reviewDelete.className = "review-item__delete";
        reviewDelete.textContent = "delete";

        reviewBox.className = "review-item";
        reviewBox.id = comment.id;


        reviewText.textContent = comment.text;
        reviewText.className = "review-item__text";

        reviewBox.append(reviewText, reviewDelete);

        return reviewBox;

    }

    let makeProductButton = function (product) {
        let div = document.createElement('div');
        let button = document.createElement("input");
        button.className = "product-button";
        button.type = "radio";
        button.name = "product";
        button.value = product.name;
        button.id = product.name;
        let label = document.createElement("label");
        label.textContent = product.name;
        label.setAttribute("for", product.name);


        div.append(button, label);

        productsBox.appendChild(div);
    }

    let fillProducts = function () {
        try {
            products = JSON.parse(window.localStorage.getItem("products"));
            products.forEach(element => {
                makeProductButton(element);
            });
        }
        catch (Error) {
            console.log(Error);
        };


    }



    let getChecked = function (event) {
        while (reviewsBox.firstChild) {
            reviewsBox.removeChild(reviewsBox.firstChild);
        }

        currentProduct = products.find((item) => item.name == event.target.value);
        showReviews(currentProduct);
    }

    function deleteReview(event) {
        if (event.target.classList.contains("review-item__delete")) {
            let id = event.target.parentElement.id;
            console.log(id)
            let index = currentProduct.comments.findIndex(item => item.id == id);
            currentProduct.comments.splice(index, 1);
            try {
                localStorage.setItem("products", JSON.stringify(products))
            } catch (e) {
                console.log(e);
            }
            event.target.parentElement.remove();
            if (!reviewsBox.children.length) {
                reviewsBox.append("NO COMMENTS")

            }
        }
    }


    let start = function () {
        productsBox.addEventListener("change", getChecked);
        fillProducts();
        productsBox.firstElementChild.firstElementChild.checked = "true";
        currentProduct = products.find((item) => item.name == productsBox.firstElementChild.firstElementChild.value);
        showReviews(currentProduct);
        reviewsBox.addEventListener("click", deleteReview);

    }
    start();

}