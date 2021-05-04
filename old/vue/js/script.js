var app = new Vue({
    el: '#app',
    data: {
        message: "Страница загружена",
        seen: true,

        array: [
            {damage: 12},
            {damage: 4},
            {damage: 17},
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

app.seen = false;
app.array.push({damage: 75});