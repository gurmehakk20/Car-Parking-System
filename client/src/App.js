import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ParkingSpace from './Components/ParkingSpace';
import SignUp from './Components/SignUp';
import Wallet from './Components/Wallet';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      {/* <ParkingSpace /> */}
      {/* <SignUp/> */}
      <Wallet/>
      <Footer />
    </div>
  );
}

export default App;
