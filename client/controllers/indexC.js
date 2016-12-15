app.controller('indexC', function($scope, productF, orderF, customerF, $location, moment){

    let self = this;
    this.products = {};
    this.recentOrders = {};
    this.recentCustomers = {};

    productF.getProducts().then(function(data){
        self.products = data;
    });

    orderF.getRecentOrders().then(function(data){
        self.recentOrders = data.map( function(order){
            order.created_at = new Date(order.created_at);
            return order;
        });
    });
    
    customerF.getRecentCustomers().then(function(data){
        self.recentCustomers = data.map( function(customer){
            customer.created_at = new Date(customer.created_at);
            return customer;
        });
    });
});
