app.controller('customerC', function($scope, customerF, $location){

    let self = this;
    this.customers = {};
    fetchCustomers();

    function fetchCustomers(){
        customerF.getCustomers().then(function(data){
            self.customers = data;
        });
    }

    this.createCustomer = function(){
        customerF.createCustomer(self.newCustomer).then(function(){
            this.newCustomer = {};
        })
        .then(fetchCustomers);
    }

    this.deleteCustomer = function(id){
        customerF.deleteCustomer(id).then(fetchCustomers);
    }
})
