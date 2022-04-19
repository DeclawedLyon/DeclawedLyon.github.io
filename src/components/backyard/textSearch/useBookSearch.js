import { useEffect, useState } from 'react'
import axios from "axios"

export default function useBookSearch(query, pageNum) {

  //useEffect makes axios request each time the query OR
  //pageNum is updated.
  useEffect(() => {
    
    let cancel;
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: {q: query, page: pageNum},

      // cancelToken allows axios to cancel a previous
      // http request IF conditions are met
      cancelToken: new axios.CancelToken(c => cancel = c)

    }).then(res => {

      //handles data
      console.log(res.data)

    }).catch(e => {

      //cancels request if user is currently typing
      if (axios.isCancel(e)) return

    })
    return () => cancel()
  }, [query, pageNum])
  return null
}