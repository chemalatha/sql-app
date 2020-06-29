import React,{useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
const massageData = (data)=>{
  const keys = data[0].split(',');
  const rawData = data.slice(1)
  const massagedData = rawData.map((row)=>{
      const rowData = row.split(',');
      const newRow = {};
      keys.forEach((key,index)=>{
          newRow[key] = rowData[index];
      })
      return newRow;
  })
  return massagedData;
}
const url = 'http://localhost:5000/customers';

function Main({history}) {
  const [customers,setCustomers] = useState([]);
  const getTasks = async()=>{
    const response = await Axios.get(url);
    let finalData = null;
    console.log(response.data);
    if(typeof response.data === "object"){
      finalData = massageData(response.data);
      console.log(finalData);
      setCustomers(finalData);
    }

  }
  useEffect(()=>{
    getTasks();
  },[])
  const goToDetails = (id)=>{
    history.push(`/task/${id}`)
  }
  return (
    <Container>
      <ListGroup>
        {(customers.length>0)?(customers.map((customer)=>{
          return <ListGroup.Item key={customer.AccountNum} customer={customer} >{customer.CustGroup} - {customer.Name}</ListGroup.Item>
        })):(<div>No customers Still!!!</div>)}
    </ListGroup>
    </Container>
  );
}

export default Main;

