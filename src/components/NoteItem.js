import React from 'react';
import NoteItemTitle from './NoteItemTitle.js';
import NoteItemBody from './NoteItemBody'
import DeleteButton from './DeleteButton.js';
import NoteItemText from './NoteItemText.js';
import NoteArchiveButton from './NoteArchiveButton.js';

function NoteItem({ title, body, createdAt, id, onDelete, onArchive, isArchive }) {
    return (
        <div className="note-item">
            <div className='note-item__Text'>
            <NoteItemText title={title} body={body} createdAt={createdAt} />
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <NoteArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
            </div>
        </div>
    )
}

export default NoteItem