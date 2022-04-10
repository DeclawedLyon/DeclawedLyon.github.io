import React from "react";
import { useState } from "react";

export const StateContext = React.createContext();

export default function StateProvider(props) {
  const [state, setState] = useState({
    test: 'test works',
    isLoggedIn: true,
    sideBarIsOpen: false
  });

  const changeMenuState = () => {
    console.log('yeehaw')
    console.log(`state before: ${state.sideBarIsOpen}`)
    if (state.sideBarIsOpen === true) {
      setState(prev => ({
        ...prev,
        sideBarIsOpen: false
      }))
    }
    else if (state.sideBarIsOpen === false) {
      setState(prev => ({
        ...prev,
        sideBarIsOpen: true
      }))
    }
    console.log(`state after: ${state.sideBarIsOpen}`)
  };

  const providerData = {
    state,
    // list of functions to export
    changeMenuState,
  };

  return (
    <StateContext.Provider value={providerData}>
      {props.children}
    </StateContext.Provider>
  )
}

