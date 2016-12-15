app.controller('productC', function($scope, productF, $location){

    let self = this;
    this.products = {};
    fetchProducts();

    function fetchProducts(){
        productF.getProducts().then(function(data){
            self.products = data;
        });
    }

    this.createProduct = function(){
        productF.createProduct(self.newProduct).then(function(){
            this.newProduct = {};
        })
        .then(fetchProducts);
    }

    this.deleteProduct = function(id){
        productF.deleteProduct(id).then(fetchProducts);
    }
});
