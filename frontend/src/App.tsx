import { BusinessInformation } from "./Components/BusinessInformation";
import { Poster } from "./Components/Poster";
import { Sidebar } from "./Components/Sidebar";

const App = () => {
  return (
    <div>
      <Poster />
      <div className="flex gap-5">
        <Sidebar />
        <BusinessInformation />
      </div>
    </div>
  );
};

export default App;
