import React, {Component} from 'react';
import {API_KEY, API_URL, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';



class Home extends Component {

  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: '',
    counter: 0
  }


  componentDidMount(){
    this.setState({
      loading: true
    });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&lanuage-en-US&page=1`;
    this.fetchitems(endpoint);
  }

  fetchitems = (endpoint) => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      this.setState({
        movies: [...this.state.movies, ...result.results],
        heroImage: this.state.heroImage || result.results[0],
        loading: false,
        currentPage: result.page,
        totalPages: result.total_pages
      })

    })

  }

  clickButton = () => {

    let copyCounter = this.state.counter
    copyCounter += 1
    console.log(copyCounter + ' click')
    this.setState({
      counter: copyCounter
    })
  }



  render(){
    return(
      <div>
        <HeroImage />
        <SearchBar />
        <FourColGrid />
        <Spinner />
        <LoadMoreBtn />
        {this.state.counter} click
          <button onClick={this.clickButton}>Wow A button</button>
      </div>
    )
  }
}

export default Home;
