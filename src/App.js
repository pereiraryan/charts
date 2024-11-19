import "./App.css";
import Circle from "./component/Circle";
import Lines from "./component/Lines";
import ComposedBar from "./component/ComposedBar";
import HighLight from "./component/HighLight";
import SmoothLine from "./component/SmoothLine";

function App() {
  return (
    <div className="App bg-[#F3F4FF] h-[100vh] w-full">
      <h1 className="font-bold text-[32px] pt-20 mb-40">Welcome to mypulse</h1>
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-[#FFFFFF] rounded-[12px] h-[315px] w-[315px]">
          <div className="font-bold text-[22px] mt-[22px] text-[#000000] center ">
            Chart title goes here
          </div>
          <div className="center text-[16px] mb-[42px] text-[#7C828A]">15 April - 21 April</div>
          <Lines />
        </div>
        <div className="bg-[#FFFFFF] rounded-[12px] h-[315px] w-[315px]">
          <div className="font-bold text-[22px]  mt-[22px] center">Chart title</div>
          <div className="center text-[16px]  mb-[42px] text-[#7C828A]">Here go numbers XX of total XX</div>
          <Circle />
        </div>
        <div className="bg-[#FFFFFF] rounded-[12px] h-[315px] w-[315px]">
          <div className="font-bold text-[22px]  mt-[22px] center">Chart title goes here</div>
          <div className="center text-[16px]  mb-[42px] text-[#7C828A]">15 April - 21 April</div>

          <HighLight />
        </div>
        <div className="bg-[#FFFFFF] rounded-[12px] h-[315px] w-[315px]">
          <div className="font-bold text-[22px]  mt-[22px] center">Chart title goes here</div>
          <div className="center text-[16px]  mb-[42px] text-[#7C828A]">15 April - 21 April</div>

          <ComposedBar />
        </div>
        <div className="bg-[#FFFFFF] rounded-[12px] h-[315px] w-[315px]">
        <div className="font-bold text-[22px]  mt-[22px] center">Chart title goes here</div>
        <div className="center text-[16px]  mb-[42px] text-[#7C828A]">15 April - 21 April</div>
        <SmoothLine />
        </div>
      </div>
    </div>
  );
}

export default App;
