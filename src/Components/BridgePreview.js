import React from 'react';
import {ReactDataGrid,ReactDataGridColumn} from 'flexicious-react-datagrid';
import {Styles} from 'flexicious-react-datagrid-styles';

class BridgePreview extends React.Component {
        state={
    search:[]
};

componentDidMount(){
}
    render(){
      var search = this.props;
        return(
          <div className="BridgePreview">
          <h1>Bridge Table</h1>
          <ReactDataGrid width={"70%"} height={"50%"} editable dataProvider= {search.GoldenGateBridge}>
          <ReactDataGridColumn dataField="ParkingAvaliablity"/>
          <ReactDataGridColumn dataField="ViewPoints"/>
          <ReactDataGridColumn dataField="KidFriendly"/>
          <ReactDataGridColumn dataField="BestTimeToVisit"/>
          <ReactDataGridColumn dataField="WouldVisitAgain"/>
          <ReactDataGridColumn dataField="Comments"/>
          </ReactDataGrid>

          </div>

        );
    }
}


export default BridgePreview;
