import React from 'react';
import { createHashHistory } from 'history';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';

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
              {search.Loc_array.map(e =><li>{e.type_loc}</li>)}<br />


           {search.Loc_array.map(e =>e.name_of_location.map((item, index) => (
              <li className='indent' onClick={(evt) => this.getComponentPlaces(evt,{item})} key={index}> {item} </li>
           )))}
            </div>
       </div>
     )
 }
 }
 export default SearchPreview;
  export const history = createHashHistory();
