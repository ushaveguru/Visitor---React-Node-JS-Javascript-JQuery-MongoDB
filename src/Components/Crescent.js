import React from 'react';
import SearchPreview from './SearchPreview';
import axios from 'axios';

class Crescent extends React.Component {
        state={
            search:[]
              };

componentDidMount(){

    axios.get('/api/Crescent')
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
        <div className="Crescent">
             <div>
            {this.state.search.map(search =>
                <SearchPreview {...search} />
            )}
            </div>
        </div>
        );
    }
}

export default Crescent;
