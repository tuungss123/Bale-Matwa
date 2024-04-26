const express = require('express');
const app = express();
 
const nameRoute = express.Router();
let Name = require('../model/Name');
 
// Add Name
nameRoute.route('/add-name').post((req, res, next) => {
    Name.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all Name
nameRoute.route('/').get((req, res) => {
    Name.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get Name
nameRoute.route('/read-name/:id').get((req, res) => {
    Name.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
 
// Update Name
nameRoute.route('/update-name/:id').put((req, res, next) => {
    Name.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Name updated successfully!')
    }
  })
})
 
// Delete Name
nameRoute.route('/delete-name/:id').delete((req, res, next) => {
    Name.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 
module.exports = nameRoute;