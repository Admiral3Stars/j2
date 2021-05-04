const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue ({
    el: '#app',
    data: () => ({
        goods: [],
        filteredGoods: [],
        searchLine: '',
        isVisibleCart: false,
    }),
    mounted(){
        this.makeGETRequest(`${API_URL}/catalogData.json`, (obj) => {
            this.goods = JSON.parse(obj);
            this.filteredGoods = JSON.parse(obj);
        });
    },
    methods: {
        filterGoods(){
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        },
        makeGETRequest(url, callback){
            let xhr;
        
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            }else if(window.ActiveXObject){
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        
            xhr.onreadystatechange = function(){
                if (xhr.readyState === 4){
                    callback(xhr.responseText);
                }
            }
        
            xhr.open('GET', url, true);
            xhr.send();
        },
        handelCart() {
            this.isVisibleCart = !this.isVisibleCart;
        }
    }
});

// class GoodsItem{
//     constructor(item_title, item_price){
//         this.item_title = item_title;
//         this.item_price = item_price;
//     }

//     render(){
//         return `<div class="goods-item">
//                     <h3>${this.item_title}</h3>
//                     <p>${this.item_price}</p>
//                 </div>`;
//     }
// }

// // Функция запроса на сервер и получения ответа
// /*function makeGETRequest(url, callback){
//     let xhr;

//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     }else if(window.ActiveXObject){
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xhr.onreadystatechange = function(){
//         if (xhr.readyState === 4){
//             callback(xhr.responseText);
//         }
//     }

//     xhr.open('GET', url, true);
//     xhr.send();
// }*/

// // Функция запроса на сервер и получения ответа на промисах
// function makeGETRequest(url, callback){
//     return new Promise(function (resolve, reject){

//         let xhr;

//         if (window.XMLHttpRequest) {
//             xhr = new XMLHttpRequest();
//         }else if(window.ActiveXObject){
//             xhr = new ActiveXObject("Microsoft.XMLHTTP");
//         }

//         xhr.open('GET', url, true);
//         xhr.send();
//         xhr.onload = function(){
//             resolve(xhr.responseText);
//         }
//         xhr.onerror = function(){
//             reject("Всё херня, Миша");
//         }
//     });
// }

// class GoodsList{
//     constructor(){
//         this.goods = [];
//     }

//     // fetchGoods(cb) {
//     //     makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
//     //       this.goods = JSON.parse(goods);
//     //       cb();
//     //     })
//     //   }

//     fetchGoods(func){
//         makeGETRequest(`${API_URL}/catalogData.json`).then((obj) => {
//             this.goods = JSON.parse(obj);
//             func();
//         },
//         (error) => {
//             console.log(error);
//         });
//     }

//     // Подсчет суммы товаров
//     getSumm(){
//         let summ = 0;
//         this.goods.forEach(good =>{
//              summ += good.price;
//         });
//     }

//     render(){
//         let listHtml = '';
//         this.goods.forEach(good => {
//           const goodItem = new GoodsItem(good.product_name, good.price);
//           listHtml += goodItem.render();
//         });
//         document.querySelector('.goods-list').innerHTML = listHtml;
//     }
// }

// // Класс корзины
// class Cart {
//     constructor() {
//         this.cartGoods = [];
//     }

//     // Добавление товара в корзину
//     addCart(id) {
//         let toCart;
//         list.goods.forEach(function(item) {
//             if(id == item.id_product) {
//                 toCart = {
//                     id: item.id_product,
//                     title: item.product_name,
//                     price: item.price,
//                 }
//             }
//         });
//         if (toCart !== undefined) this.cartGoods.push(toCart);
//         this.cartCount();
//     }

//     // Удаление товара из корзины
//     deleteCart(id) {
//         let getIdElemen = undefined;
//         this.cartGoods.forEach(function(item, i) {
//             if(id == item.id) {
//                 getIdElemen = i;
//             }  
//         });
//         if (getIdElemen !== undefined) this.cartGoods.splice(getIdElemen, 1);
//         this.cartCount();
//     }

//     // Считаем количество товаров в корзине
//     cartCount() {
//         let count = this.cartGoods.length;
//         console.log("в корзине " + count + " товаров")
//     }
// }

// // Для элемента корзины товаров
// class Item{
//     addItem(){}
//     removeItem(){}
// }

// const list = new GoodsList();
// list.fetchGoods(() => {
//   list.render();
// });


// // Вписывайте какие товары добавить через addCart, какие удалить через daleteCart, ну и список товаров в cartGoods. Скажите, можно как-то избавится от ожидания fetchGood? дело в том, что без этого метода данных как бы ещё нет (сервер не успел прислать), но постоянно писать list.fetchGoods(() тоже такое себе. Пытался по разному эксперементировать, что-то у меня от этого избавиться не получилось.
// const basket = new Cart;
// list.fetchGoods(() => {
//     basket.addCart(123);
//     basket.addCart(456);
//     basket.deleteCart(123);
//     console.log(basket.cartGoods); // вывод всех товаров
// });