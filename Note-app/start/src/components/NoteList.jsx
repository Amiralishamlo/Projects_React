
function NoteList({ notes, onDelete, onCompleted, sortBy }) {

  let sortedNotes = notes;
  if (sortBy === "earliest") sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  if (sortBy === "latest") sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (sortBy === "completed") sortedNotes = [...notes].sort((a, b) => Number(a.Completed) - Number(b.Completed));


  return (
    <div className="note-list">
      {
        sortedNotes.map((note) => (<NoteItem key={note.id} note={note} onDelete={onDelete} onCompleted={onCompleted} />))
      }
    </div>
  )
}

export default NoteList;


function NoteItem({ note, onDelete, onCompleted }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.Completed ? "completed " : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p style={{ color: "black" }} className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input type="checkbox" name={note.id}
            onChange={onCompleted}
            checked={note.Completed}
            value={note.id} />
        </div>
      </div>
      <span className="note-item__footer" style={{ color: "black" }}>
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </span>
    </div>
  );
}