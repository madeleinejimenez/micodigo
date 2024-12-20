var express = require("express");
var router = express.Router();

const teacherController = require("../controllers/teacher.controller");

/* POST METHOD TEACHER USER. */
router.get("/list", function (response) {
  const result = teacherController.getList();
  response.status(200).json({
    data: result,
    status: true,
    message: "TODO ESTA OK ",
  });
});

module.exports = router;