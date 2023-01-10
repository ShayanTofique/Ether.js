//0x567ef173fd8d7d218b0bfc4cedf1b8c4d272961c : contract address
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/53d89ed4810b48f5b6dd34278411a096`);  //change infura link to testnet

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

const contractIntraction = async () => {
	const walletContract = new ethers.Contract(walletAddr, walletABI, provider) //In order to interact with the contract we need "contract class"

	const contractName = await walletContract.name();
	console.log(`contract name : ${ contractName}`);

	const numVal = await walletContract.getValue();
	console.log(`Num Val : ${numVal}`);

	const contractBal = await walletContract.contractBalance();
	const balanceofContract = ethers.utils.formatEther(contractBal);

	console.log(`contract Balance : ${balanceofContract}`);

	const accountBal = await walletContract.accountBalance('0x98D11c1ae3Df1CB167353413C6f474BCD146699B');
	const balanceEthr = ethers.utils.formatEther(accountBal);
	console.log(`Account Balance : ${balanceEthr}`);
}
contractIntraction();

//NOW IN ORDER TO Writing to the Blockchain WE NEED TO CONNECT TO METAMASK , FOR THAT REASON WE HAVE TO INSTALL REACT APPLICATION

//

