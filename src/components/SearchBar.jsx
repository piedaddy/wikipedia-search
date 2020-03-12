import React, {useState} from 'react'
import Dropdown from './Dropdown'

function SearchBar(props) {
    const { searchValue, handleInputChange, handleSearchClick, handleKeyPress, selectedItem, setSelectedItem } = props

    // AN ALTERNATIVE, COULD BE USED BELOW INSTEAD OF THE LIST
    // const listItems = [
    //     <p>Item 1</p>,
    //     <p>Item 2</p>,
    //     <p>Item 3</p>,
    // ]
    return (
        <div className='searchBar-container' onKeyUp={handleKeyPress}>
            <input className='searchBar-input' value={searchValue} onChange={handleInputChange} />
            <Dropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem} >
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
            </Dropdown> 
            <button className='searchBar-button' onClick={handleSearchClick}>Search</button>
        </div>
    )
}

export default SearchBar
//not self closing will reesult in anything between the tags goes under props.children
//it will turn it into an array?