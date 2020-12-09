import React from 'react';
import Note from '../Components/Note';


class NotesContainer extends React.Component {

    apiResponse = () => {
        return [{ id: 1, content: "First Note" }, { id: 2, content: "Second Note" }, { id: 3, content: "Third Note" }, { id: 4, content: "Fourth Note" }]
    }

    apiArray = () => { 
        // console.log(this.apiResponse())
        return this.apiResponse().map(noteEl => <Note note = {noteEl} key = {noteEl.id}/>)
    }

    render() {

        return (
            <ul>
                {this.apiArray()}
            </ul>
        )
    }

}

export default NotesContainer;

