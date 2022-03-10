import React from "react";
import { useState, useEffect } from "react";

export const StateContext = React.createContext();

export default function StateProvider(props) {
  const [state, setState] = useState({
    test: 'test works',
    isLoggedIn: true,
    sideBarIsOpen: false
  });

  const providerData = {
    state,
    // list of functions to export
  }

  return (
    <StateContext.Provider value={providerData}>
      {props.children}
    </StateContext.Provider>
  )
}

