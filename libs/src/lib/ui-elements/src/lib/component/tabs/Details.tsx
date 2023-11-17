'use client'
export function Details() {
  return (
    <>
      <div className="form">
        <div className="row">
          <div className="col-4">
            <div className="subheading">
              <h2>STABLE COIN DETAILS :</h2>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="name">
                  Stable Coin Name <i className="imp">*</i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="symbol">
                  Coin Symbol <i className="imp">*</i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="symbol"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="decimals">
                  Decimals <i className="imp">*</i>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="decimals"
                  required
                />
              </div>
            </form>
          </div>

          <div className="col-4">
            <div className="subheading">
              <h2>STABLE COIN SUPPLY DETAILS :</h2>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="supply">
                  Initial Supply <i className="imp">*</i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="supply"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="supply">
                  Initial Supply <i className="imp">*</i>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={""}
                >
                  <option value="">Select Supply Type</option>
                  <option value="1">Finite</option>
                  <option value="2">Infinite</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="supply">Max Supply </label>
                <input
                  type="text"
                  className="form-control"
                  id="supply"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="btn-botm-wrap">
        <button type="submit" className="nextbtn" onClick={() => handleNext()}>
          Next Step <img src="../imgs/next.svg" alt="" />
        </button>
      </div>
    </>
  );
}