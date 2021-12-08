// import React from 'react'
// import './homepage.css';
// // import axios from 'axios'

// const Homepage = ({ setLoginUser }) => {
//     return (
//         <div className="homepage">
//             <h1>Hello Homepage</h1>
//             <div className="button" onClick={() => setLoginUser({})} >Logout</div>
//         </div>
//     )
// }

// export default Homepage

import { useHistory } from "react-router"
import React from "react"
import "./homepage.css"

const Homepage = ({ setLoginUser }) => {
    const history = useHistory()
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={() =>
                history.push("/")} >Logout</div>
        </div >
    )
}

export default Homepage