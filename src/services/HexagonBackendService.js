import axios from "axios";

const HEXAGON_API_BASE_URL = "http://localhost:8080/hexagon";

class HexagonBackendService {

    getEratosthenesCalculation(inputValue){
        return axios.get(HEXAGON_API_BASE_URL + '/eratosthenesCalculation/' + inputValue);
    }

    getAllEmployeesTable(){
        return axios.get(HEXAGON_API_BASE_URL + '/employeesTable');
    }

    getAllPositionsTable(){
        return axios.get(HEXAGON_API_BASE_URL + '/positionsTable');
    }

    getAllEmployeesJoined(){
        return axios.get(HEXAGON_API_BASE_URL + '/employeesJoined');
    }
}

export default new HexagonBackendService()

