
import { useState,  } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import filterFactory,{ textFilter } from "react-bootstrap-table2-filter";
function App() {
  const [data] = useState([
    {
      "id": 1,
      "name": "dimpu",
      "birth": "1996", 
      "designation": "developer",

    },
    {
      "id": 2,
      "name": "abhi",
      "birth": "1997", 
      "designation": "developer",
    },
    {
      "id": 3,
      "name": "Alice",
      "birth": "1998", 
      "designation": "developer",
    },
    {
      "id": 4,
      "name": "sai",
      "birth": "1998", 
      "designation": "developer",
    },
    {
      "id": 5,
      "name": "charan",
      "birth": "1998", 
      "designation": "developer",
    },
    
    
  ]);
 
  
  const columns = [
    {
      dataField: "id",
      text: "Employee id",
      sort: true,
      
      
    },
    
     
    {
      dataField: "name",
      text: "EmployeName",
      sort: true,
      
      filter: textFilter(),
    },
    {
      dataField: "birth",
      text: "Birth",
      sort: true,
      
      filter: textFilter(),
    },
    {
      dataField: "designation",
      text: "Designation",
      sort: true,
      
    
    },

 
  ];
  return (

    <div className="App">
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        hover
        condensed
        
        filter={filterFactory()}
      />
    </div>
  );
}

export default App;