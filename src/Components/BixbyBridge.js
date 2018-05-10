import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createHashHistory } from 'history';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import BridgeReview1 from './BridgeReview1';
import BridgeReview2 from './BridgeReview2';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './style.css';
import MapContainer from './MapContainer';
import { GoogleApiWrapper } from 'google-map-react';
import { Badge } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';


class BixbyBridge extends React.Component {
  getComponentBridges1(e,value) {
    history.push('/BridgeReview1');
    $(e.target).css({
        'background-color': '#ccc'
    });
  }

  getComponentBridges2(e,value) {
    history.push('/BridgeReview2');
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
             <BreadcrumbItem active>Bixby Bridge</BreadcrumbItem>
           </Breadcrumb>
             </div>



             <div className="BridgeReview">
          <center>     <h1><Badge color="Info" style={styleTwo} >BIXBY BRIDGE</Badge></h1></center>
             <img src={require('../img/bixby.jpg')} style={styleOne}/>
                   <Row className="show-grid text-center">
                     <Col xs={12} sm={4} className="person-wrapper">
                       <h4 style={styleFour} className='border border-primary'>Bixby Creek Bridge, also known as Bixby Bridge,
                       on the Big Sur coast of California, is one of the most photographed bridges in California due to its
                        aesthetic design, "graceful architecture and magnificent setting".It is a reinforced concrete
                        open-spandrel arch bridge. The bridge is 120 miles (190 km) south of San Francisco and 13 miles (21 km)
                         south of Carmel in Monterey County along State Route 1.
                         Prior to the opening of the bridge in 1932, residents of the Big Sur
                         area were virtually cut off during winter due to the often impassable Old Coast Road
                         that led 11 miles (18 km) inland. At its completion, the bridge was built under budget
                         for $199,861 (equivalent to $2.95 million in 2016 dollars[5]) and at 360 feet (110 m)was the longest
                         concrete arch span on the California State Highway System. It is one of the tallest single-span concrete bridges in the world</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper">
                     <h4 style={styleFour} className='border border-primary'> The land north and south of the bridge was privately owned until
                     1988 and 2001. A logging company obtained approval to harvest Redwood on the former Bixby Ranch to the north in 1986, and
                     in 2000 a developer obtained approval to subdivide the former Brazil Ranch to the south. Local residents and conservationists
                     fought their plans and both pieces of land were eventually acquired by local and federal government agencies. After a $20
                      million seismic retrofit completed in 1996, the bridge remained functionally obsolete. Its 24 feet (7.3 m) width does not
                       meet modern standards requiring bridges to be 32 feet (9.8 m) wide.</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper"><br /><br />
                          <button style={styleThree} block onClick={(e) => this.getComponentBridges(e,"BridgeReview1")}>View Reviews</button><br /><br />
                          <button style={styleThree} block onClick={(e) => this.getComponentBridges(e,"BridgeReview2")}>Add Reviews</button><br />
                     </Col>
                   </Row>
               </div>
        </div>
        );
    }
}

export default BixbyBridge;
export const history = createHashHistory();
