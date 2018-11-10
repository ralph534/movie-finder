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
    counter: 0,
    todos: []
  }


  componentDidMount(){
    this.setState({
      loading: true
    });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&lanuage-en-US&page=1`;
    this.fetchItems(endpoint);
  }

  loadMoreItem = () => {
    let endpoint = '';
    this.setState({
      loading: true
    });

    if(this.state.searchTerm === ''){
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&lanuage-en-US&page=${this.state.currentPage + 1}`;
    }else{
      endpoint = `${API_URL}search/popular?api_key=${API_KEY}&lanuage-en-US&query${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
    console.log(endpoint)
  }


  clickButton = () => {
    let copyCounter = this.state.counter
    copyCounter += 1
    this.setState({
      counter: copyCounter
    })
  }

searchHistory = (e) => {
  e.preventDefault();
  console.log('text')

}





  render(){
    return(
      <div className="rmdb-home">
        <HeroImage />
        <SearchBar />
        <FourColGrid />
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
        <ToDo
        search = {this.searchHistory}
        />
        <Spinner />
        <LoadMoreBtn />
        {this.state.counter} click
          <button onClick={this.clickButton}>Wow A button</button>
      </div>
    )
  }
}

export default Home;
