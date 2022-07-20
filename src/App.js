import React from "react";
// import { Row } from "react-bootstrap";
import { Col,Row } from "react-bootstrap";

const App = () =>{
  const [add,Hasil] = React.useState(0)
React.useEffect(()=>{
    console.log(add);
  }, [add])
  return (
    <>
    <Row className="">
      <Col className="d-flex col-12 justify-content-betwen">
      <Col className="d-flex align-self-center"><button onClick={()=>Hasil(add-1)}>Kurang</button></Col>
      <Col className="d-flex align-self-center"><h1>{add}</h1></Col>
      <Col className="d-flex align-self-center"><button onClick={()=>Hasil(add+1)}>Tambah</button></Col>
      </Col>
    </Row>
    </>
)
}

// const App = ()=> {
//   // const [isShowed, toggleShow] =React.useState(true)
//   return(
//     <ol>
//       {/* {isShowed && <Series name={{episode:5}}>Text</Series>} */}

//       {/* <button onClick={()=>toggleShow(!isShowed)}></button> */}
//     </ol>
//   )
// }

export default App