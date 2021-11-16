import React from 'react';
import HexagonBackendService from '../services/HexagonBackendService';

class QuestionTwoComponent extends React.Component {
    
    constructor() {
        super()

        this.state = {
            hexData: [],
            currentTable: "0"
        }
        
        this.handleTableClick = this.handleTableClick.bind(this);       
    }

    handleTableClick(go) {

        this.setState({ hexData: []});
        this.setState({ currentTable: "0"});
        switch (go) {
            case 1:
            {
                HexagonBackendService.getAllEmployeesTable().then((res) => {
                    this.setState({ hexData: res.data});
                    this.setState({ currentTable: go});
                });                
                return;
            }
            case 2:
            {
                HexagonBackendService.getAllPositionsTable().then((res) => {
                    this.setState({ hexData: res.data});
                    this.setState({ currentTable: go});
                });                
                return;
            }
            case 3:
            {
                HexagonBackendService.getAllEmployeesJoined().then((res) => {
                    this.setState({ hexData: res.data});
                    this.setState({ currentTable: go});
                });                
                return;
            }
        }
    }

    render(){
        let retrieved_data = null;
        switch (this.state.currentTable) {
            case 1:
            {
                retrieved_data = (
                <div className="row">
                <div className="col-sm-4"/>
                <div className="col-sm-4"> 
                <table className = "table table-striped table-bordered">
                    <thead><tr><th>Employee Full Name</th><th>Date of Hire</th></tr></thead>
                    <tbody>{
                            this.state.hexData.map(
                            jsonData => 
                            <tr key = {jsonData.empId}>                            
                                <td>{jsonData.fullName}</td>   
                                <td>{jsonData.dateHired}</td>                                
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
                <div className="col-sm-4"/> 
                </div>
                );
                break;
            }
            case 2:
            {
                retrieved_data = (
                <div className="row">
                <div className="col-sm-4"/>
                <div className="col-sm-4"> 
                <table className = "table table-striped table-bordered">
                    <thead><tr><th>Position Name</th><th>Is A Manager</th></tr></thead>
                    <tbody>{
                            this.state.hexData.map(
                            jsonData => 
                            <tr key = {jsonData.posId}>                            
                                <td>{jsonData.posName}</td>   
                                <td>{jsonData.managerFlag === true ? "Y" : "N"}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
                <div className="col-sm-4"/> 
                </div>                
                );
                break;
            }
            case 3:
            {
                retrieved_data = (
                <div className="row">
                <div className="col-sm-4"/>
                <div className="col-sm-4">     
                <table className = "table table-striped table-bordered">
                    <thead><tr><th>Employee Full Name</th><th>Date of Hire</th><th>Position Name</th><th>Is A Manager</th></tr></thead>
                    <tbody>{
                            this.state.hexData.map(
                            jsonData => 
                            <tr key = {jsonData.empId}>                            
                                <td>{jsonData.fullName}</td>   
                                <td>{jsonData.dateHired}</td>                                
                                <td>{jsonData.posName}</td>   
                                <td>{jsonData.managerFlag === true ? "Y" : "N"}</td>                                
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
                <div className="col-sm-4"/> 
                </div>                
                );
                break;
            }
        }

        return (
            <div className="row">
                <h1 className = "text-center">Employee, Position Table Join</h1>
                <div>
                    <button onClick={()=>this.handleTableClick(1)} className="btn btn-dark m-2">Employees Table</button>
                    <button onClick={()=>this.handleTableClick(2)} className="btn btn-dark m-2">Positions Table</button>
                    <button onClick={()=>this.handleTableClick(3)} className="btn btn-dark m-2">Tabels Joined</button>
                </div>
                <div> {retrieved_data}</div>
            </div>
        )
    }
}
export default QuestionTwoComponent;
