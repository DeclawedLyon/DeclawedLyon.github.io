import React from 'react'

export default function BookCard(props) {
  function formatTitle(title) {
    return <div>{title}</div>
  };
  const titleElement = formatTitle(props.title);
  console.log('--' , titleElement , '--')
  // props.forwardRef(titleElement);
  props.forwardRef(<div>{props.title}</div>);
  return (
    <div>{props.title}</div>
  )
}
