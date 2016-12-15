const customer = require('../models/customer'),
      order    = require('../models/order');

class CustomersController{
    index(req, res){
        customer.find({}, function(err, customers){
            if(err){
                res.json(err);
            }
            else{
                res.json(customers);
            }
        });
    }
    create(req, res){
        customer.create(req.body, function(err){
            if(err){
                return res.json(err);
            }
            return res.json(true);
        });
    }
    delete(req, res){
        order.removeOrdersByCustomerId(req.params.id, function(err){
            if(err){
                return res.json(err);
            }
            customer.remove({ _id: req.params.id }, function(err){
                if(err){
                    return res.json(err);
                }
                return res.json(true);
            });
        });
    }
    recent(req, res){
        customer.find({})
          .sort('-created_at')
          .limit(3)
          .exec(function(err, results){
            res.json(results);
          });
    }
}

module.exports = new CustomersController;
