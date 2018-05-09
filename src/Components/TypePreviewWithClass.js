import React from 'react';
import { createHashHistory } from 'history';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './style.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class TypePreview extends React.Component {
  getComponentBridges(e,value) {
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


       var search = this.props;
       return (
         <div className="TypePreview">
             <div>
                <Button bsStyle="success"> {search.typeoflocation}</Button>
             </div>
             <div>
             {search.nameoflocation.map((item, index) => (
                <Button bsStyle="info"c bsSize="large" block className='indent' onClick={(e) => this.getComponentBridges(e,{item})} key={index}> {item} </Button>
             ))}

             </div>
         </div>
       )
   }
 }
 export default TypePreview;
 export const history = createHashHistory();
