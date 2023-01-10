const { ethers } = require("ethers");  //using node js which provides us environment to run javascript code

//Connecting to Ethereum: RPC through third-party web services (INFURA).
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/53d89ed4810b48f5b6dd34278411a096`); //Infura mainnet link ; mainnet link 

//Querying the Blockchain:
// Look up the current block number:
const queryBlockchain = async () => {
    block = await provider.getBlockNumber(); //reading block number of current block
    console.log(`Current block number : ${block}`);

    // Get the balance of an account (by address or ENS name, if supported by network)
    balance = await provider.getBalance("0xdefe33795803f2353c69fd8cdb432f9d5cee6762");
    //To convert BigNumber into readable form in ethers:
    const balanceEthr = ethers.utils.formatEther(balance);
    console.log(`Account balance in ether : ${balanceEthr}`);

    //In wei : 
    const BalanceWei = ethers.utils.parseEther("3.704885270029428298");
    console.log(`Account balance in wei : ${BalanceWei}`);



}
queryBlockchain();
//To run : type : node <current file name> (readBlockchain) : node readBlockchain

//Varify block number form "Etherscan" website


//0x567ef173fd8d7d218b0bfc4cedf1b8c4d272961c
//copy contract address and "ABI and create new file "
