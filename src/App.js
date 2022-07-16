import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="center">
      <div className="container">
        <Navbar />
        <Hero />
        <div className="slider">
          <Card
            img="img1.png"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life lessons with Katie Zaferes"
            price={136}
          />
          <Card
            img="img2.png"
            rating="4.8"
            reviewCount={2}
            country="USA"
            title="Learn wedding photography"
            price={15}
          />
          <Card
            img="img3.png"
            rating="5.0"
            reviewCount={2}
            country="USA"
            title="Group Mountain Biking"
            price={15}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
