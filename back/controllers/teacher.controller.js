const modelTeacher = require("../models/teacher.models");

const getList = async () => {
    const results = await modelTeacher.findAll();
    return result;
};

module.exports = {
    getList,
};
