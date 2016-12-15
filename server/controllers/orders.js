const order   = require('../models/order'),
      product = require('../models/product');

class OrdersController{
    index(req, res){
        order.find({})
            .populate('_customer _product')
            .exec(function(err, orders){
                if (err){
                    res.json(false);
                }
                else{
                    res.json(orders);
                }
            });
    }
    create(req, res){
        const quantity  = req.body.quantity,
              _customer = req.params.customerId,
              _product  = req.params.productId;

        if(quantity < 1){
            return res.json(false);
        }
        product.isQuantityAvailable(_product, quantity, function(result, product){
            if(result){
                product.decrementQuantity(quantity, function(err){
                    if(err){
                        return res.json(err);
                    }
                    order.create({quantity: quantity, _customer: _customer, _product: _product}, function(err){
                        if(err){
                            return res.json(err);
                        }
                        return res.json(true)
                    });
                });
            }
            else{
                return res.json(false);
            }
        });
    }
    show(req, res){
        order.findById(req.params.id, function(err, friend){
            if (err){
                res.json(err);
            }
            else{
                res.json(friend);
            }
        });
    }
    delete(req, res){
        Order.remove({_id: req.params.id}, function(err){
            if(err){
                res.json(err);
            }
            else{
                res.json(true)
            }
        });
    }
    recent(req, res){
        order.find({})
            .sort('-created_at')
            .limit(3)
            .populate('_customer _product')
            .exec(function(err, results){
                res.json(results);
            });
    }
}

module.exports = new OrdersController;
