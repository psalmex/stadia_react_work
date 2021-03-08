
import './App.css';
import Nav from './component/Nav';
// import Button from './component/Button';
import Stadia from './component/Stadia';
import Header from './component/Header';
import students from './data';


const App = () => {

  return (
    <>
      <Header />
      <Nav />
      {/* <Button text={'iClick'}/> */}
      <Stadia list={students} />
    </>
  );
}

export default App;
