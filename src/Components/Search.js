import React from 'react';
import { Link, NavLink, HashRouter, Route, withRouter } from 'react-router-dom';
import Locations from './Locations';
import { createHashHistory } from 'history';  



class Search extends React.Component {
    constructor(props,context)
    {
        super(props);
        this.state = {value: 'San Jose'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleChange(event){
         this.setState({value: event.target.value});
     }
    
     handleSubmit(event){
         //this.context.history.push('/Locations');
         history.push('/Locations');
         event.preventDefault();
     }
    render(){
        
        
        
        return(
        <HashRouter>
        <div className="Search">
        <form onSubmit={this.handleSubmit}>
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="sanjose">San Jose</option>
                        <option value="sanfrancisco">San Francisco</option>
                        <option value="monterey">Monterey</option>
                        <option value="oakland">Oakland</option>
                    </select>
           
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="bridges">Bridges</option>
                        <option value="amusementparks">Amusement Parks</option>
                        <option value="lakes">Lakes</option>
                        <option value="nationalparks">National Parks</option>
                    </select>
                </label>
            
        <input type="submit" value="Submit" />
        </form>
        <div className="content">
                <Route exact path ="/Locations" component={Locations} />
                
        </div>
        </div>
        </HashRouter>
        );
    }
}

export default Search;
export const history = createHashHistory();