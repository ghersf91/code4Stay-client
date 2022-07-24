import './App.css';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import AppRoutes from './Routes/AppRoutes';
import UserMessage from './Components/UserMessage/UserMessage';
import MapPage from './Pages/MapPage/MapPage';


function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
      <Footer />
      <UserMessage />
    </div>
  );
}

export default App;
