import { IconContext } from "react-icons"
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"

const SocialDisplay = ({ projectName, path }) => {
  const modal_styling = "h-full transition duration-300 ease-in-out hover:scale-110 hover:text-inherit flex h-100 w-36 bg-slate-500 justify-center rounded-lg hover:bg-slate-700 cursor-pointer active:scale-90"

  console.log(path)

  return (
	<a href={path}>
	  <div className={modal_styling}>
		<h1 className="text-lg my-2">{projectName}</h1>
	  </div>
	</a>
  )
}

export default SocialDisplay;
