import Header from './Header';
import React from 'react';
import axios from 'axios';
import imageurl from '../img/mountains.jpeg';
import natureurl from '../img/background.jpg';
import ContestPreview from './ContestPreview';
import { Link, NavLink, HashRouter, Route } from 'react-router-dom';




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
              backgroundColor: '#23415C',
              padding: '1% 0',
              fontSize:'1.2em'
          }; 
    const styleThree=
          {
              maxHeight:'40px',
          }; 
    const styleFour=
          {
              color: '#D5D5D5',
              
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
              padding:'80px 0'
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
              backgroundColor:'#23415C',
              padding:'5% 5% 10% 5%',
              color:'#FFF'
          };
    
    const styleTwelve=
          {
              padding:'15px',
              fontSize:'25px',
              color:'#FFF'
          };
    
    
    return(
      
   <div className="App">
        
            <div id="home" style={styleFive}>
                <div className="landing-text" style={styleSix}>
                    <h1 style={styleSeven}>California Tour Guide</h1>
                    <h3>Travel Made Easy</h3>
                    <li><NavLink to = "/home" className="btn btn-default btn-lg">Lets get started!!</NavLink></li>
                </div>
            </div>
            <div className="padding" style={styleEight}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={require('../img/californiaMap.jpeg')} style={styleNine}/> 
                    </div>    
                    <div className="col-sm-6 text-center">
                        <h2>Welcome to Californiaaa!!</h2>
                        <p className="lead">This website welcomes you to California exploration.Go ahead and explore yourself</p>
                         <div>
            {this.state.contests.map(contest =>
                <ContestPreview {...contest} />
            )}
        </div>
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
                        <a href="#" className="fa fa-facebook" style={styleTwelve}></a>
                        <a href="#" className="fa fa-twitter" style={styleTwelve}></a>
                        <a href="#" className="fa fa-google" style={styleTwelve}></a>
                        <a href="#" className="fa fa-linkedin" style={styleTwelve}></a>
                        <a href="#" className="fa fa-youtube" style={styleTwelve}></a>
                    </div>
                </div>
            </footer>
    </div>

    );
};
}

export default App;