import React from "react"
import {useParams} from "react-router-dom";

const SinglePage = (props) => {

   const { slug } = useParams()
   const aboutContent = props.aboutData.find(item => item.slug === slug)
   const { title, description } = aboutContent
   return (
      <div className="main__content">
         <h1>{title}</h1>
         <p>{description}</p>
      </div>
   )
}
export default SinglePage