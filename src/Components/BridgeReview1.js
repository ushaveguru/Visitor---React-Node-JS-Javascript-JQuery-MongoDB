import React from 'react';
import BridgePreview from './BridgePreview';
import axios from 'axios';

class BridgeReview1 extends React.Component {
        state={
    search:[]
};

componentDidMount(){



    axios.get('/api/BridgeReview')
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
        <div className="BridgeReview">
             <div>
            {this.state.search.map(search =>
                <BridgePreview {...search} />
            )}
            </div>
        </div>
        );
    }
}

export default BridgeReview1;
