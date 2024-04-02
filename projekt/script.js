function add_article(img, title, text) {
    document.getElementById("art-list").innerHTML += `<li><img src = "${img}"><h3 class = "title">${title}</h3><p>${text}</p></li>`;
}

function reset() {
    document.getElementById("art-list").innerHTML = "";
}

function reload_articles() {

    reset();

    let selected_category = document.querySelector('input[name="option"]:checked').value;

    let data = JSON.parse(data_file);

    for(let article of data.articles) {

        if(article.category == selected_category || selected_category == "wszystko") {
            add_article(article.image, article.title, article.description);
        }
    }
}