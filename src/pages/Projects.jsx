import { IconContext } from "react-icons";
import { TbBackhoe } from "react-icons/tb"
import ProjectModal from "../components/ProjectModal/ProjectModal";
const Projects = (props) => {
  return (
	<div className="flex flex-row justify-center h-full">
	  <div className="flex flex-col h-44 self-start justify-start">
		<div className="flex flex-row gap-x-10 h-full">
		  <ProjectModal projectName={"Tree Visualizer"} path={"/projects/tree_visualizer"} />
		</div>
	{/*	<IconContext.Provider value={{size: 500}}>
	 <TbBackhoe className="self-center" />
		  <h1 className="self-center">Page Under Construction</h1>
		</IconContext.Provider>
	  */}
	  </div>
	</div>
  )
}

export default Projects;
