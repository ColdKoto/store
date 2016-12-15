app.factory('customerF', function($http){

    class CustomerF{
        getCustomers(){
            return $http.get('/customers').then(function(res){
                return res.data;
            });
        }

        getRecentCustomers(){
            return $http.get('/customers/recent').then(function(res){
                return res.data;
            });
        }

        createCustomer(newCustomer){
            return $http.post('/customers', newCustomer);
        }

        deleteCustomer(id){
            return $http.delete('/customers/' + id);
        }
    }
    return new CustomerF();
});
