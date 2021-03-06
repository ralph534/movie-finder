import React, {Component} from 'react';
import {API_KEY, API_URL, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import ToDo from '../elements/ToDo/ToDo';
import { Timeline } from 'react-twitter-widgets'



class Home extends Component {

  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: '',
    counter: 1,
  }


  componentDidMount(){
    this.setState({
      loading: true
    });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&lanuage-en-US&page=1`;
    this.fetchItems(endpoint);
  }



  searchItem = (searchTerm) => {
    // console.log(searchTerm)
    let endpoint = ''
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    })
    if(searchTerm === ''){
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&lanuage-en-US&page=1`;
    }else{
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language-en-US&query=${searchTerm}`;
    }
     this.fetchItems(endpoint);
  }



  loadMoreItem = () => {
    let endpoint = '';    // endpoint is an empty string as of now
    this.setState({
      loading: true
    });

    if(this.state.searchTerm === ''){  /// if there is no input then load the next page
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&lanuage-en-US&page=${this.state.currentPage + 1}`;
    }else{     /// if there is an input then render inputs page 1
      endpoint = `${API_URL}search/popular?api_key=${API_KEY}&lanuage-en-US&query${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  }



  // fetchItems = (endpoint) => {
  //   fetch(endpoint)
  //   .then(result => result.json())
  //   .then(result => {
  //     this.setState({
  //       movies: [...this.state.movies, ...result.results],
  //       heroImage: this.state.heroImage || result.results[0],
  //       loading: false,
  //       currentPage: result.page,
  //       totalPages: result.total_pages
  //     })
  //     console.log(result)
  //   })
  //   .catch(error => console.error('Error:', error))
  // }

  fetchItems = (endpoint) => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      this.setState({
        movies: [...this.state.movies, result.results],
        heroImage: this.state.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      })
      console.log(result)
    })
    .catch(error => console.log('Error:', error))
  }




  clickButton = () => {
    console.log(this.state.counter)

    let copyCounter = this.state.counter;
    copyCounter += 1;
    this.setState({
      counter: copyCounter
    })
  }







  render(){
    return(
      <div className="rmdb-home">
        {this.state.heroImage ?
        <div>
          <HeroImage
            image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
            title={this.state.heroImage.original_title}
            text={this.state.heroImage.overview}
            rate={this.state.heroImage.vote_average}
            pop={this.state.heroImage.popularity}/>
          <SearchBar
            callback={this.searchItem}/>
        </div> : null }
        <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'L_diaz146'
    }}
    options={{
      username: 'TwitterDev',
      height: '400',
      width: '400'
    }}
  />

        <Spinner />
        {this.state.counter} click
          <button onClick={this.clickButton}>Wow A button</button>
      </div>
    )
  }
}

export default Home;
