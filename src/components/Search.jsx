import React from 'react';
import sMod from './Search.module.css';

class Search extends React.Component{
  state = {
    search: '',
    chooseBtn: 'all',
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  handleRadio = (e) => {
    this.setState(() => ({chooseBtn: e.target.value}),
     () => {this.props.movieUpdate(this.state.search, this.state.chooseBtn);})
  }

  findMovie = () => {
    this.props.movieUpdate(this.state.search, this.state.chooseBtn );
  }

  render(){
    return(
      <div className={sMod.search}>
        <div className={sMod.search__container}>
          <input type="text" name='search' value={this.state.search} onChange={this.handleChange}/>
          <button onClick={this.findMovie}>Search</button>
          <div className={sMod.allRadio}>
            <label htmlFor="allJanre">
              <input type="radio" name="chooseBtn" value='all' id="allJanre" onChange={this.handleRadio}/>All
            </label>
            <label htmlFor="seriesJanre">
              <input type="radio" name="chooseBtn" value='series' id="seriesJanre" onChange={this.handleRadio}/>Series
            </label>
            <label htmlFor="moviesJanre">
              <input type="radio" name="chooseBtn" value='movie' id="moviesJanre" onChange={this.handleRadio}/>Movies
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;