import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch='
const pageOffsetPrefix = '&sroffset='
function App () {
  const [ searchValue, setSearchValue ] = useState('')
  const [ searchResults , setSearchResults] = useState([])
  const [ currentOffset, setCurrentOffset] = useState(0)

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearchClick = () => { //why does this not need an event ? bc it is being said on click?
    getSearchResults()
  }

  const handleKeyPress = (e) => { //key press is an event
    if(e.key === 'Enter') getSearchResults() //this is just a way for pressing event to have the same functionality as pressing the search button
  }

  const handleNextPageClick = () => {
    setCurrentOffset(currentOffset + 10)
  }

  const handleBackPageClick = () => {
    if(currentOffset > 0){
    setCurrentOffset(currentOffset - 10)
    } 
  }

  const getSearchResults = async () => { //async sends the request straight into the QUEUE, not the STACK, so everything else on the stack can be dealt with while the QUEUE is sorting out the issue  
    //async causes the function to return a promise
    if(!searchValue) return //if they havent typed anything into the box, don't call the API
    const pageUrl = `${url}${searchValue}${pageOffsetPrefix}${currentOffset}`
    const response = await fetch(pageUrl)
    const data = await response.json() //if i dont await, they will become a pending promise it says while that promise is pending, don't execute any more code! only can move on when the promise has been fulfilled 
    setSearchResults(data.query.search)
  }

  useEffect(() => {
    console.log('current offset change', currentOffset)
    getSearchResults()
  }, [currentOffset]) //why was this imperative for it to work???
  //if no second argument, will fire on every rerender (component did mount)
  //this is kinda a way to check also, like can be used for a console.log, and becuase this is all ASYNC  we cant know if things are happening in order, so by doing the USE EFFECT it is a way if checking the value only when it has updated (if there is a second argument)

  return (
    <div className="App">
      <SearchBar
        searchValue={searchValue} //these brackets escape JSX and enter normal JS
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
        handleKeyPress={handleKeyPress}
      />
      <SearchResults results={searchResults} handleNextPageClick={handleNextPageClick} handleBackPageClick={handleBackPageClick}/>
  </div>
  );
}

export default App;
