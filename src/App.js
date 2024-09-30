import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Form />
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
