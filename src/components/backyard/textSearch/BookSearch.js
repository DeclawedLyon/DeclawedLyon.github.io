import React, { useState, useRef, forwardRef, useCallback } from "react"
import BookCard from "./BookCard";
import useBookSearch from './useBookSearch'

export default function BookSearch(props) {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const observer = useRef()
  const lastBookElement = useCallback(node => {
    console.log(node)
  })
  
  // when user types into text search input field, function sets
  // the query and pageNum state vars and then makes a search
  // request (found in useBookSearch hook) using those vars

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNum(1);
  }
  
  const {
    books,
    error,
    loading,
    hasMore
  } = useBookSearch(query, pageNum);

  return (
    <>
      <input type={'text'} value={query} onChange={e => handleSearch(e)}></input>
      {books ? books.map((book, i) => {
        if (i + 1 === books.length) {
          
          return <BookCard forwardRef={lastBookElement} title={book} key={book}/>
        }
        else {
          return (
          <BookCard forwardRef={lastBookElement} title={book} key={book}/>
        )}
      }) : ''}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error...'}</div>
    </>
  )
}
// props [query, pageNum]