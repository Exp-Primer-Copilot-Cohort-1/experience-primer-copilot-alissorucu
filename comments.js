// Create web server for comments
// This file is a part of the comments.js and should be used in the scope of comments.js

var express = require('express');
var router = express.Router();
var Comment = require('./comment');
var config = require('./config');

// GET /comments
// Get all comments
router.get('/', function(req, res, next) {
  Comment.find(function(err, comments) {
    if (err) { return next(err); }
    res.json(comments);
  });
});

// POST /comments
// Create a new comment
router.post('/', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.save(function(err, comment) {
    if (err) { return next(err); }
    res.status(201).json(comment);
  });
});

// GET /comments/:id
// Get a comment by id
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function(err, comment) {
    if (err) { return next(err); }
    res.json(comment);
  });
});

// PUT /comments/:id
// Update a comment by id
router.put('/:id', function(req, res, next) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function(err, comment) {
    if (err) { return next(err); }
    res.json(comment);
  });
});

// DELETE /comments/:id
// Delete a comment by id
router.delete('/:id', function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, req.body, function(err, comment) {
    if (err) { return next(err); }
    res.json(comment);
  });
});

module.exports = router;