Vue.component('cart-item', {
    name: 'goods-item',
    props: ['good'],
    template: `
        <div>
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
            <button @click.prevent="$emit('delete-from-cart', good)">Удалить</button>
        </div>
    `
});