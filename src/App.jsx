import "./App.css";
import Calender from "./components/calender/Calender";
import ElementClickCalender from "./components/calender/ElementClickCalender";
import FloatingCalender from "./components/calender/FloatingCalender";

function App() {
  return (
    <>
      <h1 className=" font-bold text-center text-[80px]">
        Cal.com
      </h1>
      <h4 className=" font-semibold text-center text-[30px]">3 types of embedding</h4>
      <Calender />
      <div className="flex justify-center">
        <ElementClickCalender />
      </div>

      <FloatingCalender />
    </>
  );
}

export default App;
