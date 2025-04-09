import { IconContext } from "react-icons";
import { TbBackhoe } from "react-icons/tb"
import ProjectModal from "../components/ProjectModal/ProjectModal";
const Projects = (props) => {
  return (
	<div className="flex flex-row justify-center h-full">
	  <div className="flex flex-col self-start justify-start">
		<IconContext.Provider value={{size: 500}}>
	 <TbBackhoe className="self-center" />
		  <h1 className="text-5xl self-center">Page Under Construction</h1>
		</IconContext.Provider>
	  </div>
	</div>
  )
}

export default Projects;
