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


class BixbyBridge extends React.Component {
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
                backgroundSize:'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center',
                backgroundAttachment:'fixed',
                overflow:'scroll',
                paddingTop: '0'
              };


          const styleTwo=
          {
            fontSize:'40px',
            backgroundColor:'#7575a3'
          };

          const styleThree=
          {
            fontSize:'20px',
            backgroundColor:'#7575a3',
            color:'white'
          };
      return(
          <div>
            <div>
              <Breadcrumb>
                 <BreadcrumbItem><a href="../Home">Home</a></BreadcrumbItem>
                 <BreadcrumbItem><a href="../Components/Bridges">Bridges</a></BreadcrumbItem>
                 <BreadcrumbItem active>Bixby Bridge</BreadcrumbItem>
               </Breadcrumb>
             </div>

<input type="text" value="Before the bridge was built, the only practical short route between San Francisco and what" />

             <div className="BridgeReview">
             <center><h1><Badge color="Info" style={styleTwo} >BIXBY BRIDGE</Badge></h1></center>
             <img src={require('../img/bixby.jpg')} style={styleOne}/>
                   <Row className="show-grid text-center">
                     <Col xs={12} sm={4} className="person-wrapper">
                       <h4></h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper">

                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper"><br /><br />
                        <button style={styleThree} onClick={(e) => this.getComponentBridges(e,"BridgeReview")}>Click me to See Reviews or Add a Review</button>
                     </Col>
                   </Row>
               </div>
        </div>

        
        );
    }
}

export default BixbyBridge;
export const history = createHashHistory();
