import React from 'react';
import {Link} from 'react-router-dom';




const Header = () => {


  var headerBody = {
    width: '100%',
    height: 'auto',
    background: '#101010',
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
     width: 100,
     marginTop: 1,
     float:'left',
  }

  var greenLogo = {
    width: 150,
    marginTop: 15,
    float: 'right',
  }

  var linkGroup = {
    color: 'blue',
    display: 'inline-block',
    listStyle: 'none',
    marginLeft: 190

}

    return(
        <div className="rmdb-header" style={headerBody}>
          <div className="rmdb-header-content" style={bothContent}>
            <a href="https://www.google.com"><img className="movie-logo" src="./images/hgILIL7X.jpeg" atl="rmdb-logo" style={logo}/></a>
            <img className="tmdb-logo" src="./images/tmdb_logo.png" atl="tmdb-logo" style={greenLogo}/>
          </div>
          <div className="link-groups">
          <Link to="/" style={linkGroup}> Home </Link>
          <Link to="/Staff" style={linkGroup}> Staff </Link>
          </div>
        </div>
    )
}


export default Header;
