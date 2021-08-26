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
      </div>
    </div>
  );
}



export default App;
