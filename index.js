"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    const todo = response.data;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.finished;

    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished: ${finished}
    `)
});
