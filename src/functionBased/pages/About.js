import React from "react"
import {Link, Route, Routes} from "react-router-dom";
import SinglePage from "./SinglePage"
import TodoContainer from "../components/TodoContainer";

const About = () => {

   const aboutData = [
      {
         slug: "about-app",
         title: "About the App",
         description:
            "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
      },
      {
         slug: "about-author",
         title: "About the Author",
         description:
            "This app was developed by Ender Culha, backend developer and Frontend learner. Contact enderculha[at]gmail.com.",
      },
   ];
   return (<div className="about__content">
         <ul className="about__list">
            <li>
               <Link to="about-app">About App</Link>
            </li>
            <li>
               <Link to="about-author">About Author</Link>
            </li>
         </ul>
      <Routes>
      <Route path=":slug" element={<SinglePage aboutData={aboutData}/>}>
      </Route>
      </Routes>
      </div>)
}
export default About