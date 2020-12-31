import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
const Sidenav = () =>{


    return(
            <ul className="content text-decoration-none pl-0 bg-secondary" style={{ listStyle:'none', height:'85vh' }}>
                <li className="w-100 bg-dark p-2 text-white font-weight-bold " style={{ textAlign:'center' }}>head</li>
                <li className="links"><Button className="w-100 border-0" variant="outline-light">Home</Button></li>
                <li className="links"><Button className="w-100 border-0" variant="outline-light">Home Appliances</Button></li>
                <li className="links"><Button className="w-100 border-0" variant="outline-light">Electronics</Button></li>
                <li className="links"><Button className="w-100 border-0" variant="outline-light">Jewlery</Button></li>
                <li className="links"><Button className="w-100 border-0" variant="outline-light">Cosmetics</Button></li>
            </ul>
                
    )
}
export default Sidenav;