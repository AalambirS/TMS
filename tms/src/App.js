
import './App.css';
import Header from './Header';
import Loadboard from './pages/Loadboard';
import Sidebar from './Sidebar';
import Drivers from './pages/Drivers';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/loadboard' element={<Loadboard />}/>
        <Route path='/drivers' element={<Drivers />}/>

      {/* Table header */}
      {/* LoadBoard */}

      </Routes>
      
    </div>
  );
}

export default App;
