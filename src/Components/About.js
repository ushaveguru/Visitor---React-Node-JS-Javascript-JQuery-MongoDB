import React from 'react';
import natureurl from '../img/travel.jpg';

class About extends React.Component {
    render(){

                const styleTen=
                {
                  display: 'table',
                  position:'relative',
                  color:'#000000',
                  overflow:'scroll',
                  fontFamily:'Bilbo',
                  fontSize:'25px',
                  float:'left',
                  width: '50%',
                  padding: '10px',
                  height: '300px',
                  display:'inline-block',
                  border: '1px solid #000',
                  padding: '25px',
                  backgroundColor:'#D0D0D0'
                };
              const styleTwo=
              {
                fontFamily:'Barrio',
                fontSize:'25px'
              }

              const styleOne=
              {
                  height:'420px',
                  width:'100%',
              };
               const styleThree=
               {
                 fontFamily:'Bilbo',
                 fontSize:'25px'
               };

               const styleFour=
               {
                 fontFamily:'Bilbo',
                 fontSize:'20px'
               };

        return(
        <div className="home-page" id="home" >
          <img src={require('../img/travel.jpg')} style={styleOne}/>
            <div style={styleTen}>
              <h1 style={styleTwo}><b><center>What is this website all about?</center></b></h1><hr />
              <h4 style={styleThree}>
              Explore Places: This website welcomes you to explore California to the fullest. It facilitates an easy approach to search for the
              places you like to visit in this state.<br /><br />
              Easy Review Section: It allows you to add reviews to any place and also provides reviews from various
              other travelers. Reviews are in form of tables and not lengthy paragraphs! This helps you get the information
              quickly and easily :)
              <h5 style={styleFour}>  This website is for you, if you are<br /><br />
              - a travel enthusiast who has a city constraint and want to explore in that City<br />
              - a travel enthusiast who is interested in a particular type location and is free to go around Cities<br />
              - just a travel enthusist!<br />
              </h5>
              </h4>
            </div>

            <div style={styleTen}>
              <h1 style={styleTwo}><b><center>Who are we?</center></b></h1><hr />

                <h4 style={styleThree}>
                  Company<br />
                  Founded :  May, 2018<br />
                  Location:  San Jose, CA<br />
                  Investors: None<br />
                </h4>
            </div>
        </div>
        );
    }
}

export default About;
