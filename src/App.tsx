import { useState } from "react";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import SideBar from "./components/Sidebar/SideBar.tsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <SideBar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="content">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <Main />
      </div>
    </>
  );
}

export default App;
