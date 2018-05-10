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


class RainbowFalls extends React.Component {
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
             <BreadcrumbItem active>Rainbow Falls</BreadcrumbItem>
           </Breadcrumb>
             </div>



             <div className="WaterfallsReview">
          <center>     <h1><Badge color="Info" style={styleTwo} >RAINBOWFALLS</Badge></h1></center>
             <img src={require('../img/rainbow.jpg')} style={styleOne}/>
                   <Row className="show-grid text-center">
                     <Col xs={12} sm={4} className="person-wrapper">
                       <h4 style={styleFour} className='border border-primary'>Rainbow Falls is the highest waterfall on the
                       Middle Fork of the San Joaquin River, in the eastern Sierra Nevada mountains of California, in the
                       United States. Plunging 101 feet (31 m) to the turbulent water below, the falls are named for the rainbows
                       that appear in their mist on sunny summer days.[1] Rainbow Falls is located within the boundaries of Devils
                       Postpile National Monument.</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper">
                     <h4 style={styleFour} className='border border-primary'>About 75,000 years ago,
                      lava erupted from a vent just east of the present-day falls. The eruption occurred in two stages.
                      The first pulse of lava flowed about 1 kilometre (0.62 mi) westward and pooled in the Middle Fork of
                       the San Joaquin drainage. The second pulse of lava insulated the first, allowing it to cool slowly
                       and to fracture vertically. The layer above cooled under different conditions and fractured horizontally.
                        Geologists describe these rocks as platy rhyodacite; they are visible in the cliffs that surround Rainbow Falls.</h4>
                     </Col>
                     <Col xs={12} sm={4} className="person-wrapper"><br /><br />
                          <button style={styleThree} block onClick={(e) => this.getComponentWaterFalls1(e,"WaterfallsReview1")}>View Reviews</button><br /><br /><br />
                          <button style={styleThree} block onClick={(e) => this.getComponentWaterFalls2(e,"WaterfallsReview2")}>Add Reviews</button><br />
                     </Col>
                   </Row>
               </div>
        </div>
        );
    }
}

export default RainbowFalls;
export const history = createHashHistory();
