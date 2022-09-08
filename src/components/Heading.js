import React from 'react'

const Heading = ({ todo }) => {
  return (
    <>
      <div style={{ fontSize: "2rem" }}>
        <div >
          <h1 >Welcome to Todo Application</h1>
        </div>
      </div>
      <div className="img_contain">
        <figure>
          <img src={todo} alt="todo-logo" />
          <figcaption style={{ position: "relative", bottom: ".4rem" }}>Add tasks in the list</figcaption>
        </figure>
      </div>

    </>
  )
}

export default Heading
