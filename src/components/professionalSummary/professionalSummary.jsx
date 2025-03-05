const ProfessionalSummary = ({ professionalSummary }) => {
  return(
	<div style={{height: "100%"}}>
	  <h2 className="text-5xl">{ professionalSummary.title }</h2>
	  <p className="text-3xl">{ professionalSummary.content }</p>
	</div>
  )
}

export default ProfessionalSummary;
