import React,{useState, useEffect} from 'react';
import Axios from 'axios';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom';
const availableGroups = [
  "CG-B2B",
  "CG-B2C",
  "CG-INC",
  "CG-IUR",
  "CG-SER"
]
const url = 'http://localhost:5000/customers';
function AddTask({history}){
    const [name,setName] = useState('');
    const [group,setGroup] = useState(availableGroups[0]);
    const addTask = async()=>{
      console.log(group,name)
        const response = await Axios.post(url,{
          _customerCreationcontact: { customerGroup: group, custName: name }
        });
        if(response.data){
            history.push('/')
        }
      }
      const handleInputChange = (e)=>{
        setName(e.target.value);
      }
      const handleSelectChange = (e)=>{
        setGroup(e.target.value);
      }
    return (
        <Jumbotron >
            <Container>
                <Row cl>
                <Col> 
                <Row>
                <Col>Name</Col>
                <Col><input type="text" onChange={handleInputChange} value={name}/></Col>
                </Row>            
                <Row>
                <Col>Groups</Col>
                <Col><select  onClick={handleSelectChange} value={group}>
                {/* <option value={group}>{group}</option> */}
                  {
                    availableGroups.map((group)=><option value={group}>{group}</option>)
                  }
                  </select>
                  </Col>
                </Row>                
                <Row>
                <Col><Button onClick={addTask} variant="primary">Add Task</Button></Col>
                </Row>     
                </Col>
                </Row>
            </Container>
        </Jumbotron>
)
}

export default withRouter(AddTask);