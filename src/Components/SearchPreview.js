import React from 'react';
import { createHashHistory } from 'history';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class SearchPreview extends React.Component {
  getComponentPlaces(e,value) {
    console.log(value);
    var val = value.item;
    var final = val.split(' ').join('')
    console.log(final);
    history.push('/'+final);
    $(e.target).css({
        'background-color': '#ccc'
    });
 }


 render() {
   var search  = this.props;
     return (
       <div className="SearchPreview">
       <div>

          <b><Button bsStyle="success" bsSize="large"> Select from one of the following places in {search.City}</Button></b><br /><br />
       </div>
           <div>



           {search.Loc_array.map(e =>e.name_of_location.map((item, index) => (
              <b><ListGroup><ListGroupItem bsStyle="success" bsSize="large" block className='indent' onClick={(evt) => this.getComponentPlaces(evt,{item})} key={index}> <center>{item}</center> </ListGroupItem></ListGroup></b>
           )))}
            </div>
       </div>
     )
 }
 }
 export default SearchPreview;
  export const history = createHashHistory();
