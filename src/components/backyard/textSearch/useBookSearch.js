import { useEffect, useState } from 'react'
import axios from "axios"

export default function useBookSearch(query, pageNum) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  // useEffect clears array when user types so books don't append onto
  // old lists
  useEffect(() => {
    setBooks([])
  }, [query])

  //useEffect makes axios request each time the query OR
  //pageNum is updated.
  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: {q: query, page: pageNum},

      // cancelToken allows axios to cancel a previous
      // http request IF conditions are met
      cancelToken: new axios.CancelToken(c => cancel = c)

    }).then(res => {
      // console.log(res.data)
      console.log(res.data.docs)
      setBooks(prevBooks => {
        return [...new Set([...prevBooks, ...res.data.docs.map(b => {
          // console.log(b.title)
          return b.title
        })])]
      })
      if (res.data.docs.length === 0) {
        setBooks(false)
      }
      setHasMore(res.data.docs.length > 0)
      setLoading(false)
      //handles data

    }).catch(e => {

      //cancels request if user is currently typing
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNum])
  return {loading, error, books, hasMore}
}