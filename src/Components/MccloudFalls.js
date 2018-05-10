import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createHashHistory } from 'history';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import WaterfallsReview1 from './WaterfallsReview1';
import WaterfallsReview2 from './WaterfallsReview2';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './style.css';
import MapContainer from './MapContainer';
import { GoogleApiWrapper } from 'google-map-react';
import { Badge } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';


class MccloudFalls extends React.Component {
  getComponentWaterFalls1(e,value) {
    history.push('/WaterfallsReview1');
    $(e.target).css({
        'background-color': '#ccc'
    });
  }

  getComponentWaterFalls2(e,value) {
    history.push('/WaterfallsReview2');
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
             <BreadcrumbItem><NavLink to="/Waterfalls">Waterfalls</NavLink></BreadcrumbItem>
             <BreadcrumbItem active>McCloud Falls</BreadcrumbItem>
           </Breadcrumb>
             </div>



             <div className="WaterFallsReview">
          <center>     <h1><Badge color="Info" style={styleTwo} >McCLOUDFALLS</Badge></h1></center>
             <img src={require('../img/mccloud.jpg')} style={styleOne}/>
                   <Row className="show-grid text-center">
                     <Col xs={12} sm={4} className="person-wrapper">
                       <h4 style={styleFour} className='border border-primary'>McWay Falls is an 80-foot-tall (24 m)
                       waterfall on the coast of Big Sur in central California that flows year-round from McWay Creek in Julia
                       Pfeiffer Burns State Park, about 37 miles (60 km) south of Carmel, into the Pacific Ocean. It is a tidefall,
                        a waterfall that empties directly into the ocean, and one of only two in California, the other being Alamere Falls.</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper">
                     <h4 style={styleFour} className='border border-primary'>In 1983, Big Sur experienced one of the wettest years on
                      record with 88.85 inches (2,257 mm) of rain. Up to this time, McWay Falls fell directly into the ocean. The huge
                      rainfall resulted in several landslides and mudflows,[9] including an extremely large mudslide immediately north of
                       Julia Pfeiffer Burns State Park on March 1. The mudflow entered the ocean immediately to the north of the falls, and
                        Highway 1 was closed for a year while the road was repaired. Reconstruction deposited nearly 3,000,000 cubic yards
                        (2,300,000 cubic metres) of landslide material on the coast, at the base of the slope.[10] Wave action then
                         transported some of the debris south to McWay Cove, forming a sandy beach beneath the falls where none had
                         previously existed. Loose material from the slope beneath the road is still contributing sand to the coastal system.
                         McWay Falls now meets the ocean only when the tide is in, but over time, the beach may wear away so that the
                          falls drop directly into the ocean again</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper"><br /><br />
                          <button style={styleThree} block onClick={(e) => this.getComponentWaterFalls1(e,"WaterfallsReview1")}>View Reviews</button><br /><br />
                          <button style={styleThree} block onClick={(e) => this.getComponentWaterFalls2(e,"WaterfallsReview2")}>Add Reviews</button><br />
                     </Col>
                   </Row>
               </div>
        </div>
        );
    }
}

export default MccloudFalls;
export const history = createHashHistory();
