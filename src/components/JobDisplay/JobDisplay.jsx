const JobDisplay = ({ job }) => {

  return (
	<div className="flex flex-col">
	  <h3 className="font-semibold flex flex-row justify-between text-3xl w-100">
		{job.title}, {job.company}
		<span>
		  {job.startDate} - {job.endDate}
		</span>	
	  </h3>
	  <ul className="my-3">
		{job.responsibilities.map( responsibility => {
		  return (
			<li className="text-2xl my-2" key={responsibility}>{responsibility}</li>
		  )
		})}
	  </ul>
	</div>
  )
}

export default JobDisplay;
