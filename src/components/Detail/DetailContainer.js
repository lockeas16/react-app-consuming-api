import React, { Component } from "react";
import axios from "axios";

class DetailContainer extends Component {

  state = {
    character:{}
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res=>{
      const {data:character} = res;
      this.setState({character});
    })
  }

  render() {
    
    const {name} = this.state.character;
    return <h1>Detalle del personaje: {name}</h1>;
  }
}

export default DetailContainer;
