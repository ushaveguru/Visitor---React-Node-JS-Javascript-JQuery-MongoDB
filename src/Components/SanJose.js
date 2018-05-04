import React from 'react';
import SearchPreview from './SearchPreview';
import axios from 'axios';

class SanJose extends React.Component {
        state={
    search:[]
};

componentDidMount(){



    axios.get('/api/monterey')
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
        return(
        <div className="SanJose">
             <div>
            {this.state.search.map(search =>
                <SearchPreview {...search} />
            )}
            </div>
        </div>
        );
    }
}

export default SanJose;
