var express = require('express');
var router = express.Router();
var template = require("../lib/template.js");

router.get('/', (request, response) => {
  var title = "Welcome";
  var description = "hello, node.js";
  var list = template.list(request.list);
  var html = template.HTML(title, list, `<h2>${title}</h2>${description}`, `
    <button type="button" onclick="location.href='/topic/create' ">create</button>
    <img src="/images/coding.jpg" style="width:300px; display:block; margin-top:10px;">
    `);
  response.send(html);
})

module.exports = router;