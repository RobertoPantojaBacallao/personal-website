import { IconContext } from "react-icons"
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"

const SocialDisplay = (props) => {
  const modal_styling = "transition duration-300 ease-in-out hover:scale-110 hover:text-inherit flex h-100 w-36 bg-slate-500 justify-center rounded-lg hover:bg-slate-700 cursor-pointer active:scale-90"

  const socials = {
	linkedIn: "https://www.linkedin.com/in/roberto-pantoja-bacallao-796468217/",
	github: "https://github.com/RobertoPantojaBacallao",
	x: "https://x.com/pantojabacallao",
  }

  return (
	<div className="flex flex-row w-100 h-100 gap-x-40 justify-center">
	  <IconContext.Provider value={{size: 70}}>
		<a href={socials.github} target="_blank" rel="noopener noreferrer" className={modal_styling}>
		  <div className="flex self-center">
			<BsGithub />
		  </div>
		</a>
		<a href={socials.linkedIn} target="_blank" rel="noopener noreferrer" className={modal_styling}>
		  <div className="flex self-center">
			<BsLinkedin />
		  </div>
		</a>
		<a href={socials.x} target="_blank" rel="noopener noreferrer" className={modal_styling}>
		  <div className="flex self-center">
			<BsTwitterX />
		  </div>
		</a>
	  </IconContext.Provider>
	</div>
  )
}

export default SocialDisplay;
