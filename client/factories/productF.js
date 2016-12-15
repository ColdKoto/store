app.factory('productF', function($http){

    class ProductF{
        getProducts(){
            return $http.get('/products').then(function(res){
                return res.data;
            });
        }
        createProduct(newProduct){
            return $http.post('/products', newProduct);
        }
        deleteProduct(id){
            return $http.delete('/products/' + id);
        }
    }
    return new ProductF();
})
