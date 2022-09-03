// alert('HI');

const loadAllNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    dispalyShow(data);

}

loadAllNews();

const dispalyShow = (categories) => {
    const categoriesName = document.getElementById('categories-name');

    // console.log(categories.data.news_category);
    const category = categories.data.news_category;
    // console.log(category);

    category.forEach(neswItem => {
        // console.log(neswItem);
        const li = document.createElement('li');
        li.classList.add('nav2');
        li.innerHTML = `
        <a onclick="loadNews('${neswItem.category_id}')" href="#">${neswItem.category_name}</a>
        
        `;
        categoriesName.appendChild(li);
        // console.log(neswItem.category_id);
    })
}

const loadNews = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await res.json();
    loadAllNewsDisplay(data);
}

const loadAllNewsDisplay = async (newsPortal) => {
    // console.log(newsPortal.data);

    const newsPortalShow = newsPortal.data;
    const breakingNews = document.getElementById('breakingNews');

    newsPortalShow.forEach(news => {
        // console.log(news);

        // destructuring
        const { thumbnail_url, title, details, author, total_view, rating } = news;

        const breakingNewsDiv = document.createElement("div");
        breakingNewsDiv.classList.add('card', 'mb-3');
        breakingNewsDiv.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${thumbnail_url}" class="img-fluid rounded-start" alt="...">
             </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                     <p class="card-text">${details.slice(0, 300)}...</p>
                     
                        <div class="d-flex align-self-end align-items-center flex-column flex-md-row">
                            <div class="col-md-4 col-12 d-flex align-items-center">

                                    <div class="col-4"><img class="img-fluid rounded-circle" src="${author.img}"></div>
                                    <div class="col-8 ps-3">
                                    <h6>${author?.name ? author.name : 'No name'}</h6>
                                    <p>${author?.published_date ? author.published_date : 'No publish date'}</p>
                                    </div>
                            </div>
                                <div class="col-md-8 col-12 d-flex justify-content-between">
                                    <div><img src="../img/carbon_view.png">
                                    ${total_view}</div>

                                    <div>
                                        <img src="../img/bxs_star-half.png">
                                        <img src="../img/ant-design_star-outlined.png">
                                        <img src="../img/ant-design_star-outlined.png">
                                        <img src="../img/ant-design_star-outlined.png">
                                        <img src="../img/ant-design_star-outlined.png">
                                        <span>${rating.number}</span>
                                    </div>

                                    <div>&#8594;</div>
                                </div>
                                     
                        </div>
                    </div>
            </div>
        </div>
        `;
        breakingNews.appendChild(breakingNewsDiv);
    })
}

//





// dispalyShow();
