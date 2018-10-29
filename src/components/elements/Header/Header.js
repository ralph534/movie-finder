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
    padding: '20px 0px',
    margin: '0px auto',
    boxSizing: 'border-box',
    overFlow: 'hidden',

  }

  var logo = {
     width: 300,
     marginTop: 20,
     float:'left',
  }

  var greenLogo = {
    width: 150,
    marginTop: 15,
    float: 'right',
  }

    return(
        <div className="rmdb-header" style={headerBody}>
          <div className="rmdb-header-content" style={bothContent}>
            <a href="https://www.google.com"><img className="movie-logo" src="./images/reactMovie_logo.png" atl="rmdb-logo" style={logo}/></a>
            <img className="tmdb-logo" src="./images/tmdb_logo.png" atl="tmdb-logo" style={greenLogo}/>
          </div>
        </div>
    )
}


export default Header;
