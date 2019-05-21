import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import API from './utils/API'
import GifList from './components/GifList'

class App extends Component {
  state = {
    q: "",
    gifs: [],
    message: "Search For A Gif To Begin!"
  }

  handleInputChange = e => {
    const { name, value } = e.target
    // console.log(name, value)
    this.setState({
      [name] : value
    })
  }

  getGifs = () => {
    API.getGifs(this.state.q)
       .then(res => {
          // console.log(res)
          console.log(res.data.data)
          this.setState({ gifs: res.data.data })
       })
       .catch(() => 
          this.setState({
            gifs: [],
            message: "No Gif Found, Try a Different Query"
          })
       )
  }

  handleSubmit = e => {
    e.preventDefault()
    this.getGifs()
  }

  render() {
    return(
      <Wrapper>
        <Hero>
          <SearchBar 
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            q={this.q}
          />
        </Hero>
        <GifList 
          gifs={this.state.gifs}
          message={this.state.message}
        />
      </Wrapper>
    )
  }
}

export default App

