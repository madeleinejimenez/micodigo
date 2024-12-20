var express = require('express');
var router = express.Router();

// POST METHOD CREATE USER.*/
router.post("/create", function(request, response) {
    response.status(404).json({
        status: true,
        Message: "Todo esta ok",
    });
});

module.exports = router;