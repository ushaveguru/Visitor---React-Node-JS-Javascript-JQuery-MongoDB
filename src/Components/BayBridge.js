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
             <BreadcrumbItem active>Bay Bridge</BreadcrumbItem>
           </Breadcrumb>
             </div>



             <div className="BridgeReview">
          <center>     <h1><Badge color="Info" style={styleTwo} >BAY BRIDGE</Badge></h1></center>
             <img src={require('../img/baybridge.jpg')} style={styleOne}/>
                   <Row className="show-grid text-center">
                     <Col xs={12} sm={4} className="person-wrapper">
                       <h4 style={styleFour} className='border border-primary'>The San Francisco–Oakland Bay Bridge (known locally
                          as the Bay Bridge or the Emperor Norton Bridge) is a complex of bridges spanning San Francisco Bay in California.
                           As part of Interstate 80 and the direct road between San Francisco and Oakland, it carries about 260,000 vehicles a
                            day on its two decks.[3][4] It has one of the longest spans in the United States.The bridge has two sections of
                            roughly equal length; the older western section, officially known as the Willie L. Brown Jr. Bridge (after
                               former San Francisco Mayor and California State Assembly Speaker Willie L. Brown Jr.), connects downtown San
                               Francisco to Yerba Buena Island; and the newer unnamed eastern section connects the island to Oakland</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper">
                     <h4 style={styleFour} className='border border-primary'>The western section is a double suspension bridge with two decks,
                      westbound traffic being carried on the upper deck while eastbound is carried on the lower one. The largest span of the
                       original eastern section was a cantilever bridge. During the 1989 Loma Prieta earthquake, a portion of the eastern sections
                        upper deck collapsed onto the lower deck and the bridge was closed for a month. Reconstruction of the eastern section of
                        the bridge as a causeway connected to a self-anchored suspension bridge began in 2002; the new eastern section opened
                        September 2, 2013, at a reported cost of over $6.5 billion, a 2,500% cost overrun from the original estimate of $250M.
                        Unlike the western section and the original eastern section of the bridge, the new eastern section is a single deck with
                        the eastbound and westbound lanes on each side making it the worlds widest bridge, according to
                        Guinness World Records,[11] as of 2014. Demolition of the old east span is expected to be completed by the end of 2017</h4>
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

export default BayBridge;
export const history = createHashHistory();
