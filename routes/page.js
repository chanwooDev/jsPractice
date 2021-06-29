var express = require('express');
var router = express.Router();
var path = require("path");
var qs = require("querystring");
var fs = require("fs");
var sanitizeHtml = require('sanitize-html');
var template = require("../lib/template.js");
var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'chanwoo',
  password:'1111',
  database:'job'
});
db.connect();

router.get('/:jobId', (request, response) => {
  var jobId = request.params.jobId;
  db.query(`SELECT * FROM jobData  WHERE jobId = ? ORDER BY job ASC, year ASC`, [jobId], function(error,dataList){
      db.query(`SELECT Description FROM jobDescription WHERE id = ?`, [jobId], function(error,descriptionList){
        db.query(`SELECT name FROM jobNumber WHERE id = ?`, [jobId], function(error,name){
          db.query(`SELECT * FROM openSubject WHERE name = ?`, [name[0].name], function(error,openSubjectList){
            db.query(`SELECT * FROM oldSub WHERE name = ?`, [name[0].name], function(error,oldSubjectList){
              db.query(`SELECT * FROM certificate WHERE name = ?`, [name[0].name], function(error,certificateList){
                var table = template.makeTable(dataList);
                var liList = template.makeDescriptionList(descriptionList);
                var openSubTable = template.makeSubjectTable(openSubjectList);
                var oldSubjectTable = template.makeSubjectTable(oldSubjectList);
                var certificateTable = template.makeCertificateTable(certificateList);
                var html = template.HTML(name[0].name,liList, table,openSubTable,oldSubjectTable,certificateTable);
                console.log(certificateList);
                response.writeHead(200);
                response.end(html);
              });
            });
          });
        });
      });
    });
  }); 

router.get('/create', (request, response) => {
  var title = "WEB - create";
  var list = template.list(request.list);
  var html = template.HTML(title, list, `
      <form action="/topic/create_process" method="post">
      <p><input type="text" name="title" placeholder="title"></p>
      <p>
        <textarea name="description" placeholder="description"></textarea>
      </p>
      <p>
        <input type="submit">
      </p>
      </form>
      `, '');
  response.send(html);
})

router.post('/create_process', (request, response) => {
  var post = request.body;
  var title = post.title;
  var description = post.description;
  fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
    response.redirect(`/topic/${title}`);
  });
})

router.get('/update/:pageId', (request, response) => {
  var id = request.params.pageId;
  var filteredId = path.parse(id).base;
  fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
    var title = id;
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
        <form action="/topic/update_process" method="post">
        <input type="hidden" name="id" value="${title}">
        <p><input type="text" name="title" value="${title}"></p>
        <p>
          <textarea name="description" placeholder="description">${description}</textarea>
        </p>
        <p>
          <input type="submit">
        </p> 
        </form>
        `, '');
    response.send(html);
  });
})

router.post('/update_process', (request, response) => {
  var post = request.body;
  var id = post.id;
  var title = post.title;
  var description = post.description;
  fs.rename(`data/${id}`, `data/${title}`, function (error) {
    fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
      response.redirect(`/topic/${title}`);
    });
  });
})

router.post('/delete_process', (request, response) => {
  var post = request.body;
  var id = post.id;
  var filteredId = path.parse(id).base;
  fs.unlink(`data/${filteredId}`, function () {
    response.redirect('/');
  });
})


router.get('/:pageId', (request, response) => {
  var id = request.params.pageId;
  var filteredId = path.parse(id).base;
  fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
    if (err) {
      console.error(err.stack);
      response.status(500).send('Something broke!');
    } else {
    }
    var title = id;
    var sanitizedTitle = sanitizeHtml(title);
    var sanitizedDescription = sanitizeHtml(description);
    var list = template.list(request.list);
    var html = template.HTML(sanitizedTitle, list, `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`, `
        <button type="button" onclick="location.href='/topic/create' ">create</button>
        <button type="button" onclick="location.href='/topic/update/${sanitizedTitle}' ">update</button>
        <form action="/topic/delete_process" method="post">
          <input type="hidden" name="id" value="${sanitizedTitle}">
          <input type="submit" value="delete">
        </form>
        `);
    response.send(html);
  });
});

module.exports = router;