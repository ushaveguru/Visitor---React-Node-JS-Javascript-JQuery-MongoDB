//Add.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search'
export default class App extends React.Component {
  constructor() {
      super();
    this.state = {selectedtype:'Bridges', data: []};
      this.getData = this.getData.bind(this);
    }
  componentDidMount() {
      this.getData(this, 'Bridges');
    }
    componentWillReceiveProps(nextProps) {
      this.getData(this, 'Bridges');
    }
  getData(ev, type){
      axios.get('/getAll?type='+type)
        .then(function(response) {
          ev.setState({selectedtype: parseInt(type)})
        });
    }
  render() {
      return (
        <div>
          <Add selectedtype={this.state.selectedtype} />
          <table>
            <thead>
              <tr><th></th><th className='desc-col'>Description</th><th className='button-col'>Amount</th><th className='button-col'>Type</th></tr>
            </thead>
            <tbody>
              {
                this.state.data.map(function(exp){
                  return  <tr><td className='counterCell'></td><td className='desc-col'>{exp.typeoflocation}</td>
              }
              </tbody>
  </table>
        </div>
      );
    }
  }
