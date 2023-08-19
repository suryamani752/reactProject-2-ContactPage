import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <main className="main_container">
          <Contact />
          <ContactForm />
        </main>
      </div>
    </>
  );
}

export default App;
