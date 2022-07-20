import React from "react";
import { Col,Row } from "react-bootstrap";
import {Button} from "react-bootstrap";

const App = () =>{
  const [add,hasil] = React.useState(0)
  return (
    <main className="min-vh-100 d-flex justify-content-center">
      <Row>
        <Col className="d-flex align-self-center"><Button disabled={add<1} onClick={()=>hasil(add-1)}>Kurang</Button></Col>
        <Col className="d-flex align-self-center"><h1>{add}</h1></Col>
        <Col className="d-flex align-self-center"><Button disabled={add>=10} onClick={()=>hasil(add+1)}>Tambah</Button></Col>
      </Row>
    </main>
    
)
}
export default App