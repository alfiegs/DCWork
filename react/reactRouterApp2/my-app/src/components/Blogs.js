import React from 'react'

export default (props) => {
  return (
    <div>
      Blogs
      <br />
    {props.match.params.blogID}
    <br />
    {props.location.pathname}
    </div>
  )
}
