import React from 'react';






const ToDo = (props) => {



  return(
    <div>
      <h1>Search History</h1>
      <form>
      <input type="text" refs="name" placeholder="Search for it" />
      <button onClick={props.search}>Add To History</button>
      </form>
    </div>
  )
}





export default ToDo;
