import { FiArrowDownCircle } from "react-icons/fi";
import { IconContext } from "react-icons";
import ProfilePicture from "../assets/profile.jpeg";

const Home = (props) => {
	return (
		<div className="flex flex-row h-full justify-center self-center">
			<div className="flex flex-col w-3/5 self-center justify-center gap-y-10 px-20">
				<div className="flex flex-col self-center">
					<div className="flex flex-row pb-10 self-center justify-evenly gap-x-10 items-start">
						<div className="flex flex-col self-center basis-1/3">
							<img style={{"clip-path":"circle()", "max-width": "100%"}}src={ProfilePicture} alt="pfp"/>
						</div>
						<div className="flex basis-2/3 flex-col self-center">
							<h1 className="text-8xl fade-up">Roberto Pantoja</h1>
							<h2 className="text-4xl fade-up font-thin">Software Engineer</h2>
						</div>
					</div>
					<p className="fade-up">
						I’m a passionate Software Engineer with an interest in full-stack development and machine learning. My work focuses on creating scalable solutions and optimizing systems to tackle complex challenges. Currently, I’m expanding my expertise through a Master’s in Computer Science while continuing to work on innovative projects that drive real-world impact. This site is a window into my journey, showcasing my projects, insights, and the evolving landscape of technology.
						<br /><br />Feel free to explore and connect — I'm always eager to discuss new ideas!
					</p>
				</div>
					{/*<div className="flex flex-col justify-end">
					<IconContext.Provider value={{size: "100"}}>
					<FiArrowDownCircle className="fade-up delay self-center transition-all duration-300 ease-out hover:text-zinc-600 active:translate-y-5 hover:cursor-pointer" />
					</IconContext.Provider>
					</div>
					*/}
			</div>
		</div>
	)
}

export default Home;
