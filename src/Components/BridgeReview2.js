import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn}
        from 'react-bootstrap-table'



function onInsertRow(row) {
  let newRowStr = ''

  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n'
  }
  console.log(newRowStr);
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
