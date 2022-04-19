import React, { useState } from "react";
import testLogo from "../../../images/testLogo.png";

export default function SiteLoading() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <!-- Trigger/Open The Modal --> */}
      {!show && <button id="myBtn" onClick={() => setShow(true)}>Open Modal</button>}

      {/* <!-- The Modal --> */}
      {show && 
        <div id="myModal" class="loading-card">
          {/* <!-- Modal content --> */}
          <div class="loading-card-content">
            <button class="close" onClick={() => setShow(false)}>&times;</button>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      }
      {/* <img src={testLogo}></img> */}
    </>
  );
}
