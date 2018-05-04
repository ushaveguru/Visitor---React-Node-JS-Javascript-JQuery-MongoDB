import React from 'react';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import Locations from './Locations';
import SanJose from './SanJose';
import Monterey from './Monterey';
import { createHashHistory } from 'history';



class Search extends React.Component {
    constructor(props,context)
    {
        super(props);



    }
    componentDidMount(){
        const { match : { params } } = this.props;
        this.setState({

                userId: ${params.userId}

            });
    }


 render(){
   return (
     <div>
     <div>
         <ul>
           <li>
           <NavLink to={`/Search/Monterey`}>Monterey</NavLink>
           </li>

         </ul>
     </div>


      </div>
   )
 }
}

export default Search;
export const history = createHashHistory();
