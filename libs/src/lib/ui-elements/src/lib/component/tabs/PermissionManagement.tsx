'use client'
export function PermissionManagement() {
  return (
    <>
      <div className="subheading">
        <h2>PERMISSION MANAGEMENT :</h2>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <ul className="box-area">
            <li>Cash</li>
            <li>
              <div className="wallet-info">
                <label htmlFor="">Wallet Address</label>
                <div className="token-area">
                  <input type="text" />
                  <button className="copybtn">Copy</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-6 mb-4">
          <ul className="box-area">
            <li>Burn</li>
            <li>
              <div className="wallet-info">
                <label htmlFor="">Wallet Address</label>
                <div className="token-area">
                  <input type="text" />
                  <button className="copybtn">Copy</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-6 mb-4">
          <ul className="box-area">
            <li>Wipe</li>
            <li>
              <div className="wallet-info">
                <label htmlFor="">Wallet Address</label>
                <div className="token-area">
                  <input type="text" />
                  <button className="copybtn">Copy</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-6 mb-4">
          <ul className="box-area">
            <li>Pause</li>
            <li>
              <div className="wallet-info">
                <label htmlFor="">Wallet Address</label>
                <div className="token-area">
                  <input type="text" />
                  <button className="copybtn">Copy</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
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