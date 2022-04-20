import { useEffect, useState } from 'react'
import axios from "axios"

export default function useBookSearch(query, pageNum) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
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
      setBooks(prevBooks => {
        return [...new Set([...prevBooks, res.data.docs.map(b => {
          // console.log(b.title)
          return b.title
        })])]
      })
      //handles data

    }).catch(e => {

      //cancels request if user is currently typing
      if (axios.isCancel(e)) return

    })
    return () => cancel()
  }, [query, pageNum])
  return null
}