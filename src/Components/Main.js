import Header from './Header';
import React from 'react';
import axios from 'axios';
import { Link, NavLink, HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Search from './Search';
import imageurl from '../img/mountains.jpeg';
import natureurl from '../img/background.jpg';




class Main extends React.Component {
    



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
    <HashRouter>
        <div className="Main">
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
                                <li><NavLink to = "/" className="active" style={styleFour}>Home</NavLink></li>
                                <li><NavLink to = "/Home" style={styleFour}>About</NavLink></li>
                                <li><NavLink to ="/Search" style={styleFour}>Search</NavLink></li>
                                <li><a href="#" style={styleFour}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>  
            </div>
        
       
            <div className="content">
                <Route exact path ="/" component={App} />
                <Route path ="/Home" component={Home} />
                <Route path ="/Search" component={Search} />
            </div>
        </div>
    </HashRouter>
    );
};
}

export default Main;