var express = require('express');
var router = express.Router();

// GET home page
router.get("/", function(request, response) {
    response.status(404).json({
        status: true,
        Message: "Todo esta ok",
    });
});

module.exports = router;