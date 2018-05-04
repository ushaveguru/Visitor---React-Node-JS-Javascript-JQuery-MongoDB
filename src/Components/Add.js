//Add.js
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');
class Add extends React.Component {
constructor() {
      super();
      this.state = {selectedtype:'Bridges', data: []};
        this.getData = this.getData.bind(this);
this.handleSelectChange = this.handleSelectChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewExpense = this.insertNewExpense.bind(this);
    }


componentDidMount() {
      this.setState({
        City: this.props.selectedLocation
      });
    }
handleSelectChange(e) {
      if (e.target.name == 'typeoflocation') {
        this.setState({
          typeoflocation: e.target.value
        });
      }
    }
onClick(e) {
      this.getData(this, 'Bridges');
    }

  getData(ev, type){
      axios.get('/getAll?type='+type)
        .then(function(response) {
          ev.setState({selectedtype: parseInt(type)})
        });
handleTextChange(e) {
      if (e.target.name == "typeoflocation") {
        this.setState({
          description: e.target.value
        });
    }
render() {
   if(this.state.messageFromServer == ''){
      return (
        <div>

<fieldset>
       <label for="typeoflocation"></label><select id="typeoflocation" name="typeoflocation" value={this.state.typeoflocation} onChange={this.handleSelectChange}>
            <option value="Bridges" id="Bridges">Bridges</option>
            <option value="Amusement Parks" id="Amusement Parks">Amusement Parks</option>
            <option value="Lakes" id="Lakes">Lakes</option>
            <option value="National Parks" id="National Parks">April</option>
         </select>
</fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Submit</Button>
      )
   }
   else{
    return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Add Expense"
        className="Modal">
<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>
        <Link to={{pathname: '/Locations', search: '' }} style={{ textDecoration: 'none' }}>
        </Link>
       </div>
      </Modal>
       </div>
     )
    }
   }
}
export default Add;
