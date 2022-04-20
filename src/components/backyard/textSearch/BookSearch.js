import React, { useState } from "react"
import BookCard from "./BookCard";
import useBookSearch from './useBookSearch'

export default function BookSearch(props) {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);
  
  // when user types into text search input field, function sets
  // the query and pageNum state vars and then makes a search
  // request (found in useBookSearch hook) using those vars

  const handleChange = (e) => {
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
      <input type={'text'} onChange={e => handleChange(e)}></input>
      {books ? books.map(book => {
        return (
          <BookCard title={book} key={book}/>
        )
      }) : ''}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error...'}</div>
    </>
  )
}
// props [query, pageNum]