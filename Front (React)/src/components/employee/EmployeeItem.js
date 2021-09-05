import React from 'react'

const EmployeeItem = (props) => {
    let employee = props.employee
    
    //Communication between this component child (EmployeeItem) and the component parent (EmployeeList)
    const handleCheckOneFromChild = (e) => {
        props.checkeFromChild(e)
    }

    return (
        <tr>
            <td>
                <span className="custom-checkbox">
                    <input type="checkbox" value={employee.id} onClick={handleCheckOneFromChild} checked={employee.isChecked} onChange={e => null}/>
                    <label htmlFor="" />
                </span>
            </td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
            </td>
        </tr>
    )
}
export default EmployeeItem
