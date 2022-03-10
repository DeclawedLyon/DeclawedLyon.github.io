import React from "react";
import { useState, useEffect } from "react";

export const stateContext = React.createContext();

export default function StateProvider(props) {
  const [state, setState] = useState({
    test: 'test works',
    isLoggedIn: true
  });

  const providerData = {
    state,
    // list of functions to export
  }

  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  )
}

