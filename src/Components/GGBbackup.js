import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createHashHistory } from 'history';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import BridgeReview from './BridgeReview';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import './style.css';
import MapContainer from './MapContainer';

import { GoogleApiWrapper } from 'google-maps-react'


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
                backgroundSize:'cover',

                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center',
                backgroundAttachment:'fixed',
                overflow:'scroll',
                paddingTop: '0'

              };
        return(
          <div>
      

        <div className="BridgeReview">
        <img src={require('../img/ggb.jpg')} style={styleOne}/>

             <p> This is Golden Gate Bridge </p>

              <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                  <h3>Many wanted to build a bridge to connect San Francisco to Marin County.
                  San Francisco was the largest American city still served primarily by ferry boats.
                  Because it did not have a permanent link with communities around the bay, the city</h3>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                <h3>View of the Golden Gate Bridge and Fort Point from Marine Drive.
                  The bridge-opening celebration began on May 27, 1937 and lasted for one week. The day before vehicle traffic was allowed,
                  200,000 people crossed either on foot or on roller skates.[10] On opening day, Mayor Angelo Rossi and other officials rode
                  the ferry to Marin, then crossed the bridge in a motorcade past three ceremonial</h3>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                <h3>Thaijasa Karthik</h3>
                </Col>
              </Row>
       <button onClick={(e) => this.getComponentBridges(e,"BridgeReview")}>Add Review</button>
        </div>
        </div>
        );
    }
}

export default GoldenGateBridge;
export const history = createHashHistory();
