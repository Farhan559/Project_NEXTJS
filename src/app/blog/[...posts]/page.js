'use client'
import React from "react"

const posts = ({params}) => {
    const unWrappedParams = React.use(params);
    return (
      <>
        <h3>Blog : {unWrappedParams?.posts[0]}</h3>
        <h3>Post : {unWrappedParams?.posts[1]}</h3>
      </>
    )
  }
  
  export default posts
  