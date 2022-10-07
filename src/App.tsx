import './App.css'

function App() {
    return (
        <div className="app">
            <div className="header">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt=""/>
                <h3>Programming life</h3>
                <button>Login</button>
            </div>
            <div className="nav">
                <ul>
                    <li><a href="/personal_info">Personal info</a></li>
                    <li><a href="/friends">Friends</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/messages">Messages</a></li>
                </ul>
            </div>
            <div className="content">
                <div className="aboutMe">
                    <img src="https://avatars.githubusercontent.com/u/78753207?v=4" alt=""/>
                    <div>
                        <h3>My name is Abzal Suan</h3>
                        <p>I am front-end developer!</p>
                    </div>
                </div>
                <div className="education">
                    <h3>Moscow Polytechnic University 2017-2021</h3>
                    <p>Electrical engineering</p>
                </div>
                <div className="work">
                    <h3>Jusan Bank 2022-present</h3>
                    <p>Middle Front-end dev.</p>
                </div>
            </div>
        </div>
    )
}

export default App
