import React from 'react';
import SearchPreview from './SearchPreview';
import axios from 'axios';

class NevadaCounty extends React.Component {
        state={
            search:[]
              };

componentDidMount(){

    axios.get('/api/NevadaCounty')
    .then(resp=>{
        console.log(resp);
        this.setState({
                        search: resp.data.search
                      });
          })
    .catch(console.error);

}
    render(){
        return(
        <div className="NevadaCounty">
             <div>
            {this.state.search.map(search =>
                <SearchPreview {...search} />
            )}
            </div>
        </div>
        );
    }
}

export default NevadaCounty;
