import "./EducationDisplay.css"

const EducationDisplay = ({ education }) => {

  return (
	<div className="flex flex-col">
	  <h3 className="text-5xl flex flex-row justify-between">{education.university} <span>{education.startDate} - {education.endDate}</span></h3>
	  <p className="text-3xl">{education.degree} in {education.major}</p>
	</div>
)
}

export default EducationDisplay;
