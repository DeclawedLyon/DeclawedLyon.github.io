import React, { useState, useRef, forwardRef, useCallback } from "react"
import BookCard from "./BookCard";
import useBookSearch from './useBookSearch'

export default function BookSearch(props) {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const {
    books,
    error,
    loading,
    hasMore
  } = useBookSearch(query, pageNum);

  const observer = useRef()
  const lastBookElement = useCallback(reactNode => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entriesArray => {

    })
    // ----- !! MUST FIX !! -----
    // if (reactNode) observer.current.observe(reactNode)
    // ----- !! MUST FIX !! -----

    // the reactNode is being passed in from the BookSearch components
    // forwardRef prop. Need to learn how forwardRefs work because
    // the ref is currently changing the ref variable 
    // from:
    //   <div>{props.title}</div>
    // into:
    //   a react component. 

    // Either I need to STOP this conversion 
    // (i think it's converted during jsx stage??)
    //  OR 
    //    I need to learn how to add an intersection observer 
    //    onto a react element 
    //  OR 
    //    i need to learn how to add an intersection observer
    //    onto a react component itself. Currently I get the error:
    //      TypeError: Failed to execute 'observe' on 'IntersectionObserver': parameter 1 is not of type 'Element'.
    //    when i try to add to react component.      
    
    console.log(reactNode)
  }, [loading, hasMore])
  
  // when user types into text search input field, function sets
  // the query and pageNum state vars and then makes a search
  // request (found in useBookSearch hook) using those vars

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNum(1);
  }
  
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
