// создание списка продуктов + картинки
const products = [
    {id: 1, title: 'Notebook', price: 2000, img: "https://3dnews.ru/assets/external/illustrations/2021/03/30/1036124/mi1.jpg"},
    {id: 2, title: 'Mouse', price: 20, img: "https://ixbt.online/live/topics/preview/00/01/67/69/c989bed929.png"},
    {id: 3, title: 'Keyboard', price: 200, img: "https://recycleit.london/wp-content/uploads/2020/01/keyboard.jpg"},
    {id: 4, title: 'Gamepad', price: 50, img: "https://ak.picdn.net/shutterstock/videos/1031710940/thumb/9.jpg"},
];

// добавление продуктов в html
const renderProduct = (item) => {
    return `<div class="product-item">
                <img src="${item.img}" alt="mouse" width="200" height="100">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};

// сокращение функции и убираем запятую после каждого itema
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item=> renderProduct(item)).join('');
};
renderPage(products);