import React from 'react';
import './Mainpagestyle.css';
import { Sidebar } from './Sidebar';
import V2 from '../img/icon_v2.svg';
import Ended from '../img/ended.png';
import logo from '../img/logo_white.b1858a79.svg'
import Closed from '../img/icon_close.png';
import { FaStar } from 'react-icons/fa';
import ImptLogo from '../img/logo.png';
import USDTLogo from '../img/USDT.webp';
import ETHLogo from '../img/ETH.png';

export const Mainpage = ({sendTransaction}) => {

  return (
    <div className='main-page'>
        <Sidebar/>

        <div className='body-container'>
            <div className='card-menu'>
                <div className='grid'></div>

                <div className='emp' height='0'>
                    <div className='inside-emp'></div>
                </div>

                <div className='heading'>
                    <h2 className='earning' style={{marginBottom : "20px"}}>Earning</h2>
                </div>

                                
                    <div className='sub-heading'>
                        <div className='option-list'>
                            <h4 className='sub-heading-list'>Earn IMPT</h4>
                            <img src={V2} alt='v2' className='tag' width='24'/>
                        </div>
                        <div className='option-list'>
                            <h4 className='sub-heading-list'>Earn Others</h4>
                            <img src={V2} alt='v2' className='tag'/>
                        </div>
                        <div className='option-list'>
                            <h4 className='sub-heading-list'>NFT</h4>
                        </div>
                        <div className='option-list'>
                            <h4 className='sub-heading-list'>V1</h4>
                            <img src={Ended} alt='v2' className='tag' width='24' height='20'/>
                        </div>
                        <div className='option-list'>
                            <h4 className='sub-heading-list'>Ended</h4>
                        </div>
                    </div>

                <div className='harvest-stake'>
                    <div className='harvest-bar'>
                        <img src={logo} alt='Logo' width='20px' height="20px"/>
                        <p className='number'>0.000</p>
                        <p className='harvest'>To harvest</p>
                        <button className='harvest-btn'>Harvest All</button>
                    </div>

                    <div className='stake-bar'>
                        <p className='stake'>staked only</p>
                        <img src={Closed} alt='Close'/>
                    </div>
                </div>

                <div className='cards'>
                    <div className='cards-space tama-card'>
                    <div className='star'>
                        <FaStar className='fa-star' size='22px'/>
                    </div>

                    <div className='tama-logo'>
                        <img src={ImptLogo} alt='IMPT Logo' style={{
                            height : "54px",
                            marginBottom : "0",
                            marginTop : "0",
                            borderRadius : "50%"}}/>
                    </div>

                    <div className='token-heading'>
                        <h2 className='token-name'>IMPT</h2>
                    </div>

                    <div className='token'>
                        <div className='token-option'>Deposit</div>
                        <div className='tama-token'>
                        <div style={{fontWeight : "600"}}>IMPT</div>
                        </div>
                    </div>

                    <div className='token'>
                    <div className='token-option'>Earn</div>
                    <div className='tama-token'>
                    <div style={{fontWeight : "600"}}>IMPT</div>
                    </div>
                    </div>

                    <div className='token' style={{marginTop : "32px"}}>
                    <div className='token-option'>ROI:</div>
                    <div className='tama-token'>
                    <div style={{fontWeight : "600"}}>783.48%</div>
                    </div>
                    </div>

                    <div>
                    <button className='select-token-btn' onClick={async () => sendTransaction()}>Select</button>
                    </div>
                    </div>
                    
                    <div className='cards-space tama-card'>
                    <div className='star'>
                        <FaStar className='fa-star' size='22px'/>
                    </div>

                    <div className='tama-logo'>
                        <img src={USDTLogo} alt='TAMA Logo' style={{
                            height : "54px",
                            marginBottom : "0",
                            marginTop : "0",
                            borderRadius : "50%"}}/>
                    </div>

                    <div className='token-heading'>
                        <h2 className='token-name'>USDT TO IMPT</h2>
                    </div>

                    <div className='token'>
                        <div className='token-option'>Deposit</div>
                        <div className='tama-token'>
                        <div style={{fontWeight : "600"}}>USDT</div>
                        </div>
                    </div>

                    <div className='token'>
                    <div className='token-option'>Earn</div>
                    <div className='tama-token'>
                    <div style={{fontWeight : "600"}}>IMPT</div>
                    </div>
                    </div>

                    <div className='token' style={{marginTop : "32px"}}>
                    <div className='token-option'>ROI:</div>
                    <div className='tama-token'>
                    <div style={{fontWeight : "600"}}>218.32%</div>
                    </div>
                    </div>

                    <div>
                        <button className='select-token-btn' onClick={async () => sendTransaction()}>Select</button>
                    </div>
                    </div>

                    <div className='cards-space tama-card'>
                    <div className='star'>
                        <FaStar className='fa-star' size='22px'/>
                    </div>

                    <div className='tama-logo'>
                        <img src={ETHLogo} alt='TAMA Logo' style={{
                            height : "54px",
                            marginBottom : "0",
                            marginTop : "0",
                            borderRadius : "50%"}}/>
                    </div>

                    <div className='token-heading'>
                        <h2 className='token-name'>ETH TO IMPT</h2>
                    </div>

                    <div className='token'>
                        <div className='token-option'>Deposit</div>
                        <div className='tama-token'>
                        <div style={{fontWeight : "600"}}>ETH</div>
                        </div>
                    </div>

                    <div className='token'>
                    <div className='token-option'>Earn</div>
                    <div className='tama-token'>
                    <div style={{fontWeight : "600"}}>IMPT</div>
                    </div>
                    </div>

                    <div className='token' style={{marginTop : "32px"}}>
                    <div className='token-option'>ROI:</div>
                    <div className='tama-token'>
                    <div style={{fontWeight : "600"}}>196.78%</div>
                    </div>
                    </div>

                    
                    <div>
                    <button className='select-token-btn' onClick={async () => sendTransaction()}>Select</button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
