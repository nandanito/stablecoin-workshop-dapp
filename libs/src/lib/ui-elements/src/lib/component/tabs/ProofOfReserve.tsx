'use client'
export function ProofOfReserve() {
  return (
    <>
      <div className="subheading">
        <h2>PROOF OF RESERVE :</h2>
      </div>
      <ul className="feed-address">
        <li>
          <p>
            Do you want to integrate oracle for the<br></br> feed
            address?
          </p>
        </li>
        <li>
          {/* toggle button should be here start */}
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          {/* toggle button end */}
        </li>
      </ul>
      {/* this div need to toggle */}
      <div className="form-group feed-address feed-box">
        <label htmlFor="address">
          Oracle Feed Address <i className="imp">*</i>
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          width={400}
          required
        />
      </div>
      {/* end this div */}

      <div className="btn-botm-wrap">
        <button type="submit" className="backbtn">
          <img src="../imgs/back-icon.svg" alt="" /> Go Back
        </button>
        <button type="submit" className="nextbtn">
          Next Step <img src="../imgs/next.svg" alt="" />
        </button>
      </div>
    </>
  );
}

