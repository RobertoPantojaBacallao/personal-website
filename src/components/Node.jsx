import { Component } from "react";

class TreeNode extends Component {
  constructor(props) {
	super(props)
	this.state = {
	  value : 0,
	  left : undefined,
	  right : undefined
	}
  }

  static getDerivedStateFromProps(props) {
	return {
	  value: props.val,
	  left: props.left,
	  right: props.right,
	}
  }

  render() {
	return (
	  <div className="flex flex-col w-full gap-y-5 justify-start">
		<div className="flex flex-row rounded-full bg-white size-20 justify-center self-center">
		  <p className="self-center text-black">{this.state.value}</p>
		</div>
		<line className="fill-white stroke-white" 
		  x1={1}
		  y1={1}
		  x2={2}
		  y2={2}
		/>
		<div className="flex flex-row self-center gap-x-5">
		  <div className="flex">
			{this.state.left}
		  </div>
		  <div className="flex">
			{this.state.right}
		  </div>
		</div>
	  </div>
	)
  }

}

export default TreeNode;
