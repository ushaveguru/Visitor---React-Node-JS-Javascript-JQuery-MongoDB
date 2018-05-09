import Header from './Header';
import React from 'react';
import axios from 'axios';
import imageurl from '../img/mountains.jpeg';
import natureurl from '../img/background.jpg';
import ContestPreview from './ContestPreview';
import { Link, NavLink, HashRouter, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';

class App extends React.Component {

state={
    contests:[]
};

componentDidMount(){
    axios.get('/api/contests')
    .then(resp=>{
        console.log(resp);
        console.log(resp.data);
        this.setState({
        contests: resp.data.contests
            });
    })
    .catch(console.error);

}


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
              fontSize:'1.2em'
          };
    const styleThree=
          {
              maxHeight:'40px',
          };
    const styleFour=
          {
              color: 'WHITE',

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
              padding:'80px 50px'
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
              padding:'1% 1% 1% 1%',
              color:'#FFF'
          };

    const styleTwelve=
          {
              padding:'15px',
              fontSize:'25px',
              color:'#FFF'
          };

    const styleThirteen=
                    {
                      margin: '0 auto',
                      width: '100%',
                      height: '500px',
                      padding:'10px',
                      opacity:'0.5'
                  };

                  const styleFourteen={
                      top: '50%',
                      transform:'translateY(-50%)',
                      textTransform:'uppercase'
                  };

                  const styleFifteen=
                        {
                            fontFamily:'cursive',
                            fontSize: '80px'
                        };

                  const styleSixteen=
                  {
                      fontFamily:'sans-serif',
                      fontSize:'40px'
                  };

                  const styleMain=
                  {
                    height:'100%',
                    width:'100%'
                  };


    return(

   <div className="App">


   <div id="myCarousel" className="carousel slide" data-ride="carousel" style={styleMain}>
           <ol className="carousel-indicators">
               <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
               <li data-target="#myCarousel" data-slide-to="1" ></li>
               <li data-target="#myCarousel" data-slide-to="2" ></li>
               <li data-target="#myCarousel" data-slide-to="3" ></li>
           </ol>
           <div className="carousel-inner" role="listbox">
                 <div className="item active">
                     <img src={require('../img/autumn.jpg')} style={styleThirteen}/>
                        <div className="carousel-caption" style={styleFourteen}>
                           <h1 className="display-2">California Tour Guide</h1>
                           <h3 style={styleSixteen}>Travel Made Easy</h3>
                        </div>
                 </div>
                 <div className="item">
                     <img src={require('../img/laketahoe.jpg')} style={styleThirteen}/>
                 </div>
                 <div className="item">
                     <img src={require('../img/sf.jpg')} style={styleThirteen}/>
                 </div>
                 <div className="item">
                     <img src={require('../img/deathvalley.jpg')} style={styleThirteen}/>
                 </div>
            </div>
    </div>





           <div className="padding" style={styleEight}>
                       <div className="container">
                           <div className="row">
                               <div className="col-sm-6">
                                   <img src={require('../img/calibear.png')} style={styleNine}/>
                               </div>
                               <div className="col-sm-6 text-center">
                                  <button><NavLink to = "/home" className="btn btn-default btn-lg">Lets get started!!</NavLink></button>
                                   <h2>Welcome to Californiaaa!!</h2>
                                   <p className="lead">This website welcomes you to California exploration and gives an easy search for must visit places
                                   of the state.
                                   Planning your next vacation is more fun now! Go ahead and explore yourself</p>
                                   <p>Quick facts for curious minds</p>

                                   <p>State Capital: Sacramento</p>
                                   <p>Land Area: 155,959 square miles</p>
                                   <p>Number of counties: 58</p>
                                   <p>State Flower: Golden Poppy</p>
                                   <p>State Bird: California Quail</p>
                                   <p>State Tree: California Redwoods</p>
                                   <p>State Animal: Grizzly Bear</p>
                                   <p>Highest Spot: Mt. Whitney</p>
                                   <p>Lowest Spot: Bad Water, Death Valley</p>


                               </div>
                           </div>
                       </div>
                       </div>


            <div className="padding" style={styleEight}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <img src={require('../img/tahoe.jpeg')} className="img-responsive" style={styleNine} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <img src={require('../img/disney2.jpg')} className="img-responsive" style={styleNine} />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <img src={require('../img/ggb.jpeg')} className="img-responsive" style={styleNine} />
                    </div>
                </div>
            </div>
            </div>
            <div id="fixed" style={styleTen}>
            </div>
            <footer className="container-fluid text-center" style={styleEleven}>
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Contact Us</h3>
                        <br />
                        <h4>1 Washington Sq, San Jose, CA-95192</h4>
                        <h4>111-222-9999</h4>
                    </div>
                    <div className="col-sm-6">
                        <h3>Connect</h3>
                        <a href="https://www.facebook.com" className="fa fa-facebook" style={styleTwelve}></a>
                        <a href="https://www.twitter.com" className="fa fa-twitter" style={styleTwelve}></a>
                        <a href="https://www.google.com" className="fa fa-google" style={styleTwelve}></a>
                        <a href="https://www.linkedin.com" className="fa fa-linkedin" style={styleTwelve}></a>
                        <a href="https://www.youtube.com" className="fa fa-youtube" style={styleTwelve}></a>
                    </div>
                </div>
            </footer>
    </div>

    );
};
}

export default App;
