import SocialDisplay from "../components/SocialDisplay/SocialDisplay"
import CopyButton from "../components/CopyButton/CopyButton"

const Contact = (props) => {
	const contactInfo = {
		email: "robertopantojabacallao@gmail.com",
		phone: "+1 (786) 519-9611",
	}

	return (
		<div className="flex flex-col justify-evenly h-100">
			<h3 className="flex self-center text-5xl">Contact Me</h3>
			<div className="flex self-center w-100 h-44">
				<SocialDisplay />
			</div>
			<div className="flex text-black flex-row justify-center gap-x-10 w-100 h-44">
				{Object.keys(contactInfo).map(infoKey => {
					return (
						<CopyButton text={contactInfo[infoKey]} key={infoKey} />
					)
				})}
			</div>
		</div>
	)
}

export default Contact;
