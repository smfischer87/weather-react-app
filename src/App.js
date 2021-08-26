import './App.css';
import Search from "./Search";
import Temperature from "./Temperature";


function App() {
  return (
    <div className="App">
     <div class="container">
        <div class="card">
          <div class="card-body">
            <Search />
            <Temperature />
          </div>
        </div>
        <footer>Coded by Susan Fischer, and is <a href="https://github.com/smfischer87/weather-react-app">open-sourced</a>.
            </footer>
      </div>
    </div>
  );
}



export default App;
