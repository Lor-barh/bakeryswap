import React from 'react'
import { useMoralis } from 'react-moralis'

export const Connectwallet = () => {


    // const {isAuthenticated, authenticate} = useMoralis();

    // const walletConnectAuth = async () => {
    //     try{
    //         await authenticate(
    //             {
    //                 provider : "walletconnect",
    //                 signingMessage : "Auth Required"
    //             }
    //         )
    //     } catch(e) {
    //         console.log(e);
    //     }
    // }

    // if(!isAuthenticated){

        return (
            <div>
                <button className='connect-btn'> 
            <p className='connect-wallet'>Connect Wallet</p>
            </button>
            </div>
          )

//     } else {
//         return (
//             <div>
//                 <button className='connect-btn'>
//             <p className='connect-wallet'>Withdraw</p>
//             </button>
//             </div>
//           )
//     }
 
}
