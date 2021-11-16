import React from 'react';
import HexagonBackendService from '../services/HexagonBackendService';


class QuestionOneComponent extends React.Component {

    constructor() {
        super()

        this.state = {
            inputValue: Number,
            returnValue: String
        }
        
        this.handleCalculateClick = this.handleCalculateClick.bind(this);       
        this.updateInputValue = this.updateInputValue.bind(this);   
    }
    
    updateInputValue( imputValue ) {
        this.setState({ inputValue: imputValue });
      }

    handleCalculateClick() {           
        if ((this.state.inputValue < 2) || (this.state.inputValue > 10000))
        {
            alert("Must enter an integer between 2 and 10000");
            this.setState({ returnValue: ""});
            return;
        }

        HexagonBackendService.getEratosthenesCalculation(this.state.inputValue).then((res) => {
            this.setState({ returnValue: res.data});
        });                
        return;
    }
      
    render(){
        const { imputValue } = this.state;
        const { returnValue } = this.state;        

        return (            
            <div className="row">
                <h1 className = "text-center">The Sieve of Eratosthenes</h1>
                <div className="col-sm-4"/>
                <div className="col-sm-4">                
                <div className="form-group" align="left">
                    <label for="formGroupMaxIntValueInput" className="form-label">Enter maxium integer value (2-10000):</label>
                    <input  type="number" 
                            value={imputValue}
                            onKeyPress={( e ) => {
                                if (!/[0-9]/.test( e.key )) {
                                  e.preventDefault();
                                }
                              }}
                            onChange={ ( e ) => this.updateInputValue( e.target.value ) } 
                            className="form-control form-control-sm" 
                            id="formGroupMaxIntValueInput"></input>
                    <br/>
                </div>                
                <div className="form-group" align="left">
                    <label for="formGroupTextValueOutput" className="form-label">Here are the prime numbers from your integer value:</label>
                    <input type="text" className="form-control" value={returnValue} id="formGroupTextValueOutput" disabled></input>
                    <br/>
                </div>
                <button type="button" onClick={()=>this.handleCalculateClick()} className="btn btn-dark">Compute Primes</button>
                </div>
                <div className="col-sm-4"/>                
            </div>            
        )
    }
}
export default QuestionOneComponent;
