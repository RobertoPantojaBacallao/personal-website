import { useState } from "react";
import { TbCopy, TbCheck } from "react-icons/tb";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = (text) => {
	navigator.clipboard.writeText(text)
	setCopied(true);
	setTimeout(() => setCopied(false), 1500);
  }

  return (
	<div className="flex flex-row text-white justify-around rounded-lg bg-slate-500 h-24 px-10 gap-x-10">
	  <p className="self-center">{ text }</p>
	  <button className="flex h-14 w-14 justify-center bg-zinc-900 self-center rounded-lg hover:bg-slate-600 hover:scale-110 transition-all duration-300 ease-in-out hover:border-none active:scale-90" onClick={() => handleCopy(text)}>
		{copied ? 
		  <TbCheck className="self-center" /> :
		  <TbCopy className="self-center"/>
		}
	  </button>
	</div>

  )
}

export default CopyButton;
