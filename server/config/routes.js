const customers = require('./../controllers/customers'),
      products  = require('./../controllers/products'),
      orders    = require('./../controllers/orders');

module.exports = function(app) {
    app.get('/customers', customers.index);
    app.get('/customers/recent', customers.recent);
    app.post('/customers', customers.create);
    app.delete('/customers/:id', customers.delete);
    app.get('/products', products.index);
    app.post('/products', products.create);
    app.delete('/products/:id', products.delete);
    app.get('/orders', orders.index);
    app.get('/orders/recent', orders.recent);
    app.post('/orders/:productId/:customerId', orders.create);
    app.get('/orders/:id', orders.show);
    app.delete('/orders/:id', orders.delete);
}
