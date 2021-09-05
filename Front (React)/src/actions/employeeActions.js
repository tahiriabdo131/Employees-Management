import axios from "axios";
import { API_URL } from "../config";
import { ADD_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEE, DELETE_EMPLOYEE, GET_ONE_EMPLOYEE } from './type'

//Alert to confirm actions
import toastr from "toastr";
import "toastr/build/toastr.css";

//Get All Employees
export const getEmployees = () => async(dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/employees`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //'Access-Control-Allow-Origin': true,
                //Authorization: `Bearer ${token}`,
            },
        });

        // console.log(res.data._embedded.employees[0]);
        dispatch({
            type: GET_EMPLOYEES,
            payload: res.data._embedded,
        });
    } catch (err) {
        console.log(err);
    }
}


export const addEmployee = (employee) => async(dispatch) => {}

export const getOneEmployee = (id) => async(dispatch) => {}

export const deleteEmployee = (id) => async(dispatch) => {}

export const updateEmployee = (employee) => async(dispatch) => {}