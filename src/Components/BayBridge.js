import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createHashHistory } from 'history';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import BridgeReview from './BridgeReview';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './style.css';
import MapContainer from './MapContainer';
import { GoogleApiWrapper } from 'google-map-react';
import { Badge } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'react-bootstrap';
import Bridges from './Bridges';
import App from './App';


class BayBridge extends React.Component {
  getComponentBridges(e,value) {
    history.push('/BridgeReview');
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
                padding:'10px',
                overflow:'scroll'
              };


          const styleTwo=
          {
            fontSize:'40px',
            backgroundColor:'#7575a3',
            position:'absolute'
          };

          const styleThree=
          {
            fontSize:'20px',
            backgroundColor:'#7575a3',
            color:'white',
            float:'right',
            position:'inline'

          };

          const styleFour=
          {
            fontFamily:'"Comic Sans MS", cursive, sans-serif',
            textAlign:'justify',
            display:'inline-block',
            border: '1px solid #000',
            padding: '5px'
          };


        return(
          <div>
          <div>
              <Breadcrumb>
                 <BreadcrumbItem><NavLink to="/#">Home</NavLink></BreadcrumbItem>
                 <BreadcrumbItem><NavLink to="/Bridges">Bridges</NavLink></BreadcrumbItem>
                 <BreadcrumbItem active>Bay Bridge</BreadcrumbItem>
               </Breadcrumb>
             </div>



        <div className="BridgeReview">
        <center><h1><Badge color="Info" style={styleTwo} >BAY BRIDGE</Badge></h1></center>
         <button style={styleThree} onClick={(e) => this.getComponentBridges(e,"BridgeReview")}>View/Add Reviews</button>
        <img src={require('../img/baybridge.jpg')} style={styleOne}/>
              <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                  <h4 style={styleFour} className='border border-primary'>The San Francisco–Oakland Bay Bridge is
                  a complex of bridges spanning San Francisco Bay in California. As part of Interstate 80 and the direct road
                  between San Francisco and Oakland, it carries about 260,000 vehicles a day on its two decks. It has one
                  of the longest spans in the United States.Before the bridge was built, the only practical short route between
                  San Francisco and what is now Marin County was by boat across a section of San Francisco Bay. A ferry service began as early as 1820, with a regularly scheduled
                  service beginning in the for the purpose of transporting water to San Francisco</h4>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                <h4></h4>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper"><br /><br />

                </Col>
              </Row>
          </div>
        </div>
        );
    }
}

export default BayBridge;
export const history = createHashHistory();
