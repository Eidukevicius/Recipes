import Header from "../header/Header";
import Recipes from "../recipes/Recipes";
import Footer from "../footer/Footer";
import Section from "../section/Section";

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Recipes/>
      <Footer/>
    </div>
  );
}

export default App;
