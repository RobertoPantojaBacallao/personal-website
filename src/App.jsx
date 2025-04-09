import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from "./pages/Contact"
import Work from "./pages/Work"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import TreeVisualizer from "./pages/Projects/TreeVisualizer"
import Header from "./components/Header/Header.jsx"
import "./App.css"

function App() {
  return (
    <div className="grid grid-rows-10 w-screen h-screen bg-zinc-900 text-white">
	  <div className="row-span-1 drop-shadow-lg">
		<Header />
	  </div>
	  <div className="row-span-9 overflow-scroll hide-scrollbar py-5">
		<BrowserRouter>
		  <Routes>
			<Route path="contact" element={<Contact />}/>
			<Route path="work" element={<Work />}/>
			<Route path="projects" element={<Projects />}/>
			<Route path="projects/tree_visualizer" element={<TreeVisualizer />} />
			<Route path="" element={<Home />}/>
		  </Routes>
		</BrowserRouter>
	  </div>
    </div>
  )
}

export default App
