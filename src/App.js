// import { MoralisProvider } from 'react-moralis';
import './App.css';
import './components/Header';
import { Header } from './components/Header';
import { Mainpage } from './components/Mainpage';

function App() {
  return (
    <div className="App">
      {/* <MoralisProvider appId="" serverUrl= ""> */}
      <Header/>
      <Mainpage/>
      {/* </MoralisProvider> */}
    </div>
  );
}

export default App;
