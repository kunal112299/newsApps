const main = document.getElementById('articles-container');



let data;
let dataLength = 0;
let author;
let publishedAt;

async function us(){
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d39fc87d08c949e2b6e9558423d988c1");
    const result = await res.json();
    data = result.articles;
    dataLength = data.length;
    author = data.author;
    publishedAt = data.publishedAt;
    renderUI();
}

async function getData(){
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d39fc87d08c949e2b6e9558423d988c1");
    const result = await res.json();
    data = result.articles;
    dataLength = data.length;
    author = data.author;
    publishedAt = data.publishedAt;
    renderUI();
}

getData();

function renderUI(){
    // const article = document.createElement('article');
    // article.innerHTML = ``;
for(let i=0; i<dataLength;i++){
    if(!data[i].urlToImage){
        const article = document.createElement('article');
article.innerHTML = `
<div class="card">
<div class="card-header">
    <img src="https://via.placeholder.com/400x200" alt="news" id = "news-img">
</div>
<div class="card-content">
    <h3 id=" news-title">${data[i].title}</h3>
    <h6 class="news-source" id ="news-source">Author: ${data[i].author}, ${data[i].publishedAt}</h6>
    <p class="news-desc" id ="news-desc">${data[i].description}</p>
    <a href ="${data[i].url}" target="_blank"> Read More....</a>
</div>
</div>
`;
main.appendChild(article);
    }else{
        const article = document.createElement('article');
article.innerHTML = `
<div class="card">
<div class="card-header">
    <img src="${data[i].urlToImage}" alt="news" id = "news-img">
</div>
<div class="card-content">
    <h3 id=" news-title">${data[i].title}</h3>
    <h6 class="news-source" id ="news-source">Author: ${data[i].author}, ${data[i].publishedAt}</h6>
    <p class="news-desc" id ="news-desc">${data[i].description}</p>
    <a href ="${data[i].url}" target="_blank"> Read More....</a>
</div>
</div>
`;
main.appendChild(article);
    }
}
}



