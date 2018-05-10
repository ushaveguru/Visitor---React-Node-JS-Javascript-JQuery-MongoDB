import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createHashHistory } from 'history';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import ZooReview1 from './ZooReview1';
import ZooReview2 from './ZooReview2';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './style.css';
import MapContainer from './MapContainer';
import { GoogleApiWrapper } from 'google-map-react';
import { Badge } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';


class OaklandZoo extends React.Component {
  getComponentBeaches1(e,value) {
    history.push('/ZooReview1');
    $(e.target).css({
        'background-color': '#ccc'
    });
  }

  getComponentBeaches2(e,value) {
    history.push('/ZooReview2');
    $(e.target).css({
        'background-color': '#ccc'
    });
  }


    render(){

      const styleOne=
            {
                display: 'table',
                height: '50%',
                position:'relative',
                width:'100%',
                padding:'10px 0px 2px 0',
                overflow:'scroll'
              };


          const styleTwo=
          {
            fontSize:'40px',
            backgroundColor:'#7575a3',

          };

          const styleThree=
          {
            fontSize:'20px',
            backgroundColor:'#7575a3',
            color:'white'
          };

          const styleFour=
          {
            fontFamily:'"Comic Sans MS", cursive, sans-serif',
            textAlign:'justify',
            display:'inline-block',
            border: '1px solid #000',
            padding: '15px'
          };

          const styleFive=
          {
            height: '400px',
            width: '100%'
          };


        return(
          <div>
          <div>
          <Breadcrumb>
             <BreadcrumbItem><NavLink to="/#">Home</NavLink></BreadcrumbItem>
             <BreadcrumbItem><NavLink to="/Zoos">Zoos</NavLink></BreadcrumbItem>
             <BreadcrumbItem active>Oakland Zoo</BreadcrumbItem>
           </Breadcrumb>
             </div>



             <div className="ZooReview">
          <center>     <h1><Badge color="Info" style={styleTwo} >OALKLAND ZOO</Badge></h1></center>
             <img src={require('../img/oakland.jpg')} style={styleOne}/>
                   <Row className="show-grid text-center">
                     <Col xs={12} sm={4} className="person-wrapper">
                       <h4 style={styleFour} className='border border-primary'>Oakland Zoo was established in 1922 in Oakland, California,
                       United States and is managed by the Conservation Society of California, a 501(c)3 non-profit organization dedicated
                        to the conservation of wildlife both locally and globally. The Zoo is home to over 700 native and exotic animals.
                         Its recognized for its outstanding animal care, particularly its elephant care program, and for its Leed-certified,
                         17,000 square foot, state-of-the-art veterinary hospital—the largest wild animal veterinary facility in Northern
                         California.</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper">
                     <h4 style={styleFour} className='border border-primary'>June 2018 introduces Oakland Zoo guests to an entirely new
                      experience, California Trail, a monumental expansion will further our commitment to animal care, education, and
                      conservation with a focus on this state’s remarkable native wildlife—both past and present.</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper"><br /><br />
                          <button style={styleThree} block onClick={(e) => this.getComponentBeaches(e,"ZooReview1")}>View Reviews</button><br />
                          <button style={styleThree} block onClick={(e) => this.getComponentBeaches(e,"ZooReview2")}>Add Reviews</button><br />
                     </Col>
                   </Row>
               </div>
        </div>
        );
    }
}

export default OaklandZoo;
export const history = createHashHistory();
