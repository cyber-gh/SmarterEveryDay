import React from 'react';
import "./style.css";
import CourseList from "./main/courses/list/CourseListView";
import NavBar from "./main/navbar/NavBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CourseDetailsView from "./main/courses/details/CourseDetailsView";


function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Router>
                    <Route exact path={"/"} component={CourseList}/>
                    <Route exact path={"/course"} component={CourseDetailsView}/>
                </Router>

            </div>
        </Router>
    );
}

export default App;
