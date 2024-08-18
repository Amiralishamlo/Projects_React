function Message({ icon, text, children }) {
    return (
        <h2 style={{ color: "red" }} >{icon} {text} - {children} </h2>
    )
}

export default Message
