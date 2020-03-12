import React from 'react'

function Link({title}){
  return <a key={title} href="/">{title}</a>
}

export default Link