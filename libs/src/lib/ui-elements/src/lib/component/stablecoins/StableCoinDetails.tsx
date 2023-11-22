'use client';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContractRead } from 'wagmi';
import { stablecoiFactoryAbi } from '../../../../../../abis/stablecoinFactory';


/* eslint-disable-next-line */
export interface CoinDetails {}
export function StableCoinDetails(props: CoinDetails) {
  const [coins,setCoins] = useState([]);
  const [selectedCoinAddress,setSelectedCoinAddress] = useState();
  const [selectedCoinDetails,setSelectedCoinDetails] = useState({});
  const { data, isError, isLoading } = useContractRead({
    address: process.env.NEXT_PUBLIC_FACTORY_CONTRACT_ADDRESS,
    abi: stablecoiFactoryAbi,
    functionName: 'getAllStableCoins',
  })

  const { data:coinDetails, isError : cdError, isLoading:cdIsLoading } = useContractRead({
    address: process.env.NEXT_PUBLIC_FACTORY_CONTRACT_ADDRESS,
    abi: stablecoiFactoryAbi,
    functionName: 'getStablecoinDetails',
    args: [
      selectedCoinAddress
    ]
  })
  
  useEffect(() => {    
    if(data?.length > 0){      
      setCoins(data);      
    }
  },[data])
  useEffect(() => {  
    
    if(coinDetails){       
      setSelectedCoinDetails(coinDetails)
    }
  },[coinDetails])
const getStablecoinDetails = (ele :any) => {  
  setSelectedCoinAddress(ele.target.value);
}
  return (
        <>
         <div className="col-4 col-md-4">
            <div >
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => getStablecoinDetails(e)}
              >
                <option selected>Select Stable Coin</option>
                {coins.map((address:string) => {
                  return (<option value={address.coinAddress}>{address.name } - {address.symbol}</option>)
                  })
                }
              </select>
            </div>
          </div>
          {coinDetails &&  
            <div className="row review-details">
              <div className='col-md-4 review-area'>
                <div className="review-box">
                  <h3>Stable Coin Details :</h3>
                  <div className="review-info">
                    <label htmlFor="">Stable Coin Details :</label>
                    <span>{coinDetails?.name}</span>
                  </div>
                  <div className="review-info">
                    <label htmlFor="">Coin Symbol:</label>
                    <span>{coinDetails?.symbol}</span>
                  </div>
                  <div className="review-info">
                    <label htmlFor="">Decimals :</label>
                    <span>{coinDetails?.decimal}</span>
                  </div>
                </div>
              </div>
              <div className='col-md-4 review-area'>
                <div className="review-box">
                  <h3>Stable Coin Supply Details :</h3>
                  <div className="review-info">
                    <label htmlFor="">Initial Supply :</label>
                    <span>{coinDetails?.initialSupply ? Number(coinDetails?.initialSupply) : ''}</span>
                  </div>
                  <div className="review-info">
                    <label htmlFor="">Supply Type:</label>
                    <span>{coinDetails?.maxSupply == 0 ? 'Infinite' : 'Finite'}</span>
                  </div>
                  {coinDetails?.maxSupply != 0 &&
                    <div className="review-info">
                      <label htmlFor="">Max Supply :</label>
                      <span>{coinDetails?.maxSupply ? Number(coinDetails?.maxSupply) : ''}</span>
                    </div>
                  }                
                </div>
              </div>
              <div className='col-md-4 review-area'>
                <div className="review-box">
                  <h3>Permission Management Details :</h3>
                  <p className="wallet-address-list">Wallet Address</p>

                  <div className="review-info">
                    <label htmlFor="">Cash In:</label>
                    <div className="hash-tag">
                      <span>{coinDetails?.minter}</span>{' '}
                      <button className="copybtn">Copy</button>
                    </div>
                  </div>
                  <div className="review-info">
                    <label htmlFor="">Burn:</label>
                    <div className="hash-tag">
                      <span>{coinDetails?.burner}</span>{' '}
                      <button className="copybtn">Copy</button>
                    </div>
                  </div>
                  <div className="review-info">
                    <label htmlFor="">Default Admin :</label>
                    <div className="hash-tag">
                      <span>{coinDetails?.defaultAdmin}</span>{' '}
                      <button className="copybtn">Copy</button>
                    </div>
                  </div>
                  <div className="review-info">
                    <label htmlFor="">Pause :</label>
                    <div className="hash-tag">
                      <span>{coinDetails?.pauser}</span>{' '}
                      <button className="copybtn">Copy</button>
                    </div>
                  </div>
                </div>
                </div>
              <div className='col-md-4 review-area'>
                <div className="review-box">
                  <h3>Proof Of Reserve Details :</h3>
                  <div className="review-info">
                    <label htmlFor="">Oracle Feed Address:</label>
                    <div className="hash-tag">
                      <span>{coinDetails?.feedAddress}</span>{' '}
                      <button className="copybtn">Copy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </>
  );
}