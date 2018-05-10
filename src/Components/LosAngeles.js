import React from 'react';
import SearchPreview from './SearchPreview';
import axios from 'axios';
import natureurl from '../img/la.jpg';

class LosAngeles extends React.Component {
        state={
            search:[]
              };

componentDidMount(){

    axios.get('/api/LosAngeles')
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
        <div className="LosAngeles" style={styleTen}>
             <div>
            {this.state.search.map(search =>
                <SearchPreview {...search} />
            )}
            </div>
        </div>
        );
    }
}

export default LosAngeles;
