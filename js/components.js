Vue.component('search', {
    name: 'search',
    props: ['searchLine'],
    template: `
        <div>
            <input :value="searchLine" @input="$emit('input', $event.target.value)" type="text" class="header-search">
            <button @click="$emit('filterGoods')" class="search-button">Найти</button>
        </div>
    `
});

Vue.component('cart', {
    name: 'cart',
    data: () => ({
        isVisibleCart: false,
    }),
    methods: {
        handelCart() {
            this.isVisibleCart = !this.isVisibleCart;
        }
    },
    template: `
    <div>
        <button @click="handelCart" class="cart-button" type="button">Корзина</button>
        <div v-show="isVisibleCart" class="content-cart">
            Корзина
        </div>
    </div>
    `
});