import Data from "./components/Data";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
   <Sidebar/>
   <Header/>
   <Data/>
    </div>
  );
}

export default App;
