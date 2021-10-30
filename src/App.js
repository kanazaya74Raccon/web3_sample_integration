import {Component} from 'react';
import Web3 from 'web3';
import './App.css';
class App extends Component {

  TOKEN_ADDRESS = "0x33947eeb13f016d9eeb50cfda1af16569203685d";
  TOKEN_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"onOwnershipTransferred","type":"event"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numTokensSellToAddToLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operationWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reservedWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxAmount","type":"uint256"}],"name":"setMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operationWallet","type":"address"}],"name":"setOperationgWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_reservedWallet","type":"address"}],"name":"setReservedWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newThresholdPercent","type":"uint256"}],"name":"setTierFiveThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newThresholdPercent","type":"uint256"}],"name":"setTierFourThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newThresholdPercent","type":"uint256"}],"name":"setTierOneThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newThresholdPercent","type":"uint256"}],"name":"setTierThreeThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newThresholdPercent","type":"uint256"}],"name":"setTierTwoThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tierFiveThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tierFourThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tierOneThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tierThreeThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tierTwoThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
  chainId = 97; // test net
  decimal = 9;

  web3 = undefined;
  tokenContract = undefined;

  currentAddr = "";
  shortAddr = "";

  constructor(props){
    super(props)
    this.state = {
      address: '',
      amount: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.onClickSend = this.onClickSend.bind(this);
    this.connectWallet = this.connectWallet.bind(this);
  }

  async componentDidMount() {
    // await this.connectWeb3();
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async connectWallet() {
    if (window.ethereum) {
      this.web3 = new Web3(window.ethereum)
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        let accounts = await window.ethereum.request({ method: 'eth_accounts' })
        this.currentAddr = accounts[0];
        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        });

        console.log(this.currentAddr);

        await this.runAPP();

        return
      } 
      catch (error) {
        console.error(error)
      }
    }
  }

  async runAPP() {
    this.currNetworkID = await this.web3.eth.net.getId()
    console.log("NetworkId = " + this.currNetworkID);
    if (this.currNetworkID == this.chainId) {
      this.tokenContract = await new this.web3.eth.Contract(this.TOKEN_ABI, this.TOKEN_ADDRESS);
    } else {
      // if (window.ethereum) {
      //   const data = [{
      //     chainId: '0x38', //mainnet
      //     //chainId: '0x61',
      //     chainName: 'Binance Smart Chain',
      //     nativeCurrency: {
      //       name: 'BNB',
      //       symbol: 'BNB',
      //       decimals: 18
      //     },
      //     rpcUrls: ['https://bsc-dataseed.binance.org/'],
      //     blockExplorerUrls: ['https://bscscan.com/'],
      //   }]

      //   /* eslint-disable */
      //   const tx = await window.ethereum.request({ method: 'wallet_addEthereumChain', params: data }).catch()
      //   if (tx) {
      //     console.log(tx)
      //   }
      // }
    }
  }
  
  async onClickSend() {
    let allowance = false;
    // console.log(this.state.address, this.state.amount)
    if (this.tokenContract != undefined && this.currentAddr != null) {
      await this.tokenContract.methods.allowance(this.currentAddr, this.TOKEN_ADDRESS).call().then(allow => {
        if (allow == 0) {
          allowance = true;
          console.log("Yes")
        } else {
          allowance = false;
          console.log("No")
        }
      })

      if (allowance == true) {
        const toWei = parseFloat(this.state.amount) * 1e9;
        console.log(toWei)

        try {
          const res = await this.tokenContract.methods.transfer(  
              this.state.address, 
              toWei)
              .send({
                  from: this.currentAddr,
                  // nonce: this.web3_read.utils.toHex(rsvVal.nonce),
                  // gasLimit: this.web3_read.utils.toHex(4000000),
                  // gasPrice: this.web3_read.utils.toHex(5000000000)
              });
          console.log(res);
          console.log(res.transactionHash);
        }
        catch (e) {
            console.log(e);
        }
      }
      else {
        alert("Not allowed yet!")
      }
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={this.handleChange} name="address" value={this.state.address} placeholder="recepeint_address" style={{width:'300px'}}/>
          <input type="text" onChange={this.handleChange} name="amount" value={this.state.amount} placeholder="amount" style={{width:'300px', marginTop:'30px'}}/>
          <button style={{marginTop: '30px'}} onClick={this.connectWallet}>connect wallet</button>
          <button style={{marginTop: '30px'}} onClick={this.onClickSend}>send</button>
        </header>
      </div>
    );
  }
}

export default App;
