import "./App.css";
import Circle from "./component/Circle";
import Lines from "./component/Lines";
import ComposedBar from "./component/ComposedBar";
import HighLight from "./component/HighLight";
import SmoothLine from "./component/SmoothLine";

function App() {
  return (
    <div className="App bg-[#F3F4FF]">
      <h1 className="font-bold text-[32px] mb-10">Welcome to mypulse</h1>
      <div className="grid grid-cols-5">
        <div>
          <div className="font-bold text-[22px] center ">
            Chart title goes here
          </div>
          <div className="center text-[16px]">15 April - 21 April</div>
          <Lines />
        </div>
        <div>
          <div className="font-bold text-[22px] center">Chart title</div>
          <Circle />
        </div>
        <div>
          <div className="font-bold text-[22px] center">Chart title goes here</div>
          <div>15 April - 21 April</div>

          <HighLight />
        </div>
        <div>
          <div className="font-bold text-[22px] center">Chart title goes here</div>
          <div>15 April - 21 April</div>

          <ComposedBar />
        </div>
        <div>
        <div className="font-bold text-[22px] center">Chart title goes here</div>
        <div>15 April - 21 April</div>
        <SmoothLine />
        </div>
      </div>
    </div>
  );
}

export default App;
