const ProfessionalSummary = ({ professionalSummary }) => {
  return(
	<div style={{height: "100%"}}>
	  <h2 className="font-semibold text-3xl">{ professionalSummary.title }</h2>
	  <p className="text-2xl">{ professionalSummary.content }</p>
	</div>
  )
}

export default ProfessionalSummary;
