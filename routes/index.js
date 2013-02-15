
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};
exports.contacto = function(req, res){
  res.render('contacto');
};
exports.prendas = function(req, res){
  res.render('prendas');
};
exports.accesorios = function(req, res){
  res.render('accesorios');
};
exports.admin = function(req, res){
  res.render('admin');
};