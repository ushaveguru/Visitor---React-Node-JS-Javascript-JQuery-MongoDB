import React from 'react';
import SearchPreview from './SearchPreview';
import axios from 'axios';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import natureurl from '../img/sandiego.jpg';

class SanDiego extends React.Component {
        state={
            search:[]
              };

componentDidMount(){

    axios.get('/api/SanDiego')
    .then(resp=>{
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
                      opacity:'0.7'
                    };


        return(
        <div className="SanDiego" style={styleTen}>
             <div>
            {this.state.search.map(search =>
                <SearchPreview {...search} />
            )}
            </div>
        </div>
        );
    }
}

export default SanDiego;
