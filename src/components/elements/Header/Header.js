import React from 'react';




const Header = () => {


  var headerBody = {
    width: '100%',
    height: 'auto',
    background: '#1c1c1c',
    padding: '0px 20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
  }

  var bothContent = {
    maxWidth: 1280,
    minHeight: 120,
    height: 'auto',
    padding: '20px 0px'

  }

    return(
        <div className="rmdb-header" style={headerBody}>
          <div className="rmdb-header-content" style={bothContent}>
            <img className="movie-logo" src="./images/reactMovie_logo.png" atl="rmdb-logo" />
            <img className="tmdb-logo" src="./images/tmdb_logo.png" atl="tmdb-logo" />
          </div>
        </div>
    )
}


export default Header;
