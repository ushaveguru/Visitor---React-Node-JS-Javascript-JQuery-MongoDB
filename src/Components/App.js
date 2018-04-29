import Header from './Header';
import React from 'react';
import imageurl from '../img/mountains.jpeg';
import natureurl from '../img/background.jpg';



const App=() =>{
    const styleOne = 
          {
            height:'100%',
            width:'100%'
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
        <Header />
        <div style={styleOne}>
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation" style={styleTwo}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
                            <span className="sr-only">Toggle navigation</span>  
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                         <a className="navbar-brand" href="#"><img src={require('../img/small.png')} style={styleThree} /> 
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse-main">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#" className="active" style={styleFour}>Home</a></li>
                            <li><a href="#" style={styleFour}>About</a></li>
                            <li><a href="#" style={styleFour}>Search</a></li>
                            <li><a href="#" style={styleFour}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>  
            <div id="home" style={styleFive}>
                <div className="landing-text" style={styleSix}>
                    <h1 style={styleSeven}>California Tour Guide</h1>
                    <h3>Travel Made Easy</h3>
                    <a href="#" className="btn btn-default btn-lg">Lets get started!!</a>
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
  </div>
    );
};

export default App;