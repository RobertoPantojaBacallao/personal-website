// import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"

const Header = (props) => {
  const navItems = [
	{
	  name: "Projects",
	  link: "/projects"
	},
	{
	  name: "Work",
	  link: "/work"
	},
	{
	  name: "Contact",
	  link: "/contact"
	},
  ]

  return (
	<header className="flex flex-row items-center h-100 px-40 border-b-2 border-b-white">
	  <div className="flex flex-row grow items-center justify-start">
		<h1 className="hover-underline-left text-3xl active:scale-90 transition-all duration-300 ease-in-out" id="hover">
		  <a className="hover:text-white" href="/">
			R<span className="hide">oberto</span>
			P<span className="hide">antoja</span>
		  </a>
		</h1>
	  </div>
	  <div className="flex flex-row grow justify-end gap-x-28">
		{navItems.map( item => 
		  <div className="flex hover-underline-middle transition duration-300 ease-in-out hover:scale-110 active:scale-90" href={item.link} key={item.name}>
			<a href={item.link} className="text-white hover:text-black visited:text-black font-normal">
			  <h1 href={item.link} className="text-2xl">
				{item.name}
			  </h1>
			</a>
		  </div>
		)}
	  </div>
	</header>
  )
	{/*	<Navbar className="navbar place-content-center">
		<NavbarBrand href="/" className="container mx-auto">
		  <h3 id="hover" className="text-3xl font-bold hover-underline-left">
			R<span className="hide">oberto </span>
			P<span className="hide">antoja</span>
		  </h3>
		</NavbarBrand>
	  <Nav>
		{navItems.map( item => 
		  <NavItem className="NavItem hover-underline-middle" key={item.name}>
			<NavLink href={item.link} style={{color: "black", fontSize: "x-large"}}>
			  {item.name}
		  	</NavLink>
		  </NavItem>
		)}
	  </Nav>
	</Navbar> */}
}

export default Header;
