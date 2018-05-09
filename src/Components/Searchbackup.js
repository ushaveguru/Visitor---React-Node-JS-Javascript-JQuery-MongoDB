import React from 'react';
import { Link, NavLink, HashRouter, Route, withRouter, Redirect } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import Locations from './Locations';
import Monterey from './Monterey';
import SanFrancisco from './SanFrancisco';
import Tahoe from './Tahoe';
import Yosemite from './Yosemite';
import BigSur from './BigSur';
import Oroville from './Oroville';
import NevadaCounty from './NevadaCounty';
import SantaCruz from './SantaCruz';
import LosAngeles from './LosAngeles';
import SanDiego from './SanDiego';
import Crescent from './Crescent';
import StovepipeWells from './StovepipeWells';
import Oakland from './Oakland';
import Bridges from './Bridges';
import Waterfalls from './Waterfalls';
import Beaches from './Beaches';
import AmusementParks from './AmusementParks';
import NationalParks from './NationalParks';
import Lakes from './Lakes';
import Zoos from './Zoos';
import GoldenGateBridge from './GoldenGateBridge';
import { Button } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { createHashHistory } from 'history';




class Search extends React.Component {
    constructor(props,context)
    {
        super(props);
        this.state = {value: 'San Jose'};
    }

    //Start of Cities
    getComponentMonterey(e,value)
    {
      console.log(value);
      history.push('/Monterey');
    }

    getComponentSanFrancisco(e,value)
    {
      console.log(value);
      history.push('/SanFrancisco');
    }

    getComponentTahoe(e,value)
    {
      console.log(value);
      history.push('/Tahoe');
    }

    getComponentYosemite(e,value)
    {
      console.log(value);
      history.push('/Yosemite');
    }

    getComponentBigSur(e,value)
    {
      console.log(value);
      history.push('/BigSur');
    }

    getComponentOroville(e,value)
    {
      console.log(value);
      history.push('/Oroville');
    }

    getComponentNevadaCounty(e,value)
    {
      console.log(value);
      history.push('/NevadaCounty');
    }

    getComponentSantaCruz(e,value)
    {
      console.log(value);
      history.push('/SantaCruz');
    }

    getComponentLosAngeles(e,value)
    {
      console.log(value);
      history.push('/LosAngeles');
    }

    getComponentSanDiego(e,value)
    {
      console.log(value);
      history.push('/SanDiego');
    }

    getComponentCrescent(e,value)
    {
      console.log(value);
      history.push('/Crescent');
    }

    getComponentStovepipeWells(e,value)
    {
      console.log(value);
      history.push('/StovepipeWells');
    }

    getComponentOakland(e,value)
    {
      console.log(value);
      history.push('/Oakland');
    }
    //End of Cities

    getComponentBridges(e,value)
    {
      console.log(value);
      history.push('/Bridges');
    }

    getComponentLakes(e,value)
    {
      console.log(value);
      history.push('/Lakes');
    }

    getComponentWaterfalls(e,value)
    {
      console.log(value);
      history.push('/Waterfalls');
    }

    getComponentBeaches(e,value)
    {
      console.log(value);
      history.push('/Beaches');
    }

    getComponentAmusementParks(e,value)
    {
      console.log(value);
      history.push('/AmusementParks');
    }

    getComponentNationalParks(e,value)
    {
      console.log(value);
      history.push('/NationalParks');
    }

    getComponentZoos(e,value)
    {
      console.log(value);
      history.push('/Zoo');
    }

