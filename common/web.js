
import { convertBalanceToWei } from './function'
const Web3 = require('web3')
const RPC = 'https://rpc.testnet.tomochain.com'
const PRIVATE_KEY = '0xe7f8eb01867570cd6f3ee57b083dd0c6fd8c9568372511d520044d630ff59318'

class Web3Service {
  static async inItWeb3 () {
    const web3 = new Web3(new Web3.providers.HttpProvider(RPC))
    return web3
  }

  static async sendTransaction (from, to, value) {
    const web3 = await this.inItWeb3()
    value = web3.utils.numberToHex(convertBalanceToWei(value))
    const gasPrice = web3.utils.numberToHex(await this.getGasPrice())
    console.log({ gasPrice })
    let nonce = await web3.eth.getTransactionCount(from)
    nonce = web3.utils.numberToHex(await nonce)
    const data = {
      from,
      to,
      value,
      gasPrice,
      nonce

    }
    console.log({ data })
    const gasLimit = await this.estimateGasTxs(data)
    data.gasLimit = await web3.utils.numberToHex(gasLimit)
    delete data.from

    return new Promise(async (resolve, reject) => {
      const rawTs = await web3.eth.accounts.signTransaction(data, PRIVATE_KEY)
      web3.eth.sendSignedTransaction(rawTs.rawTransaction, (error, result) => {
        if (error) {
          console.log('error', error)
          reject(error)
        } else {
          console.log('result', result)
          resolve(result)
        }
      })
    })
  }

  static async getBalance (address) {
    const web3 = await this.inItWeb3()
    return new Promise(async (resolve, reject) => {
      const balance = await web3.eth.getBalance(address)
      const final = balance / Math.pow(10, 18)
      const temp = final.toFixed(4)
      resolve(temp)
    })
  }

  static async inItAddress () {
    const web3 = await this.inItWeb3()
    const address = await web3.eth.accounts.create()
    return address
  }

  static async getGasPrice () {
    const web3 = await this.inItWeb3()
    return new Promise((resolve, reject) => {
      const gasPrice = web3.eth.getGasPrice()
      console.log('get gasPrice in web3 ', gasPrice)
      resolve(gasPrice)
    })
  }

  static async estimateGasTxs (rawTransaction) {
    const web3 = await this.inItWeb3()
    return new Promise((resolve, reject) => {
      web3.eth.estimateGas(rawTransaction).then(res => {
        resolve(res)
      }).catch((err) => {
        console.log('Gas estimate error: ' + err)
        reject(err)
      })
    })
  }
}
export default Web3Service
