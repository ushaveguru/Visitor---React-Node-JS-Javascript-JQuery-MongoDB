import Header from './Header';
import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import { Link, NavLink, HashRouter, Route } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'react-bootstrap';
import About from './About';
import App from './App';
import Search from './Search';
import imageurl from '../img/mountains.jpeg';
import natureurl from '../img/background.jpg';
import Locations from './Locations';
import Monterey from './Monterey';
import SanFrancisco from './SanFrancisco';
import Tahoe from './Tahoe';
import Yosemite from './Yosemite';
import BigSur from './BigSur';
import Oroville from './Oroville';
import NevadaCounty from './NevadaCounty';
import SantaCruz from './SantaCruz';
import LosAngeles from './LosAngeles';
import SanDiego from './SanDiego';
import Crescent from './Crescent';
import StovepipeWells from './StovepipeWells';
import Oakland from './Oakland';
import Bridges from './Bridges';
import Waterfalls from './Waterfalls';
import Beaches from './Beaches';
import AmusementParks from './AmusementParks';
import NationalParks from './NationalParks';
import Lakes from './Lakes';
import Zoos from './Zoos';
import BayBridge from './BayBridge';
import BixbyBridge from './BixbyBridge';
import GoldenGateBridge from './GoldenGateBridge';
import { Button } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';


class Main extends React.Component {
    render(){
              const styleOne =
                    {
                      height:'10%',
                      width:'10%'
                    };
              const styleTwo=
                    {
                        backgroundColor: '#7575a3',
                        padding: '1% 0',
                        fontSize:'1.2em',
                        borderBottom:'0px'
                    };
              const styleThree=
                    {
                        maxHeight:'40px',
                        color:'white'
                    };
              const styleFour=
                    {
                        color: 'white'
                    };
              const styleFive=
                    {
                        display: 'table',
                        height: '100%',
                        position:'relative',
                        width:'100%',
                        backgroundSize:'cover',
                        backgroundImage: "url(" + imageurl + ")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition:'center',
                        overflow: 'hidden'
                      };
              const styleSix=
                    {
                        display:'table-cell',
                        textAlign:'center',
                        verticalAlign:'middle'
                    };
              const styleSeven=
                    {
                        fontSize:'500%',
                        fontWeight:'700%'
                    };
              const styleEight=
                    {
                        padding:'10px 10px'
                    };
              const styleNine=
                    {
                        width:'100%'
                    };
              const styleTen=
                    {
                        display: 'table',
                        height: '60%',
                        position:'relative',
                        width:'100%',
                        backgroundSize:'cover',
                        backgroundImage: "url(" + natureurl + ")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition:'center',
                        backgroundAttachment:'fixed',
                        overflow:'scroll'
                      };
              const styleEleven=
                    {
                        width:'100%',
                        backgroundColor:'#7575a3',
                        padding:'5% 5% 10% 5%',
                        color:'#FFF'
                    };
              const styleTwelve=
                    {
                        padding:'15px',
                        fontSize:'25px',
                        color:'#FFF'
                    };
                const styleNavbarheader=
                {
                  marginBottom:'0'
                };
                 const styleMain=
                 {
                   height:'100%',
                   width:'100%'
                 };
                 const styleContainer=
                 {
                   marginTop:'0'
                 }


    return(
    <HashRouter>
        <div className="Main">
            <Header />
              <div style={styleOne}>
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation" style={styleTwo}>
                    <div className="container-fluid" >
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"><img src={require('../img/calilogo.png')} style={styleThree} /></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse-main">
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to = "/" className="active" style={styleFour}>Home</NavLink></li>
                                <li><NavLink to = "/About" style={styleFour}>About</NavLink></li>
                                <li><NavLink to ="/Search" style={styleFour}>Search</NavLink></li>
                                <li><a href="#" style={styleFour}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>


            <div className="content">
                <Route exact path ="/" component={App} />
                <Route path ="/About" component={About} />
                <Route path ="/Search" component={Search} />
                <Route path='/Locations' component={Locations}></Route>
                <Route path = "/Monterey" component={Monterey}/>
                <Route path = "/SanFrancisco" component={SanFrancisco}/>
                <Route path = "/Tahoe" component={Tahoe}/>
                <Route path = "/Yosemite" component={Yosemite}/>
                <Route path = "/BigSur" component={BigSur}/>
                <Route path = "/Oroville" component={Oroville}/>
                <Route path = "/NevadaCounty" component={NevadaCounty}/>
                <Route path = "/SantaCruz" component={SantaCruz}/>
                <Route path = "/LosAngeles" component={LosAngeles}/>
                <Route path = "/SanDiego" component={SanDiego}/>
                <Route path = "/Crescent" component={Crescent}/>
                <Route path = "/StovepipeWells" component={StovepipeWells}/>
                <Route path = "/Oakland" component={Oakland}/>
                <Route path = "/Bridges" component={Bridges}/>
                <Route path = "/Waterfalls" component={Waterfalls}/>
                <Route path = "/Beaches" component={Beaches}/>
                <Route path = "/AmusementParks" component={AmusementParks}/>
                <Route path = "/Lakes" component={Lakes}/>
                <Route path = "/NationalParks" component={NationalParks}/>
                <Route path = "/Zoos" component={Zoos}/>
                <Route path="/GoldenGateBridge" component={GoldenGateBridge}/>
                <Route path="/BayBridge" component={BayBridge}/>
                <Route path="/BixbyBridge" component={BixbyBridge}/>
            </div>
        </div>
    </HashRouter>
    );
};
}

export default Main;
