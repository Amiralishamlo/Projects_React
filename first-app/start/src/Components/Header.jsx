const courseStatus = ['All', 'Active', 'Completed', 'Upcoming'];

function Header() {
    return (
        <div>
            <h1>My Course (3)</h1>
            <div className="course-status">{courseStatus.map((t) => (<div key={t} className="active">{t}</div>))}
            </div>
        </div>
    );
}

export default Header;