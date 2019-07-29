import React, { Component } from "react";
import EventList from "./EventList";

export default class App extends Component {
  render(){
    var name = "Wei Wei";
    return (
      <EventList name={name}/>
    );
  }
}
