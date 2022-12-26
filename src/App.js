import Form from "./Form";
import List from "./List";
import Table from "./Table";
import { useState,useEffect } from "react";
function App() {
    const [items,setItems] = useState([])
    const [reqType,setReqType] = useState('users')
    const API_URL = 'https://jsonplaceholder.typicode.com/'

    useEffect(() => {
      const fetchItems = async () => {
        try {
          const reqUrl = `${API_URL}${reqType}`
          const response = await fetch(reqUrl)
          const data = await response.json()
          setItems(data)
        } catch(err){
          console.log(err)
        }      
      }
      fetchItems()
    },[reqType])


  return (
    <div className="App">
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
