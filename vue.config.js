module.exports = {
    pages: {
        'signup': {
            entry: './src/pages/signup/main.js',
            template: 'public/index.html',
            title: "Create an Account",
        },
        'login': {
            entry: './src/pages/login/main.js',
            template: 'public/index.html',
            title: 'Login to bridgeAfrica',
        },
        'add-product': {
            entry: './src/pages/add-product/main.js',
            template: 'public/index.html',
            title: 'Add a new Product/Service'
        } ,
        'list-all': {
            entry: './src/pages/list-all/main.js',
            template: 'public/index.html',
            title: 'Products and services' 
        },
        'product-page': {
            entry: './src/pages/product-page/main.js',
            template: 'public/index.html',
            title: 'Explore Product'
        },
        'index': {
            entry: './src/pages/list-all/main.js',
            template: 'public/index.html',
            title: 'Login to bridgeAfrica',
        }
    }
}