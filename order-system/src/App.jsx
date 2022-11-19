import Header from './components/Header';
import Routes from './routes';
import './styles/app.scss';

function App() {
  return (
    <div className="os__layout">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
