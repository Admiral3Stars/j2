Vue.component('cart', {
    name: 'cart',
    props: ['goods', 'deleteFromCart'],
    data: () => ({
        isVisibleCart: false,
    }),
    methods: {
        handleCart() {
            this.isVisibleCart = !this.isVisibleCart;
        },
    },
    template: `
        <div>
            <button @click="handleCart" class="cart-button" type="button">Корзина</button>
            <div v-show="isVisibleCart" class="cart">
                <div>Корзина</div>
                <div v-if="goods.length !== 0" class="goods-list">
                    <div class="goods-item" v-for="good in goods">
                        <cart-item @delete-from-cart="deleteFromCart" :good="good" />
                    </div>
                </div>
                <div v-else>Пусто. Добавьте товар</div>
            </div>
        </div>
    `
});