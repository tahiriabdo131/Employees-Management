import React, { useState, useEffect } from 'react'
import './EmployeeList.css'
import EmployeeItem from './EmployeeItem'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees } from '../../actions/employeeActions'

const EmployeeList = () => {

    
    //get the data from the Reducer
    let employees = useSelector(state => state.employeeReducer.employees)
    
    useEffect(() => {
        //Add id to employees
        let id = 0
        employees && employees.map(emp => {
            emp.id = ++id;
            emp.isChecked = false
        });
    }, [employees])

    /*
    let [employees, setEmployees] = useState([
        { id: 1, name: "Abdelali TAHIRI", email: "tahiriabdo131@gmail.com", address: "al fajr bloc D, casablanca, Maroc", isChecked: false },
        { id: 2, name: "Anas Barik", email: "anas.barik@gmail.com", address: "Boustan, El Jadida, Maroc", isChecked: true },
        { id: 3, name: "Mehdi Melh", email: "mehdi.melh@gmail.com", address: "Dreoua, casablanca, Maroc", isChecked: false },
    ])
    */

    //checkAll
    let [checkAll, setCheckAll] = useState(false);

    //update in employees
    let [updateEmployees, setUpdateEmployees] = useState(false)

    //Check One 
    const handleCheckOne = (e) => {
        let listEmployees = employees
        listEmployees.forEach(emp => {
            if (emp.id == e.target.value) {emp.isChecked = e.target.checked}
        })
        employees = listEmployees
        setUpdateEmployees(true)
        
    }

    //Check All
    const handleCheckAll = (e) => {
        let listEmployees = employees
        //Checked
        if(e.target.checked === true){
            setCheckAll(true)
            listEmployees.forEach(emp => emp.isChecked = true)
        }
        //Not Checked
        else {
            setCheckAll(false)
            listEmployees.forEach(emp => emp.isChecked = false)
        }
        employees = listEmployees
        setUpdateEmployees(true)
    }

    //Dispatch
    const dispatch = useDispatch()
    
    useEffect(() => {
        //Get Employees
        dispatch(getEmployees())

        //When we check all the checkbox check the AllCheckbox please
        let foundFalse = employees.find(emp => emp.isChecked == false);

        //if there is a checke and unchecked checkbox deselect the allcheckbox
        let foundTrue = employees.find(emp => emp.isChecked == true);
        if(foundFalse && foundTrue){
            setCheckAll(false)
        }

        if(!foundTrue){
            setCheckAll(false)
        }

        if(!foundFalse){
            setCheckAll(true)
        }

        setUpdateEmployees(false)
    }, [dispatch, updateEmployees])

    return (
        <div>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <h2 style={{ textAlign: "center" }}>List of Employees</h2>
                        <br></br>
                        <br></br>
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Employees</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>
                                    <a className="btn btn-info"><i className="fa fa-file-excel-o"></i> <span>Export</span></a>
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Employee</span></a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll" onClick={handleCheckAll} checked={checkAll} onChange={e => null}/>
                                            <label htmlFor="selectAll" />
                                        </span>
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees && employees.map(employee =>
                                        (<EmployeeItem key={employee.id} employee={employee} checkeFromChild={handleCheckOne}/>)
                                    )
                                }
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#">Previous</a></li>
                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" className="page-link">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-success" defaultValue="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-info" defaultValue="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Delete Modal HTML */}
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeList
