import React from 'react';

const Suggestions = (props) => {

  if (props.array.length) {
    let array = props.array.slice(0, 3);
    return (
      <ul className="suggestionsList">
      {
        array.map((suggestion, index) => {
          return <li key={index}>{suggestion}</li>
        })
      }
      </ul>
    )
  }
  return null
}

export default Suggestions;