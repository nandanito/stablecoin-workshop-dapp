'use client'
export function Review() {
  return (
    <>
      <div className="subheading">
        <h2>STABLE COIN REVIEW :</h2>
      </div>

      <ul className="review-area">
        <li>
          <div className="review-box">
            <h3>Stable Coin Details :</h3>
            <div className="review-info">
              <label htmlFor="">Stable Coin Details :</label>
              <span>UnityCoin</span>
            </div>
            <div className="review-info">
              <label htmlFor="">Coin Symbol:</label>
              <span>Unity</span>
            </div>
            <div className="review-info">
              <label htmlFor="">Decimals :</label>
              <span>6</span>
            </div>
          </div>
        </li>
        <li>
          <div className="review-box">
            <h3>Stable Coin Supply Details :</h3>
            <div className="review-info">
              <label htmlFor="">Initial Supply :</label>
              <span>10000</span>
            </div>
            <div className="review-info">
              <label htmlFor="">Supply Type:</label>
              <span>Finite</span>
            </div>
            <div className="review-info">
              <label htmlFor="">Max Supply :</label>
              <span>84</span>
            </div>
          </div>
        </li>
        <li>
          <div className="review-box">
            <h3>Permission Management Details :</h3>
            <p className="wallet-address-list">Wallet Address</p>
            <div className="review-info">
              <label htmlFor="">Cash In:</label>
              <div className="hash-tag">
                <span>0xf7a30...57730</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
            <div className="review-info">
              <label htmlFor="">Burn:</label>
              <div className="hash-tag">
                <span>0xf7a30...57730</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
            <div className="review-info">
              <label htmlFor="">Wipe :</label>
              <div className="hash-tag">
                <span>0xf7a30...57730</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
            <div className="review-info">
              <label htmlFor="">Pause :</label>
              <div className="hash-tag">
                <span>0xf7a30...57730</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="review-box">
            <h3>Proof Of Reserve Details :</h3>
            <div className="review-info">
              <label htmlFor="">Oracle Feed Address:</label>
              <div className="hash-tag">
                <span>0xf7a30...57730</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="btn-botm-wrap">
        <button type="submit" className="backbtn">
          <img src="../imgs/back-icon.svg" alt="" /> Go Back
        </button>
        <button type="submit" className="nextbtn">
          Create an Account
          <img src="../imgs/next.svg" alt="" />
        </button>
      </div>
    </>
  );
}

