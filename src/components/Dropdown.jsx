import React, { useState } from 'react' 

const getListStyles = (open) => {
  return {
    ...ddContainer,
    color:'salmon',
    border: '1px solid black',
    display: open ? 'block' :'none',
  }
}
const ddHeader = {
  padding:'2px',
  border: '1px solid black',
  borderRadius:'5px',
  backgroundColor:'darkGrey',
}
const ddContainer = {
  display:'flex',
  flexDirection:'column',
}



function Dropdown (props,setselectedItem, selectedItem) {

  const [isOpen, setIsOpen] = useState(false) //setting the state as low as possible!

  const handleDropdownClick=()=> {
    setIsOpen(!isOpen) //only works for BOOLEAN 
  }
  const handleItemClick = (e) => {
    setselectedItem(e.target.innerText)
    handleDropdownClick() //this will make it so that after the selectedITem state has changed to whichever item was clicked, the menu will disappear 
  }

  const listItems = props.children.map(getClickableChildren(handleItemClick))
  return (
    <div style={ddContainer}>
      <div onClick={handleDropdownClick} style={ddHeader}>
        {selectedItem}
      </div>
      <div style={getListStyles(isOpen)}>
        {listItems}
      </div>
    </div>
  )
}

export default Dropdown

function getClickableChildren (clickHandler) {
  return function(child) {
    return (
      <div onClick={clickHandler}>
        {child}
      </div>
    )
  }
}


// !! // can turn anything into a boolean!!