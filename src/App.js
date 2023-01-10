import './App.css';
import { useEffect } from 'react';
const { ethers } = require("ethers");
function App() {
  const walletAddr = "0x567ef173fd8d7d218b0bfc4cedf1b8c4d272961c"; //contract address 
  const walletABI = [  //It helps us intracting with Contract 
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "sendEtherToUser",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setEtherContract",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_num",
          "type": "uint256"
        }
      ],
      "name": "setValue",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "accountBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  //Connecting to Ethereum: MetaMask
  useEffect(() => {
    const WriteContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // MetaMask requires requesting permission to connect users accounts
      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      const walletContract = new ethers.Contract(walletAddr, walletABI, signer) //In order to interact with the contract we need "contract class"
       await walletContract.setValue(80);  //now go to interaction and check num value 


      // await walletContract.setEtherContract({value : ethers.utils.parseEther("0.1")});  

      await walletContract.sendEtherToUser("0x98D11c1ae3Df1CB167353413C6f474BCD146699B", { value: ethers.utils.parseEther("0.0005")}); 
    }
    //0.2543 - 0.1 + gas ammount = 

    WriteContract();
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;

//Question : Before we were using infura to interact with our smart contract , but now we are not using infura , so what is that bridge which is heping us to interact with the smart contract:

//Answer : Metamask : Actually metamask also use infura : go to seeting and networks , click on goerelu , and see RPC URL 