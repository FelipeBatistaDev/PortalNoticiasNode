module.exports.noticias = function(app, req ,res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
  
    noticiasModel.getNoticias(function(err, result){
        res.render("noticias/noticias",{noticias: result});
    });
  
}

module.exports.noticia = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
     
    var id_noticia = req.query;
  
   noticiasModel.getNoticia(id_noticia, function(err, result){
        // res.send(result);
        res.render("noticias/noticia",{noticia: result});
    });

}