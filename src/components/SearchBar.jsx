import React, {useState} from 'react'
import Dropdown from './Dropdown'

function SearchBar(props) {
    const { searchValue, handleInputChange, handleSearchClick, handleKeyPress } = props
    const [selectedItem, setselectedItem] = useState('Select Something')

    return (
        <div className='searchBar-container' onKeyUp={handleKeyPress}>
            <input className='searchBar-input' value={searchValue} onChange={handleInputChange} />
            <Dropdown selectedItem={selectedItem} setselectedItem={setselectedItem} >
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