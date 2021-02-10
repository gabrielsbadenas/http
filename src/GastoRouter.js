const GastoDAO = require('GastoDAO'),
express = require('express'),
router = express.Router(),
bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

var dao = new GastoDAO()

router.get('/', function(req, res){
  res.send(dao.getAll())
})

module.exports = router
