import { useState, useEffect } from "react";
import TreeNode from "./Node";

const TreeRow = ({nodeValues}) => {
  return (
	<div className="flex flex-row gap-2 w-full justify-evenly">
	  {nodeValues.map((nv) => <TreeNode key={nv} val={nv} />)}
	</div>
  )
}

const Tree = () => {

  const [tree, setTree] = useState([])
  const [treeRows, setTreeRows] = useState([])

  const updateTree = (newTree) => {
	try {
	  let treeArray = JSON.parse(newTree)

	  setTree(treeArray)
	} catch {
	  return
	}
  }

  const mapTree = (treeArray) => {

	let rowSize = 1
	let i = 0

	let rows = [];

	setTreeRows(rows)

	console.log(rows)

	while(i < treeArray.length) {
	  while(treeArray.length < i + rowSize) {
		console.log("HERE")
		treeArray.push(null)
	  }

	  rows.push(
		<TreeRow nodeValues={treeArray.slice(i, i + rowSize)}/>
	  )
	  i += rowSize
	  rowSize *= 2
	}

	console.log(rows)

	setTreeRows(rows)

	return (
	  <div className="flex flex-col w-full gap-2 gap-y-20 self-center justify-center">
		{rows.map(r => r)}
	  </div>
	)
  }

  useEffect(() => {
	mapTree(tree)
  }, [tree]);

  return (
	<div className="flex flex-row h-full w-full justify-center self-center">
	  <div className="flex flex-col h-full w-full gap-2 self-center justify-center">
		<input onChange={(e) => updateTree(e.target.value)} />
		<TreeNode val={1} left={<TreeNode val={2} left={<TreeNode val={4} />} right={<TreeNode val={5} />} />} right={<TreeNode val={3} />} />
	  </div>
	</div>
  )
}

export default Tree;
