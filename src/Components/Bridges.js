import React from 'react';
import TypePreview from './TypePreview';
import axios from 'axios';

class Bridges extends React.Component {
        state={
    search:[]
};

componentDidMount(){



    axios.get('/api/Bridges')
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
        <div className="Bridges">
             <div>
            {this.state.search.map(search =>
                <TypePreview {...search} />
            )}
            </div>
        </div>
        );
    }
}

export default Bridges;
