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
    console.log(category);

    category.forEach(neswItem => {
        // console.log(neswItem);
        const li = document.createElement('li');
        li.classList.add('nav2');
        li.innerHTML = `
        <a href="#">${neswItem.category_name}</a>
        
        `;
        categoriesName.appendChild(li);
    })
}

// dispalyShow();
