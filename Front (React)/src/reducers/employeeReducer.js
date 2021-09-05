import { ADD_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEE, DELETE_EMPLOYEE, GET_ONE_EMPLOYEE } from '../actions/type'

const initalState = {
    employees: [],
    oneEmployee: {}
}

export let employeeReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload.employees
            };
        case GET_ONE_EMPLOYEE:
            return null;
        case DELETE_EMPLOYEE:
            return null;
        case UPDATE_EMPLOYEE:
            return null;
        case ADD_EMPLOYEE:
            return null;
        default:
            return state;
    }
}