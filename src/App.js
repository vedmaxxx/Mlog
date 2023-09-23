import "./App.css";
import AuthorisationForm from "./components/AuthorisationForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <AuthorisationForm />
    </div>
  );
}

export default App;
