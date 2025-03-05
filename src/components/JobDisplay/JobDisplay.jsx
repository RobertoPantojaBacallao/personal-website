const JobDisplay = ({ job }) => {

  return (
	<div className="flex flex-col">
	  <h3 className="flex flex-row justify-between text-5xl w-100">
		{job.title}, {job.company}
		<span>
		  {job.startDate} - {job.endDate}
		</span>	
	  </h3>
	  <ul className="my-5">
		{job.responsibilities.map( responsibility => {
		  return (
			<li className="text-3xl my-3" key={responsibility}>{responsibility}</li>
		  )
		})}
	  </ul>
	</div>
  )
}

export default JobDisplay;
