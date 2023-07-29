import React from 'react';
import NoteItem from './NoteItem.js';

class NoteList extends React.Component {
    render() {
        return this.props.notes.length > 0 ? (
            <div className="notes-list">
                {
                    this.props.notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={this.props.onDelete}
                            onActive={this.props.onActive}
                            onArchive={this.props.onArchive}
                            {...note}
                        />
                    ))
                }
            </div>
        ) : (
            <p className="notes-list__empty-message">Catatan kosong</p>
        )
        
    }
}

export default NoteList;