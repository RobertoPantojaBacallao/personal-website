import { Container, Row, Col } from 'reactstrap';
import "./ScrollSnap.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const scroll = (className) => {
  const element = document.getElementsByClassName(className)[0]

  element.scrollIntoView()
}

const ScrollSnap = (props) => {
  return (
	<Container>
	  <Row>
		<Col xs="4" className="text-center">
		  {props.sections.map( section => <p className="underline-animation" key={section.title} onClick={() => scroll(section.title)}>{section.title}</p> )}
		</Col>
		<Col>
		  <div className="scroller">
			{ props.sections.map( section => {
			  return (
				<section className={section.title} key={section.title}>
				  <h2 style={{textAlign: "center"}}>{section.title}</h2>
				  <div className="scroller">
					{section.content.map(content => <section key={content.key}>{content}</section>)}
				  </div>
				</section>
			  )
			}) }
		  </div>
		</Col>
	  </Row>
	</Container>
  )
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

export default ScrollSnap;
