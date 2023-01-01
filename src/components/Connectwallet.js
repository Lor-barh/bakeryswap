import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { init, useConnectWallet, useWallets } from '@web3-onboard/react';
import coinsbaseModule from '@web3-onboard/coinbase';
import dcentModule from '@web3-onboard/dcent';
import walletConnectModule from '@web3-onboard/walletconnect';
import fortmaticModule from '@web3-onboard/fortmatic';
import portisModule from '@web3-onboard/portis';
// import keepkeyModule from '@web3-onboard/keepkey';





const dappId = '200f086d-6f32-44fd-a898-7835072730e9';

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


const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/<INFURA_KEY>';


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
        name: "Blocknative",
        icon: "<svg><svg/>",
        description: "Demo app for Onboard V2",
        recommendedInjectedWallets: [
          { name: "MetaMask", url: "https://metamask.io" },
          { name: "Coinbase", url: "https://wallet.coinbase.com/" },
        ],
      },
})

   

export const Connectwallet = () => {

    const [{wallet, connecting}, connect, disconnect] = useConnectWallet();

    const connectedWallets = useWallets();

    const connectWallet = async () => {
        connect();
      };

    // let ethersProvider;

    // if(wallet){
    //     ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
    // }
    

    // if(!isAuthenticated){

        return (
            <div>
                <button className='connect-btn' 
                onClick={() => connectWallet()}                
                > 
            <p className='connect-wallet'>Connect Wallet</p>
            </button>
            </div>
          )

    // } else {
    //     return (
    //         <div>
    //             <button className='connect-btn'>
    //         <p className='connect-wallet'>Withdraw</p>
    //         </button>
    //         </div>
    //       )
    // }
 
}
