import React from 'react';
import Navbar from './Navbar';
import NoteInput from './NoteInput';
import {getInitialData, showFormattedDate} from '../utils/index'
import NoteList from './NoteList';


class NoteApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            search:  ""
        }

        this.onDelete = this.onDelete.bind(this);
        this.onArchive = this.onArchive.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDelete(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    onArchive(id) {
      const notes = this.state.notes.map(note => note.id === id ? {...note, archived : !note.archived} : note);
      this.setState({ notes });
  }

    onSearchHandler(event) {
      this.setState(() => {
          return {
              search: event.target.value
          };
      });
  }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: +new Date(),
                archived: false,
              }
            ]
          }
        });
      }



    render() {
      const notes = this.state.notes;
      const search = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.search.toLowerCase()));

        return (
          <>
           <Navbar searchText={this.state.search} onSearch = {this.onSearchHandler} />
           <div className='note-app__body'>
               
               <NoteInput addNote = {this.onAddNoteHandler} />
               <h2>Daftar Catatan</h2>
               {search.length > 0 ? <NoteList notes={notes} onDelete={this.onDelete} onArchive={this.onArchiveHandler} /> : <p className="notes-list__empty-message">Tidak Ada catatan</p>}
           </div>

          
          </>
          
        )
    }
}

export default NoteApp;