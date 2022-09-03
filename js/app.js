// alert('HI');

//load moadal
const modalDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const data = await res.json();
    modalShow(data.data[0]);
}

const modalShow = (moreDetails) => {

    const { image_url, title, details } = moreDetails;

    console.log(moreDetails);
    const moadalClick = document.getElementById("modal-show");
    moadalClick.textContent = ""; // rest previous click or search
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-content");
    modalDiv.innerHTML = `
 
        <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">More Deatails</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img class="img-fluid" src="${image_url}">
        </div> 
        <div class="modal-body">
        <h4 class="card-text">${title}...</4>
        </div>
        <div class="modal-body">
        <p class="card-text">${details}...</p>
        </div>
        <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary">Save changes</button>
        </div>

    `;
    moadalClick.appendChild(modalDiv);
}


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
    breakingNews.textContent = "";
    newsPortalShow.forEach(news => {
        // console.log(news);

        // destructuring
        const { thumbnail_url, title, details, author, total_view, rating, _id } = news;

        const breakingNewsDiv = document.createElement("div");
        breakingNewsDiv.classList.add('card', 'mb-3');
        breakingNewsDiv.innerHTML = `
        <div class="row g-0" onclick="modalDetails('${_id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
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




// dispalyShow();
