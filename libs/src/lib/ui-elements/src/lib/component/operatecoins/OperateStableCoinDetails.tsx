'use client';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContractRead,useContractWrite,usePrepareContractWrite} from 'wagmi';
import { stablecoinAbi } from '../../../../../../abis/stablecoin';
import { stablecoiFactoryAbi } from '../../../../../../abis/stablecoinFactory';
import styles from '../../../../../../../../apps/dapp/app/operate/page.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




/* eslint-disable-next-line */
export interface CoinDetails {}
export function OperateStableCoinDetails(props: CoinDetails) {
  const [coins,setCoins] = useState([]);
  const [selectedCoinAddress,setSelectedCoinAddress] = useState();
  const [selectedCoinAddressErr,setSelectedCoinAddressErr] = useState('');  
  const [selectedCoinAddressType,setSelectedCoinAddressType] = useState('');
  const [selectedCoinAddressTypeErr,setSelectedCoinAddressTypeErr] = useState('');
  const [callFunctionName,setCallFunctionName] = useState('');
  const [amount,setAmount] = useState();
  const [address,setAddress] = useState('');
  
  const [amountErr,setAmountErr] = useState('');
  const [args,setArgs] = useState()
  const [showPopup, setShowPopup] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSelectedCoinAddress('');
    setSelectedCoinAddressType('');
    setCallFunctionName('');
    setAmount(undefined);
    setAddress('');

    
  };
  const handleShow = () => setShow(true);
  const handleSubmit = () => setShowPopup(!showPopup);

  const { data, isError, isLoading } = useContractRead({
    address:process.env.NEXT_PUBLIC_FACTORY_CONTRACT_ADDRESS,
    abi: stablecoiFactoryAbi,
    functionName: 'getAllStableCoins',
  })
  const { config ,
    error: prepareError,
    isError: isPrepareError,
    } = usePrepareContractWrite({
    address: selectedCoinAddress,
    abi: stablecoinAbi,
    functionName: callFunctionName,
    args:args,
  });


  const { data:writeData,write } = useContractWrite(config);
  const { data:readData,read } = useContractRead(config);
  
  useEffect(() => {    
    if(data && data?.length > 0){
      setCoins(data);      
    }
  },[data]) 
  useEffect(() => {    
    if(args && args?.length >= 0){
      console.log(args,callFunctionName,selectedCoinAddress);
      if(selectedCoinAddressType == 'currentsupply' || selectedCoinAddressType == 'cappedsupply' ){
        read?.();
      }else{
        write?.(); 
      }            
    }
  },[args]) 
  useEffect(() => {    
   console.log(writeData);
   if(writeData){
    handleShow();
  }
  },[writeData]) 
  useEffect(() => {    
    console.log(prepareError);   
   },[prepareError]) 
  useEffect(() => {    
    console.log(readData);
    if(readData){
      handleShow();
    }
   },[readData]) 
const updateAddressType = (ele :any) => {
  setSelectedCoinAddressType(ele.target.value);
  if(ele.target.value == 'cash'){
    setCallFunctionName('mint');    
  }
  if(ele.target.value == 'burn'){
    setCallFunctionName('burn');    
  }
  if(ele.target.value == 'pause'){
    setCallFunctionName('pause');
  }
  if(ele.target.value == 'unpause'){
    setCallFunctionName('unpause');
  }
  if(ele.target.value == 'currentsupply'){
    setCallFunctionName('totalSupply');
  }
   if(ele.target.value == 'cappedsupply'){
    setCallFunctionName('cap');
  }
}
const submitForm = () => {
  let error = 0;
  if(selectedCoinAddress == ''){
    error = 1;
    setSelectedCoinAddressErr('Please select address');
  }else{
    setSelectedCoinAddressErr('');
  }
  if(selectedCoinAddressType == ''){
    error = 1;
    setSelectedCoinAddressTypeErr('Please select type');
  }else{
    setSelectedCoinAddressTypeErr('');
    if(selectedCoinAddressType == 'burn'){
      if(amount == 0 || amount == undefined){
        error = 1;
        setAmountErr('Please enter amount')
      }
    }
  }
  if(error == 0){
    console.log(['cash','pause','unpause','currentsupply','cappedsupply'].indexOf(selectedCoinAddressType))
    if(['cash','pause','unpause','currentsupply','cappedsupply'].indexOf(selectedCoinAddressType) != -1){      
      setArgs([]);
    }
    if(selectedCoinAddressType == 'burn' || selectedCoinAddressType == 'cash'){
      let myargs = [];
      myargs.push(address);
      myargs.push(amount);      
      setArgs(myargs);
    }  

    
   /*  setTimeout(() => {
      console.log(args);
      write?.();
    }, 2000); */
    
  }
 
}
  return (
        <>
                 <div className="col-4">
            <div className={styles['operate-box']}>
            <select
                className="form-select"
                aria-label="Default select example"
                value={selectedCoinAddress}
                onChange={(e) => setSelectedCoinAddress(e.target.value)}
              >
                <option selected>Select Stable Coin</option>
                {coins.map((address:string) => {
                  return (<option value={address}>{address}</option>)
                  })
                }
              </select>
              {selectedCoinAddressErr != "" && <p>{selectedCoinAddressErr}</p> }
            </div>
            <div className={styles['operate-box']}>
              <select
                className="form-select"
                aria-label="Default select example"
                value={selectedCoinAddressType}
                onChange={(e) => updateAddressType(e)}
              >
                <option selected>Choose An Operation</option>
                <option value="cash">Mint</option>
                <option value="burn">Burn</option>
                <option value="pause">Pause</option>
                <option value="unpause">Unpause</option>                
                <option value="currentsupply">Current Supply</option>  
                <option value="cappedsupply">Capped Supply</option>  
              </select>
              {selectedCoinAddressTypeErr != "" && <p>{selectedCoinAddressTypeErr}</p> }
            </div>
            {(selectedCoinAddressType == 'cash' || selectedCoinAddressType == 'burn' )   && 
            <>
              <div className={styles['cashBox']}>
                <label>Address</label>
                <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                {amountErr != "" && <p>{amountErr}</p> }
              </div>
              <br></br>
              <div className={styles['cashBox']}>
                <label>Amount</label>
                <input type="number" name="cash" value={amount} onChange={(e) => setAmount(+e.target.value)} />
                {amountErr != "" && <p>{amountErr}</p> }
              </div>
              </>
            }
            {(selectedCoinAddressType != 'currentsupply' &&  selectedCoinAddressType != 'cappedsupply')  &&
              <div>
                <button type="button" className={styles['submitBtn']} onClick={() => submitForm()}>
                  Submit
                </button>
              </div>
            }
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {(selectedCoinAddressType != 'currentsupply' && selectedCoinAddressType != 'cappedsupply') ? '' : 'Current Supply'}</Modal.Title>
            </Modal.Header>
            {(selectedCoinAddressType == 'currentsupply' || selectedCoinAddressType == 'cappedsupply') && <Modal.Body>{Number(readData)}</Modal.Body>}
            {(selectedCoinAddressType != 'currentsupply' && selectedCoinAddressType != 'cappedsupply') && 
              <Modal.Body className='wordwrap'>{writeData?.hash}</Modal.Body>
            }
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
  );
}