app.controller('orderC', function($scope, productF, orderF, customerF, $location){

    let self = this;
    this.customers = {};
    this.products = {};
    this.orders = {};
    getOrders();

    function getOrders(){
        orderF.getOrders().then(function(data){
            self.orders = data;
        });
    }

    this.createOrder = function(){
        orderF.createOrder(self.newOrder).then(function(){
            this.newOrder = {};
        })
        .then(getOrders);
    }

    this.deleteOrder = function(id){
        orderF.deleteOrder(id).then(getOrders);
    }

    customerF.getCustomers().then(function(data){
        self.customers = data;
    });

    productF.getProducts().then(function(data){
        self.products = data;
    });
});
