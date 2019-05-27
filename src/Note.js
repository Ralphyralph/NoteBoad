import React, { Component } from "react"
import Draggable from "react-draggable"
import './Note.css'


export default class Note extends Component {

  state = { disabled: true }

  toggleDraggable = () =>
    this.setState({ disabled: !this.state.disabled })

  render = () => {

    const { disabled } = this.state

    return (
      <Draggable disabled={disabled} bounds="parent" >
        <div className="note-container">
          <img
            className={!disabled ? "pin-active" : "pin"}
            src="https://img.icons8.com/color/48/000000/map-pin.png"
            style={{ marginBottom: '-0.8rem', zIndex: 1, height: '2rem' }}
            draggable="false" 
            onClick={this.toggleDraggable}
          />
          <textarea></textarea>
        </div>
      </Draggable>
    )
  }
}
