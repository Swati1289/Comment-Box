import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <h1>Comment Box</h1>
      <Box currentUserId={1} />
    </div>
  );
}

export default App;
