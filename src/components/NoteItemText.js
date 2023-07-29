import NoteItemTitle from "./NoteItemTitle";
import NoteItemBody from "./NoteItemBody";


function NoteItemText({ title, body, createdAt }) {
  return (
    <div className="note-item__text">
      <NoteItemTitle title={title} />
      <NoteItemBody desc={body} createdAt={createdAt} />
    </div>
  );
}

export default NoteItemText;
