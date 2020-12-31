const express = require('express');
const Fileupload = require('express-fileupload');
const route = express.Router();
const schema = require('../models/item');
const items = require('../models/item');
const app = express();
app.use(Fileupload());
let name;
route.get('/display', (req, res) => {
  console.log(req.query);
  if (req.query === ' ') {
    items.find()
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error: ' + err));
  }
  else {
    items.find({ title: { $regex: req.query.title, $options: 'i' } })
      .then(data => res.json(data))
  }
});


route.post('/shop2', (req, res) => {
  let temp = Math.round(Math.random() * 1E9);
  let temp1;
  const date = new Date();
  let time = JSON.stringify(date.getFullYear()) + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getMilliseconds();

  if (req.files) { console.log(req.files) }
  var file = req.files.image;
  temp1 = file.name.split('.').pop();
  name = time + '-' + temp + '.' + temp1;
  console.log(name);
  file.mv('D:\\Desktop\\simple\\simple\\public\\uploads\\' + name);


})
route.post('/shop', (req, res) => {
  console.log(name);
  const entry = new schema({
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    category: req.body.category,
    path: name
  })
  entry.save().then((data) => { console.log(data); }).catch((err) => { console.log(err) });
});

module.exports = route;