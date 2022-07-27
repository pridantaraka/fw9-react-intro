import axios from "axios";
import React from "react";
import { Component } from "react";
import {Col,Row} from "react-bootstrap"

const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character'
})

class RicknMorty extends Component{
  state = {
    courses:[]
  }

  constructor(){
    super();
    api.get('/').then(res =>{
      console.log(res.data.results)
      this.setState({ courses: res.data.results })
    })
  }
  render(){
    return(
      <main>
        <Row>
          {
            this.state.courses.map(course =>
              <Col className="m-5">
              <section className="d-flex flex-direction-center gap-5">
              <img src={course.image} alt="Pict"/>
              </section>
              <h5 className="text-center">{course.name}</h5>
              </Col>
            )}
        </Row>
      </main>
    )
  }
}

export default RicknMorty
