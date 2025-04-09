import EducationDisplay from "../components/EducationDisplay/EducationDisplay"
import JobDisplay from "../components/JobDisplay/JobDisplay"
import ScrollArea from "../components/ScrollArea/ScrollArea"
import resumeInfo from "../assets/resumeInfo.json"
import ProfessionalSummary from "../components/professionalSummary/professionalSummary"
const Work = (props) => {

  const { professionalSummary, workExperience, education } = resumeInfo

  console.log(resumeInfo);

  const sections = [{
	"title": professionalSummary.sectionTitle,
	"content": [<ProfessionalSummary key={professionalSummary.content.title} professionalSummary={professionalSummary.content} />]
  }].concat({
	"title": workExperience.sectionTitle,
	"content": workExperience.content.map( job => {
	  return (
		<JobDisplay key={job.company + "_" + job.title} job={job} />
	  )
  })}).concat({
	"title": education.sectionTitle,
	"content": education.content.map( education => {
	return (
	  <EducationDisplay key={education.university + "_" + education.degree} education={education}/>
	)
  })})

  return (
	<div className="h-100 px-40">
	  <ScrollArea sections={sections} />
	</div>
  )
}

export default Work;
