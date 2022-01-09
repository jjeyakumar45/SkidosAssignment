import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import WhySkidos from './components/whyskidos';
import SkidosFeatures from './components/skidosfeatures';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <WhySkidos />
        <SkidosFeatures />
        <Footer />
    </div>
  );
}

export default App;
