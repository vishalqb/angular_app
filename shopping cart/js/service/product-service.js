app.service("productService", function () {
    "use strict";
    this.productList = [
        {id : "0", name : "Shirts", price : 100, availability : 10, path : "assets/images/0.jpg", count : 0},
        {id : "1", name : "Accessories", price : 50, availability : 7, path : "assets/images/1.jpg", count : 0},
        {id : "2", name : "Sports", price : 200, availability : 21, path : "assets/images/2.jpg", count : 0},
        {id : "3", name : "Mobiles", price : 1000, availability : 14, path : "assets/images/3.jpg", count : 0},
        {id : "4", name : "Books", price : 200, availability : 16, path : "assets/images/4.jpg", count : 0},
        {id : "5", name : "Computer", price : 2000, availability : 11, path : "assets/images/5.jpg", count : 0},
        {id : "6", name : "Furniture", price : 1500, availability : 5, path : "assets/images/6.jpg", count : 0},
        {id : "7", name : "Shoes", price : 150, availability : 8, path : "assets/images/7.jpg", count : 0},
        {id : "8", name : "Bags", price : 150, availability : 6, path : "assets/images/8.jpg", count : 0}
    ];
    this.itemClicked = "";
    this.totalPrice = 0;
});