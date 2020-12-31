import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Button, Image } from 'react-bootstrap';

const Display = (props) => {
  const [item, setitem] = useState([]);
  console.log(props.data.sfor);
  useEffect(() => {

    axios.get(`http://localhost:4000/shopping/display?title=${props.data.sfor}`)
      .then((response) => {
        setitem(response.data);
      })
  }, [props.data.sfor]);
  return (
    <span>
      <Card className="container" style={{ border: 'none', justifyContent: 'space-between', marginTop: '50px', display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
        {item.map((item, index) => {
          return (

            <Card style={{ width: '15rem', height: '400px', marginBottom: '50px' }} rounded>
              <img src={"/uploads/" + item.path} style={{ padding: '10px', width: '100%', height: '50%', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text row={2}>
                  {item.desc}
                </Card.Text>
                <Card.Body style={{ display: 'flex', justifyContent: "space-around" }}>
                  <Card.Text style={{ flex: 3 }} >
                    {item.price}
                  </Card.Text>
                  <Button variant="primary" style={{ flex: 1 }} >View</Button>
                </Card.Body>
              </Card.Body>
            </Card>


          )
        })}
      </Card>
    </span>
  )
}

export default Display;