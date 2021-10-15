class NewController {
    //get
    index(req, res) {
        res.render('news');
    }
    //get show news/show
    show(req, res) {
        res.send('SHOW DETAIL!!!');
    }
}
module.exports = new NewController();
