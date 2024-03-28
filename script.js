function add_article(img, title, text) {
    document.getElementById("art-list").innerHTML += `<li><img src = "${img}"><h3 class = "title">${title}</h3><p>${text}</p></li>`;
}

function reload_articles() {

    let content = JSON.parse(data);

    for(const article of content.articles) {
        add_article(article.image, article.title, article.description)
    }
}