    render(){

      const styleOne =
            {
              width:'250px'

            };

      const styleTwo=
            {
              width:'250px'
            };

            const styleThree=
                  {
                      maxHeight:'40px',
                  };
            const styleFour=
                  {
                      color: '#D5D5D5',

                  };
            const styleFive=
                  {
                      display: 'table',
                      height: '100%',
                      position:'relative',
                      width:'100%',
                      backgroundSize:'cover',

                      backgroundRepeat: 'no-repeat',
                      backgroundPosition:'center',
                      overflow: 'hidden'
                    };

            const styleSix=
                  {
                      display:'table-cell',
                      textAlign:'center',
                      verticalAlign:'middle'
                  };

            const styleSeven=
                  {
                      fontSize:'500%',
                      fontWeight:'700%'
                  };

            const styleEight=
                  {
                      padding:'10px 10px'
                  };

            const styleNine=
                  {
                      width:'100%'
                  };

            const styleTen=
                  {
                      display: 'table',
                      height: '60%',
                      position:'relative',
                      width:'100%',
                      backgroundSize:'cover',

                      backgroundRepeat: 'no-repeat',
                      backgroundPosition:'center',
                      backgroundAttachment:'fixed',
                      overflow:'scroll'
                    };
            const styleEleven=
                  {
                      width:'100%',
                      backgroundColor:'#23415C',
                      padding:'5% 5% 10% 5%',
                      color:'#FFF'
                  };

            const styleTwelve=
                  {
                      padding:'15px',
                      fontSize:'25px',
                      color:'#FFF'
                  };



  const styleThirteen=
                  {
                    margin: '0 auto',
                    width: '100%',
                    height: '500px',
                    padding:'10px',
                    opacity:'0.5'
                };

                const styleFourteen={
                    top: '50%',
                    transform:'translateY(-50%)',
                    textTransform:'uppercase'
                };

                const styleFifteen=
                      {
                          fontFamily:'cursive',
                          fontSize: '80px'
                      };

                const styleSixteen=
                {
                    fontFamily:'sans-serif',
                    fontSize:'40px'
                };

                const styleSeventeen=
                {
                    position:'absolute'
                };

                const styleEighteen=
                {
                    position:'static'
                };

        return(
              <div className="Search">
                <div>

                <Button bsStyle="success" bsSize="large" block>Select by Cities</Button>

                        <div>
                        <ul>
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentSanFrancisco(e,"San Francisco")}>San Francisco</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentMonterey(e,"Monterey")}>Monterey</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentNevadaCounty(e,"Nevada County")}>Nevada County</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentSantaCruz(e,"Santa Cruz")}>Santa Cruz</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentLosAngeles(e,"Los Angeles")}>Los Angeles</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentYosemite(e,"Yosemite")}>Yosemite</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentTahoe(e,"Tahoe")}>Tahoe</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentOroville(e,"Oroville")}>Oroville</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentCrescent(e,"Crescent")}>Crescent</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentStovepipeWells(e,"Stovepipe Wells")}>Stovepipe Wells</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentOakland(e,"Oakland")}>Oakland</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentSanDiego(e,"San Diego")}>San Diego</ListGroupItem></ListGroup><br />
                        </ul>

                        </div>
                  </div>

                  <div >
                        <Button bsStyle="success" bsSize="large" block>Select by Type of Locations</Button>
                        <div >
                        <ul><center>
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' type="button" className="btn btn-info" data-toggle="button" aria-pressed="false" autoComplete="off" onClick={(e) => this.getComponentBridges(e,"Bridges")}>Bridges</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentLakes(e,"Lakes")}>Lakes</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentWaterfalls(e,"Waterfalls")}>Waterfalls</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentBeaches(e,"Beaches")}>Beaches</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentAmusementParks(e,"AmusementParks")}>Amusement Parks</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentNationalParks(e,"NationalParks")}>National Parks</ListGroupItem></ListGroup><br />
                          <ListGroup><ListGroupItem bsStyle="Success"c bsSize="large" block className='indent' onClick={(e) => this.getComponentZoos(e,"Zoos")}>Zoos</ListGroupItem></ListGroup><br />
                          </center></ul>
                        </div>
                    </div>
              </div>
        );
    }
}

export default Search;
export const history = createHashHistory();
