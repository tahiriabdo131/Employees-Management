import './App.css';
import EmployeeList from './components/employee/EmployeeList';
import Navbar from './components/Navbar';
import { Provider } from "react-redux";
import {store} from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <EmployeeList />
      </div>
    </Provider>
  );
}

export default App;