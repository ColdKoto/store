app.factory('orderF', function($http){

    class OrderF{
        getOrders(){
            return $http.get('/orders').then(function(res){
                return res.data;
            });
        }

        getRecentOrders(){
            return $http.get('/orders/recent').then(function(res){
                return res.data;
            });
        }

        createOrder(newOrder){
            return $http.post('/orders/' + newOrder._product + '/' + newOrder._customer, newOrder)
                .then(function(response){
                    if (!response.data) {
                        throw new Error('Could not complete purchase...');
                    }
                });
        }
        deleteOrder(id){
            return $http.delete('/orders/' + id);
        }
    }
    return new OrderF();
})
