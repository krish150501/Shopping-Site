import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';
const Fillform = () => {
  const [Title, settitle] = useState('');
  const [Desc, setdesc] = useState('');
  const [Price, setprice] = useState('');
  const [category, setcategory] = useState('');
  var filename;
  const [file, setfile] = useState('/uploads/blank-img.jpg');
  var filedata;


  const changeTitle = (e) => {
    settitle(e.target.value)
  }
  const changeDesc = (e) => {
    setdesc(e.target.value)
  }
  const changePrice = (e) => {
    setprice(e.target.value)
  }

  const changecategory = (e) => {
    setcategory(e.target.value);
  }

  const filechange = (e) => {
    e.preventDefault();
    filedata = e.target.files[0];
    setfile(filedata.name);
    const data = new FormData();
    data.append('image', filedata);
    console.log(filedata.name);
    console.log(data);
    axios.post('http://localhost:4000/shopping/shop2', data);

  }


  const formupdate = (e) => {
    console.log(file);
    e.preventDefault();
    const Items = {
      title: Title,
      desc: Desc,
      price: Price,
      category: category,
      path: filename
    };
    axios.post('http://localhost:4000/shopping/shop', Items);

    window.location.href = "http://localhost:3000/display";
  };

  return (
    <Form className="container " onSubmit={formupdate} encType="multipart/form-data">
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>TITLE</Form.Label>
        <Form.Control type="text" placeholder="text" value={Title} onChange={changeTitle} />
      </Form.Group>
      <Form.Group>
        <Form.File type="file" id="exampleFormControlFile1" label="Example file input" onChange={filechange} />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>CATEGORY</Form.Label>
        <Form.Control as="select" onChange={changecategory}>
          <option>Home-Appliance</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Jewlery</option>
          <option>Cosmetics</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>DESCRIPTION</Form.Label>
        <Form.Control as="textarea" row={3} value={Desc} onChange={changeDesc} />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>PRICE</Form.Label>
        <Form.Control as="textarea" value={Price} onChange={changePrice} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
  )
}
export default Fillform;