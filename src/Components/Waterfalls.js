import React from 'react';
import TypePreview from './TypePreview';
import axios from 'axios';
import './style.css';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import natureurl from '../img/img2.jpg';


class Waterfalls extends React.Component {
        state={
            search:[]
              };

componentDidMount(){
    axios.get('/api/Waterfalls')
    .then(resp=>{
        //console.log(resp);
        console.log(resp);
        this.setState({
                  search: resp.data.search
                    });

                  })
    .catch(console.error);
}
    render(){
      const styleTen=
            {
                display: 'table',
                height: '100%',
                position:'relative',
                width:'100%',
                backgroundSize:'cover',
                backgroundImage: "url(" + natureurl + ")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center',
                backgroundAttachment:'fixed',
                overflow:'scroll',
                opacity:'0.5'
              };


        return(
        <div className="Waterfalls" style={styleTen}>

          <div>
              {this.state.search.map(search => <TypePreview {...search} />)}
          </div>
        </div>
        );
    }
}

export default Waterfalls;