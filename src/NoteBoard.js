import React, { Component } from "react"
import Note from './Note'
import './NoteBoard.css'

export default class Noteboard extends Component {

  state = {
    notes: [100, 200, 300]
  }

  render = () => {

    const notes = this.state.notes

    return (
      <div className="board">
        <>
          {notes.map(id => <Note key={id} /> )}
        </>
      </div>
    )
  }
}