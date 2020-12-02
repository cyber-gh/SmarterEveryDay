import React from 'react';
import "./style.css";
import CorseList from "./main/CourseListView";
import NavBar from "./main/components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <CorseList/>
        </div>
    );
}

export default App;
