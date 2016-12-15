const product = require('../models/product'),
      order = require('../models/order');

class ProductsController{
    index(req, res){
        product.find({}, function(err, products){
    	       if(err){
                res.json(err);
    	       }
    	       else{
    		        res.json(products);
    	       }
        });
    }
    create(req, res){
        product.create(req.body, function(err){
            if(err){
                return res.json(err)
            }
            return res.json(true);
        });
    }
    delete(req, res){
        order.removeOrdersByProductId(req.params.id, function(err){
            if(err){
                return res.json(err);
            }
            product.remove({ _id: req.params.id }, function(err){
                if(err){
                    return res.json(err);
                }
                return res.json(true);
            });
        });
    }
}

module.exports = new ProductsController;
