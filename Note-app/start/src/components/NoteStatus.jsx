import Message from "./Message";
function NoteStatus({ notes }) {

    const allNotes = notes.length;
    const completedNote = notes.filter((n) => n.Completed).length;
    const openNote = allNotes - completedNote;

    if (!allNotes) return <Message icon={"🔔"} text={"No Notes has already been added"} >this is children...</Message>;

    return (
        <ul className="note-status">
            <li>
                All <span>{allNotes}</span>
            </li>
            <li>
                Completed <span>{completedNote}</span>
            </li>
            <li>
                Open <span>{openNote}</span>
            </li>
        </ul>
    );
}

export default NoteStatus;
