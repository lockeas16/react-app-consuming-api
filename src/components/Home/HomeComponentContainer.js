import React, { Component } from "react";
import axios from "axios";
import CountDown from "../common/CountDown";
import UIkit from "uikit";
import CardComponent from "../common/CardComponent";

class HomeComponentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      meta: {}
    };
  }

  componentDidMount() {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      const { info: meta, results: characters } = res.data;
      this.setState({ characters, meta });
    });
    const element = document.getElementById("homeCountDown");
    UIkit.countdown(element).start();
  }

  componentWillUnmount() {
    const element = document.getElementById("homeCountDown");
    UIkit.countdown(element).stop();
  }

  render() {
    const { characters } = this.state;
    return (
      <div>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid-match uk-child-width-1-4" uk-grid="true">
              {characters.map((character, index) => (
                <CardComponent key={index} {...character} />
              ))}
            </div>
            <div className="uk-margin uk-flex uk-flex-center">
              <CountDown />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponentContainer;