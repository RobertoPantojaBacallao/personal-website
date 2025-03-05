import { Container, Row, Col } from 'reactstrap';
import "./ScrollArea.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../index.css"

const scrollToClassName = (className) => {
  document.documentElement.style.scrollBehavior = "smooth";
  const element = document.getElementById(className)

  element.scrollIntoView({ behavior: "smooth" })
}

const ScrollArea = (props) => {
  return (
	<div className="flex flex-row h-100 w-100 gap-x-40 justify-center py-24">
	  <div className="flex flex-col justify-center text-center gap-y-20">
		  {props.sections.map( section =>
			<div className='w-96' key={section.title}>
			  <p className="hover-underline-middle hover:scale-110 transition duration-300 active:scale-90" key={section.title} onClick={() => scrollToClassName(section.title)}>
				{section.title}
			  </p>
			</div> )}
	  </div>
	  <div className="flex flex-col overflow-y-scroll gap-y-20 hidden-scrollbar">
		{ props.sections.map( section => {
		  return (
			<section id={section.title} className='flex flex-col gap-y-10' key={section.title}>
			  <h2 className="self-center text-8xl">{section.title}</h2>
				{section.content.map(content => <section key={content.key}>{content}</section>)}
			</section>
		  )
		}) }
	  </div>
	</div>
  )
{/*	<Container className="wrapper">
	  <Row>
		<Col xs="4" className="text-center">
		  <div className="vertical-center">
			{props.sections.map( section => <div key={section.title}><p className="hover-underline-middle text-violet-500" key={section.title} onClick={() => scrollToClassName(section.title)}>{section.title}</p></div> )}
		  </div>
		</Col>
		<Col>
			{ props.sections.map( section => {
			  return (
				<section className={section.title} key={section.title}>
				  <h2 style={{textAlign: "center"}}>{section.title}</h2>
					{section.content.map(content => <section key={content.key}>{content}</section>)}
				</section>
			  )
			}) }
		</Col>
	  </Row>
	</Container>
  */}
//	  <div className="scroller">
//		{props.sections.map( section => {
//		  return (
//			<section key={section.content.key}>
//			  { section.content }
//			</section>
//		  )
//		})}
//	  </div>
//  )
}

export default ScrollArea;
