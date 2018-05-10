import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn}
        from 'react-bootstrap-table';
import axios from 'axios';



function onInsertRow(row) {
  let newRowStr = ''

  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n'
  }
  console.log(row);

  var postData = row;
  console.log(postData);

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
  }
};

axios.post('/api/BridgePreview', postData, axiosConfig)
.then((res) => {
  console.log("RESPONSE RECEIVED: ", res);
})
.catch((err) => {
  console.log("AXIOS ERROR: ", err);
})
}


function onDeleteRow(rowKeys) {
  alert('You deleted: ' + rowKeys)
}

class BridgeReview2 extends Component {
  render() {
    const options = {
      afterInsertRow: onInsertRow,
      afterDeleteRow: onDeleteRow
    }

    // To delete rows you be able to select rows
    const selectRowProp = {
      mode: 'checkbox'
    }

    return (
      <div>
        <BootstrapTable data={this.props.data}
                        insertRow={true}
                        deleteRow={true}
                        selectRow={selectRowProp}
                        options={options}
        >
          <TableHeaderColumn isKey dataField='ParkingAvaliablity'
          >
            ParkingAvaliablity
          </TableHeaderColumn>
          <TableHeaderColumn dataField='ViewPoints'
          >
            ViewPoints
          </TableHeaderColumn>
          <TableHeaderColumn dataField='KidFriendly'
          >
            KidFriendly
          </TableHeaderColumn>
          <TableHeaderColumn dataField='BestTimeToVisit'
          >
            BestTimeToVisit
          </TableHeaderColumn>
          <TableHeaderColumn dataField='WouldVisitAgain'
          >
            WouldVisitAgain
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Comments'
          >
            Comments
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default BridgeReview2
