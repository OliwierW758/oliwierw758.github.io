function add_article(img, title, text) {
    document.getElementById("art-list").innerHTML += `<li><img src = "${img}"><h3 class = "title">${title}</h3><p>${text}</p></li>`;
}

function reset() {
    document.getElementById("art-list").innerHTML = "";
}

function reload_articles() {

    reset();

    let selected_category = document.querySelector('input[name="option"]:checked').value;

    console.log(selected_category);

    let data = JSON.parse(data_file);

    for(let article of data.articles) {
        if(article.category = selected_category) {

            console.log(article.title);
            console.log(article.category);
            
            add_article(article.image, article.title, article.description);
        }
    }
}