import React from 'react'

export default function BookCard(props) {
  function formatTitle(title) {
    return <div>{title}</div>
  };
  const titleElement = formatTitle(props.title);
  props.forwardRef(titleElement);
  return (
    <div>{props.title}</div>
  )
}
