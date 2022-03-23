// создаем классы для корзины
class ProductList{
    constructor(container='.products'){
        this.container=container;
        this.goods=[];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts(){
        this.goods=[
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
    getSum(){
        // let x = 0;
        // this.goods.forEach(item =>{
        //     x += item.price;
        // })

        // for(let product of this.goods){
        //     x += product.price;
        // }
        // let result = this.allProducts.reduce((x,item) => x + item.price, 0);
        alert(result);
    }
}

class ProductItem{
    constructor(product, img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    
    render(){
        return `<div class="product-item">
        <img src="${this.img}" alt="mouse" width="200" height="100">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
        </div>`;
    }
}

let list = new ProductList();
list.render();
list.getSum();

class Basket{
    addGood(){

    }
    removeGood(){

    }

    changeGood(){

    }
    
    render(){

    }
}

class ElemBacket{
    render(){}
}

// создание списка продуктов + картинки
// const products = [
//     {id: 1, title: 'Notebook', price: 2000, img: "https://3dnews.ru/assets/external/illustrations/2021/03/30/1036124/mi1.jpg"},
//     {id: 2, title: 'Mouse', price: 20, img: "https://ixbt.online/live/topics/preview/00/01/67/69/c989bed929.png"},
//     {id: 3, title: 'Keyboard', price: 200, img: "https://recycleit.london/wp-content/uploads/2020/01/keyboard.jpg"},
//     {id: 4, title: 'Gamepad', price: 50, img: "https://ak.picdn.net/shutterstock/videos/1031710940/thumb/9.jpg"},
// ];

// // добавление продуктов в html
// const renderProduct = (item) => {
//     return `<div class="product-item">
//                 <img src="${item.img}" alt="mouse" width="200" height="100">
//                 <h3>${item.title}</h3>
//                 <p>${item.price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`;
// };

// // сокращение функции и убираем запятую после каждого item
// const renderPage = list => {
//     document.querySelector('.products').innerHTML = list.map(item=> renderProduct(item)).join('');
// };
// renderPage(products);

