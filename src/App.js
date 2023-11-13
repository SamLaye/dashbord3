import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BiChat, BiFile, BiGrid, BiMessage } from "react-icons/bi"
import './App.css';
import Sidebar from "./Sidebar";
import Header from "./Header";
import Corps from "./Corps";

function App() {

  const menuItems = [
    {icon: <BiGrid />, item: "overview"}, 
    {icon: <BiFile />, item: "project"}, 
    {icon: <BiMessage />, item: "meeting"}, 
    {icon: <BiMessage />, item: "custumers"},  
    {icon: <BiMessage />, item: "tickets"}, 
    {icon: <BiChat />, item: "message"}, 
    {icon: <BiMessage />, item: "custumers"}, 
    {icon: <BiMessage />, item: "profile"}
    ]

  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-3 col-md-2 h-100 position-fixed bg-white" id="sidebar">
          <Sidebar menuItems = {menuItems}/>
        </div>  
        <div className="container col-9 col-md-10 offset-3 offset-md-2">
          <Header />
          <div className="container mt-3" id='corps'>
            <Corps />
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
