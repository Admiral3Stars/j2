class GoodsItem{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    render(){
        return `<div class="goods-item">
                    <h3 class="goods-item-header">${this.title}</h3>
                    <p class="goods-item-price">${this.price}</p>
                </div>`;
    }
}

class GoodsList{
    constructor(){
        this.goods = [];
    }

    fetchGoods(){
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }

    // Подсчет суммы товаров
    getSumm(){
        let summ = 0;
        this.goods.forEach(good =>{
             summ += good.price;
        });
    }

    render(){
        let listHtml = '';
        this.goods.forEach(good =>{
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

// Для корзины товаров
class Cart{
    updateCart(){}
    clearCart(){}
}

// Для элемента корзины товаров
class Item{
    addItem(){}
    removeItem(){}
}

const list = new GoodsList();
list.fetchGoods();
list.render();