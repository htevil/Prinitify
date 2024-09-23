import Header from "./component/Header";
import Footer from "./component/Footer";
import Content1 from "./component/Main/content1";
import Content2 from "./component/Main/content2";
import Content3 from "./component/Main/content3";
import Content4 from "./component/Main/content4";
import Content5 from "./component/Main/content5";

function App() {
  return (
    <div className="App">
      <Header/>
      <Content1/>
      <Content2/>
      <Content3/>
      <Content4/>
      <Content5/>
      <Footer/>
    </div>
  );
}

export default App;
