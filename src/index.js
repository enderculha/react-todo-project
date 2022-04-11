import React from "react"
import ReactDOM from "react-dom"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"

//component
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"
import Navbar from "./functionBased/components/Navbar";

ReactDOM.render(
   <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
         <Navbar/>
         <Routes>
            <Route path="/" element={<TodoContainer/>}></Route>
            <Route path="/about/*" element={<About/>} component={About}></Route>
            <Route path="*" element={<NotMatch/>}></Route>
         </Routes>
      </Router>
   </React.StrictMode>,
   document.getElementById("root")
)