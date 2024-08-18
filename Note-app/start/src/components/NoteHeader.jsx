function NoteHeader({ notes, sortBy, onSort }) {

    return (
        <div className="note-header">
            <h1>My Notes ({notes.length})</h1>
            <select value={sortBy} onChange={onSort}>
                <option value="latest">Sort based on latest Notes</option>
                <option value="earliest">Sort based on earliest Notes</option>
                <option value="completed">Sort based on completed Notes</option>
            </select>
        </div>
    )
}

export default NoteHeader
