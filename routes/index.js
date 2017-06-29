/**
 * (App name here)
 * Developed by Engagement Lab, 2017
 * ==============
 * Routing controller.
 *
 * @class Category
 * @author 
 *
 * ==========
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// TODO: Clickjacking protection
/*keystone.pre('routes', function(req, res, next) {

    // Allow certain domains to frame site
    res.setHeader('X-Frame-Options', 'ALLOW-FROM www.riskhorizon.org');

    next();
})*/

// Import Route Controllers
var routes = {
    views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {

    // Views
    app.get('/', routes.views.index);
    app.get('/:category_id', routes.views.category);
    
    // NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
    // app.get('/protected', middleware.requireUser, routes.views.protected);

};
