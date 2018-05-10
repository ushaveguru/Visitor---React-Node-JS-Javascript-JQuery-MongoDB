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
      history.push('/Zoos');
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

                const styleNineteen={
                  width:'100%',
                  height:'20%'
                };

                const styleTwenty={
                  backgroundColor:"#99FF99"
                };

                const styleBridge={
                  width:'100%',
                  height:'20%'
                };

                const styleNP={
                  width:'100%',
                  height:'20%'
                };

                const styleZoo={
                  width:'100%',
                  height:'20%'
                };

        return(
                <div className="Search">
                  <div className="container-fluid padding">
                    <div className="row welcome text-center">
                      <div className="col-12">
                        <h1>Search by Type of Places</h1>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="container-fluid padding">
                    <div className="row padding">

                      <div className="col-md-4">
                        <div className="card">
                          <img className="card-img-top" src="assets/ggb.jpg" style={styleBridge}/>
                            <div className="card-body">
                              <h4 className="card-title" data-toggle="collapse" data-target="#emoji">Click me to know more on Bridges</h4>
                              <Button bsStyle="success" block onClick={(e) => this.getComponentBridges(e,"Bridges")}>Bridges</Button>
                                <div id="emoji" className="collapse">
                                  <div className="container-fluid padding">
                                    <div className="row text center">
                                      <div className="col-sm-6 col-md-3">
                                        <p>Bridges in California are spread across entire state</p>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card">
                          <img className="card-img-top" src="assets/waterfalls.jpg" style={styleNineteen}/>
                            <div className="card-body">
                              <h4 className="card-title" data-toggle="collapse" data-target="#emoji1">Click me to know more on Waterfalls</h4>
                              <Button bsStyle="success" block onClick={(e) => this.getComponentWaterfalls(e,"Waterfalls")}>Waterfalls</Button>
                                <div id="emoji1" className="collapse">
                                  <div className="container-fluid padding">
                                    <div className="row text center">
                                      <div className="col-sm-6 col-md-3">
                                        <p>Waterfalls are fun</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card">
                          <img className="card-img-top" src="assets/nationalpark.jpg" style={styleNP}/>
                            <div className="card-body">
                              <h4 className="card-title" data-toggle="collapse" data-target="#emoji2">Click me to know more on National Parks</h4>
                              <Button bsStyle="success" block onClick={(e) => this.getComponentNationalParks(e,"NationalParks")}>National Parks</Button><br />
                                <div id="emoji2" className="collapse">
                                  <div className="container-fluid padding">
                                    <div className="row text center">
                                      <div className="col-sm-6 col-md-3">
                                        <p>National Parks are fun</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
        </div>
        </div>


        <div className="container-fluid padding">
          <div className="row padding">

            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="assets/beach.jpg" style={styleNineteen}/>
                  <div className="card-body">
                    <h4 className="card-title" data-toggle="collapse" data-target="#emoji3">Click me to know more on Beaches</h4>
                    <Button bsStyle="success" block onClick={(e) => this.getComponentBeaches(e,"Beaches")}>Beaches</Button>
                      <div id="emoji3" className="collapse">
                        <div className="container-fluid padding">
                          <div className="row text center">
                            <div className="col-sm-6 col-md-3">
                              <p>Beaches are fun</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="assets/zoo.jpg" style={styleZoo}/>
                  <div className="card-body">
                    <h4 className="card-title" data-toggle="collapse" data-target="#emoji4">Click me to know more on Zoos</h4>
                    <Button bsStyle="success" block onClick={(e) => this.getComponentZoos(e,"Zoo")}>Zoos</Button>
                      <div id="emoji4" className="collapse">
                        <div className="container-fluid padding">
                          <div className="row text center">
                            <div className="col-sm-6 col-md-3">
                              <p>Zoos are fun</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="assets/amusementpark.jpg" style={styleNineteen}/>
                  <div className="card-body">
                    <h4 className="card-title" data-toggle="collapse" data-target="#emoji5">Click me to know more on Amusement Parks</h4>
                    <Button bsStyle="success" block onClick={(e) => this.getComponentAmusementParks(e,"AmusementParks")}>Amusement Parks</Button><br />
                      <div id="emoji5" className="collapse">
                        <div className="container-fluid padding">
                          <div className="row text center">
                            <div className="col-sm-6 col-md-3">
                              <p>Amusement Parks are fun</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</div>
</div>



                  <div className="container-fluid padding">
                    <div className="row padding">

                      <div className="col-md-4">
                        <div className="card">
                          <img className="card-img-top" src="assets/tahoe.jpg" style={styleNineteen}/>
                            <div className="card-body">
                              <h4 className="card-title" data-toggle="collapse" data-target="#emoji3">Click me to know more on Lakes</h4>
                              <Button bsStyle="success" block onClick={(e) => this.getComponentLakes(e,"Lakes")}>Lakes</Button>
                                <div id="emoji3" className="collapse">
                                  <div className="container-fluid padding">
                                    <div className="row text center">
                                      <div className="col-sm-6 col-md-3">
                                        <p>Lakes are fun</p>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

</div>
</div>




                          <div className="container-fluid padding">
                            <div className="row welcome text-center">
                              <div className="col-12">
                                <h1>Select by Cities</h1>
                              </div>
                              <hr />
                            </div>
                          </div>
                          <div className="container-fluid padding">
                            <div className="row padding">

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/oakland.jpg" style={styleBridge}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti1">Click me to know more on Oakland</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentOakland(e,"Oakland")}>Oakland</Button>
                                        <div id="emoti1" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>Oakland is fun</p>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/la.jpg" style={styleNineteen}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti2">Click me to know more on Los Angeles</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentLosAngeles(e,"Los Angeles")}>Los Angeles</Button>
                                        <div id="emoti2" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>Los Angeles is fun</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/oroville.jpg" style={styleNP}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti3">Click me to know more on Oroville</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentOroville(e,"Oroville")}>Oroville</Button><br />
                                        <div id="emoti3" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>Oroville is fun</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                          </div>



                          <div className="container-fluid padding">
                            <div className="row padding">

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/sf.jpg" style={styleBridge}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti4">Click me to know more on San Francisco</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentSanFrancisco(e,"San Francisco")}>San Francisco</Button>
                                        <div id="emoti4" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>San Francisco is fun</p>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/mon.jpg" style={styleNineteen}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti5">Click me to know more on Monterey</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentMonterey(e,"Monterey")}>Monterey</Button>
                                        <div id="emoti5" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>Monterey is fun</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/santacruz.jpeg" style={styleNP}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti6">Click me to know more on Santa Cruz</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentSantaCruz(e,"Santa Cruz")}>Santa Cruz</Button><br />
                                        <div id="emoti6" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>Santa Cruz is fun</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                          </div>




                          <div className="container-fluid padding">
                            <div className="row padding">

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/nevada.jpg" style={styleBridge}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti7">Click me to know more on Nevada County</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentNevadaCounty(e,"Nevada")}>Nevada County</Button>
                                        <div id="emoti7" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>Nevada County is fun</p>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/sandiego.jpg" style={styleNineteen}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti8">Click me to know more on San Diego</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentSanDiego(e,"Monterey")}>San Diego</Button>
                                        <div id="emoti8" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>San Diego is fun</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/stovepipe.jpg" style={styleNP}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti9">Click me to know more on Stovepipe Wells</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentStovepipeWells(e,"Stovepipe Wells")}>Stovepipe Wells</Button><br />
                                        <div id="emoti9" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>Stovepipe Wells is fun</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                          </div>

                          <div className="container-fluid padding">
                            <div className="row padding">

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/bigsur.jpg" style={styleBridge}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti10">Click me to know more on Big Sur</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentBigSur(e,"BigSur")}>Big Sur</Button>
                                        <div id="emoti10" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>Big Sur is fun</p>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/taho.jpg" style={styleNineteen}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti11">Click me to know more on Tahoe</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentTahoe(e,"Tahoe")}>Tahoe</Button>
                                        <div id="emoti11" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>Tahoe is fun</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="card">
                                  <img className="card-img-top" src="assets/yos.jpeg" style={styleNP}/>
                                    <div className="card-body">
                                      <h4 className="card-title" data-toggle="collapse" data-target="#emoti12">Click me to know more on Yosemite</h4>
                                      <Button bsStyle="success" block onClick={(e) => this.getComponentYosemite(e,"Yosemite")}>Yosemite</Button><br />
                                        <div id="emoti12" className="collapse">
                                          <div className="container-fluid padding">
                                            <div className="row text center">
                                              <div className="col-sm-6 col-md-3">
                                                <p>Yosemite is fun</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                          </div>
              </div>
        );
    }
}

export default Search;
export const history = createHashHistory();
