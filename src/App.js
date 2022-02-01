import "./App.css";
import datas from "./assets/datas/datas.json";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <img src="/799px-Netflix_2015_logo.svg.png" alt="" className="logo" />
      {datas.map((data, index) => {
        return <Section key={index} data={data} />;
      })}
    </div>
  );
}

export default App;
