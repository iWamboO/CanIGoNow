var app = new Vue({
    template: 
    `
     <h1>{{ name }}</h1>
    `,
    el: '#app',
    data() {
        return {
            name: "hello there"
        }
    }
}) 