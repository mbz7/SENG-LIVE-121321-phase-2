// Style Imports
import './App.css';

// Card Data Import
import cards from './cards';

// Child Component Imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      
      {/* Replace h1 with Component JSX */}
      <NavBar 
        isLoggedIn
      />
      
      {/* Replace h1 with Component JSX */}
      <Header 
        // { firstName: "Your", lastName: "Name" }
        firstName="Your"
        lastName="Name"
      />

      {/* Replace h1 with Component JSX */}
      <CardList cards={cards} />
    </div>
  );
}

export default App;