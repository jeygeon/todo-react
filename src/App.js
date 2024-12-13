import './css/reset.css'
import './App.css'
import Header from "./component/header/Header";
import Body from './component/body/Body';
import Footer from './component/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;