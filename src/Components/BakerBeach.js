import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createHashHistory } from 'history';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import BeachReview1 from './BeachReview1';
import BeachReview2 from './BeachReview2';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './style.css';
import MapContainer from './MapContainer';
import { GoogleApiWrapper } from 'google-map-react';
import { Badge } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';


class BakerBeach extends React.Component {
  getComponentBeaches1(e,value) {
    history.push('/BeachReview1');
    $(e.target).css({
        'background-color': '#ccc'
    });
  }


  getComponentBeaches2(e,value) {
    history.push('/BeachReview2');
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
             <BreadcrumbItem><NavLink to="/Bridges">Beaches</NavLink></BreadcrumbItem>
             <BreadcrumbItem active>Baker Beach</BreadcrumbItem>
           </Breadcrumb>
             </div>



             <div className="BeachReview">
          <center>     <h1><Badge color="Info" style={styleTwo} >BAKER BEACH</Badge></h1></center>
             <img src={require('../img/baker.jpg')} style={styleOne}/>
                   <Row className="show-grid text-center">
                     <Col xs={12} sm={4} className="person-wrapper">
                       <h4 style={styleFour} className='border border-primary'>Baker Beach is a public beach on the peninsula
                       of San Francisco, California, U.S.. The beach lies on the shore of the Pacific Ocean in the northwest
                       of the city. It is roughly a half mile (800 m) long, beginning just south of Golden Gate Point
                        (where the Golden Gate Bridge connects with the peninsula), extending southward toward the Seacliff
                         peninsula, the Palace of the Legion of Honor and the Sutro Baths.</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper">
                     <h4 style={styleFour} className='border border-primary'>A fatal shark attack occurred
                      on Baker Beach on May 7, 1959[6] when 18-year-old Albert Kogler Jr. was attacked by
                      a great white shark while he was in water 15 feet deep.[7] This was the only shark attack
                       recorded on Baker Beach.</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper"><br /><br />
                          <button style={styleThree} block onClick={(e) => this.getComponentBeaches(e,"BeachReview")}>View/Add Reviews</button><br />
                            <button style={styleThree} block onClick={(e) => this.getComponentBeaches(e,"BeachReview")}>View/Add Reviews</button><br />
                     </Col>
                   </Row>
               </div>
        </div>
        );
    }
}

export default BakerBeach;
export const history = createHashHistory();
