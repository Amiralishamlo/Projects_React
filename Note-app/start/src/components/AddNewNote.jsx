import { useState } from "react";

function AddNewNote({ onAddNote }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) return null;

        const newNote = {
            title,
            description,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString(),
        };

        onAddNote(newNote);
        setTitle("");
        setDescription("");
    };

    return (
        <div className="add-new-note">
            <h2>✏️Add new Note</h2>
            <form className="note-form" onSubmit={handlerSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="text-field" placeholder="Note Title ..." />
                <input value={description} onChange={(x) => setDescription(x.target.value)} type="text" className="text-field" placeholder="Note Description ..." />
                <button type="submit" className="btn btn--primary">Add new Note</button>
            </form>
        </div>
    )
}

export default AddNewNote
