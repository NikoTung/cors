var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/normal', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	var result = {"result": "OK"};
  res.send(JSON.stringify(result));
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
