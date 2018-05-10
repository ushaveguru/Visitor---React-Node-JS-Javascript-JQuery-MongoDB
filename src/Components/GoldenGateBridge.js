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


class GoldenGateBridge extends React.Component {
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
             <BreadcrumbItem><NavLink to="/Bridges">Bridges</NavLink></BreadcrumbItem>
             <BreadcrumbItem active>Golden Gate Bridge</BreadcrumbItem>
           </Breadcrumb>
             </div>



             <div className="BridgeReview">
          <center>     <h1><Badge color="Info" style={styleTwo} >GOLDEN GATE BRIDGE</Badge></h1></center>
             <img src={require('../img/ggb.jpg')} style={styleOne}/>
                   <Row className="show-grid text-center">
                     <Col xs={12} sm={4} className="person-wrapper">
                       <h4 style={styleFour} className='border border-primary'>The Golden Gate Bridge is a suspension
                       bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay
                       and the Pacific Ocean. The structure links the American city of San Francisco, California – the
                       northern tip of the San Francisco Peninsula – to Marin County, carrying both U.S. Route 101 and California
                       State Route 1 across the strait. The bridge is one of the most internationally recognized symbols of San Francisco,
                        California, and the United States. It has been declared one of the Wonders of the Modern World by the American Society
                        of Civil Engineers.</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper">
                     <h4 style={styleFour} className='border border-primary'> In May 1924, Colonel Herbert Deakyne held the second hearing on the Bridge on behalf of the Secretary of
                     War in a request to use federal land for construction. Deakyne, on behalf of the Secretary of War, approved the
                     transfer of land needed for the bridge structure and leading roads to and both San Francisco County and Marin County,
                      pending further bridge plans by Strauss.[19] Another ally was the fledgling automobile industry, which supported the
                      development of roads and bridges to increase demand for automobiles. Strauss was chief engineer in charge of overall
                       design and construction of the bridge project.</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper"><br /><br />
                          <button style={styleThree} block onClick={(e) => this.getComponentBridges(e,"BridgeReview")}>View/Add Reviews</button>
                     </Col>
                   </Row>
               </div>
        </div>
        );
    }
}

export default GoldenGateBridge;
export const history = createHashHistory();
