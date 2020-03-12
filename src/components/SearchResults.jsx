import React from 'react'

function SearchResults(props) {
    // const vertDiv = {display:'flex', flexDirection:'column'} as a way to make a resuable styling
    const {results, handleNextPageClick, handleBackPageClick} = props 
        // is the same as 
        //function SearchResults({results, handleNextPageClick, handleBackPageClick}) {
    // const resultsLinks = results.map((result, index)=>{
    //     return (
    //         <ul  key={index}>
    //             <li><a href={"https://en.wikipedia.org/wiki/"+ result.title} target="_blank" rel="noopener noreferrer">{result.title}</a></li>
    //         </ul>
    //      )
    // })
    const resultsLinks = results.map(getResultsLinks)

        return (
        <div className='searchResults-container'>
            <button onClick={handleBackPageClick}>Previous Page</button>
            <button onClick={handleNextPageClick}>Next Page</button>
            {resultsLinks}
        </div>
    )
}
export default SearchResults

function getResultsLinks(result, index) {
    return (
        <ul key={index} >
            <li><a href={"https://en.wikipedia.org/wiki/"+ result.title} target="_blank" rel="noopener noreferrer">{result.title}</a></li>
        </ul>
     )
}
