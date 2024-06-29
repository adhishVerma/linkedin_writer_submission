import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import type { PlasmoCSUIProps } from "plasmo"
import { useEffect, useRef, useState, type FC } from "react"
import type { PlasmoGetInlineAnchorList } from "plasmo"

import { AiButton } from "~features/AiButton"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

 
export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () =>
  document.querySelectorAll(".msg-form__contenteditable")

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}


const PlasmoOverlay : FC<PlasmoCSUIProps> = ({ anchor } : any) => {
  const inputRef = useRef<HTMLElement>(anchor.element)
  const [show, setShow] = useState(false)

  inputRef.current.onfocus = () => {
    setShow(true)
  }
  

  return (
    <div className="absolute bottom-4 right-4">
      {show && <AiButton inputElement={inputRef}/>}
    </div>
  )
}

export default PlasmoOverlay
