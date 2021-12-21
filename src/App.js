import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Payments from 'pages/Payments/Payments.js';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Sidebar />
      <Payments />
    </div>
  );
}

export default App;
