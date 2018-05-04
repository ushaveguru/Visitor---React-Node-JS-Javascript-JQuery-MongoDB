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
        this.state = {value: 'San Jose'};

    }


     getComponentSanJose(e,value) {
       console.log(value);

       history.push('/SanJose');

    }
       getComponentMonterey(e,value) {
         console.log(value);
         history.push('/Monterey');
         $(e.target).css({
             'background-color': '#ccc'
         });
       }
       getComponentSanFrancisco(e,value) {
         console.log(value);
         history.push('/SanFrancisco');
         $(e.target).css({
             'background-color': '#ccc'
         });
       }
       getComponentBridges(e,value) {
         console.log(value);
         history.push('/Bridges');
         $(e.target).css({
             'background-color': '#ccc'
         });
      }
         getComponentLakes(e,value) {
           console.log(value);
           history.push('/Lakes');
           $(e.target).css({
               'background-color': '#ccc'
           });
         }
         getComponentWaterfalls(e,value) {
           console.log(value);
           history.push('/Waterfalls');
           $(e.target).css({
               'background-color': '#ccc'
           });
         }
         getComponentBeaches(e,value) {
           console.log(value);
           history.push('/Beaches');
           $(e.target).css({
               'background-color': '#ccc'
           });
        }
           getComponentAmusementParks(e,value) {
             console.log(value);
             history.push('/AmusementParks');
             $(e.target).css({
                 'background-color': '#ccc'
             });
           }
           getComponentNationalParks(e,value) {
             console.log(value);
             history.push('/NationalParks');
             $(e.target).css({
                 'background-color': '#ccc'
             });
           }
           getComponentZoo(e,value) {
             console.log(value);
             history.push('/Zoo');
             $(e.target).css({
                 'background-color': '#ccc'
             });
           }

    render(){



        return(

        <div className="Search">
        <div>
            <ul>
              <li onClick={(e) => this.getComponentSanJose(e,"San Jose")}>San Jose</li>
              <li onClick={(e) => this.getComponentSanFrancisco(e,"San Francisco")}>San Francisco</li>
              <li onClick={(e) => this.getComponentMonterey(e,"Monterey")}>Monterey</li>
            </ul>
        </div>
        <div>
            <ul>
              <li onClick={(e) => this.getComponentBridges(e,"Bridges")}>Bridges</li>
              <li onClick={(e) => this.getComponentLakes(e,"Lakes")}>Lakes</li>
              <li onClick={(e) => this.getComponentWaterfalls(e,"Waterfalls")}>Waterfalls</li>
              <li onClick={(e) => this.getComponentBeaches(e,"Beaches")}>Beaches</li>
              <li onClick={(e) => this.getComponentAmusementParks(e,"AmusementParks")}>Amusement Parks</li>
              <li onClick={(e) => this.getComponentNationalParks(e,"NationalParks")}>National Parks</li>
              <li onClick={(e) => this.getComponentZoo(e,"Zoo")}>Zoo</li>
            </ul>
        </div>
        </div>

        );
        //var valueName = this.state.value;
    }
}

export default Search;
export const history = createHashHistory();
