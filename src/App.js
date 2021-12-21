import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Payments from 'pages/Payments/Payments.js';
import './App.css';

function App() {
  return (
    <div style={{height:'100%',width:'100%',position:'relative'}}>
      <Header/>
      <Sidebar />
      <Payments />
    </div>
  );
}

export default App;
