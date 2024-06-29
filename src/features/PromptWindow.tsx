import { useEffect, useRef, useState } from "react"
import { ChatWindow } from "~features/ChatWindow";

type Props = {
    inputElement: React.RefObject<Element>,
    setWindow: React.Dispatch<React.SetStateAction<boolean>>
}

export const PromptWindow = (props: Props) => {
    const [prompt, setPrompt] = useState("");
    const [generated, setGenerated] = useState(false);
    const response = useRef<string>("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.")

    const innerRef = useRef(null);

    const changeHandler = (event) => {
        setPrompt(event.target.value);
        setGenerated(false);
    }

    const generatehandler = () => {
        setGenerated(true);
    }

    const insertHandler = () => {
        const element = props.inputElement.current
        const placeholder = document.querySelector(".msg-form__placeholder");
        (placeholder as HTMLElement).dataset["placeholder"] = ""
        const p_element = element.querySelector("p")
        p_element.innerHTML = response.current;
    }


    const closeHandler = (e) => {
        if (!innerRef.current.contains(e.target)) {
            props.setWindow(false)
        }
    }


    return (
        <div onClick={closeHandler} className="fixed top-0 left-0 w-full h-full bg-stone-500 bg-opacity-50">
            <div className="relative w-full h-full">
                <div className="fixed bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-3xl" ref={innerRef} >
                    <div className="flex relative flex-col justify-center items-end p-4 rounded-lg transition-all border-none gap-2
      shadow-lg hover:shadow-md w-full bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900">
                        {generated && <ChatWindow prompt={String(prompt)} response={response.current} />}
                        <input type="text" placeholder="Your Prompt" value={prompt} onChange={changeHandler} className="min-h-8 w-full outline-none px-4 py-2 rounded-lg focus:outline-none border border-gray-400 text-gray-500 bg-inherit"></input>
                        <div className="flex gap-2 justify-end">
                            {generated && <button
                                onClick={insertHandler}
                                type="button"
                                className="flex flex-row items-center px-4 py-2 rounded-lg transition-all shadow-lg hover:shadow-md active:scale-105 border border-gray-500 text-gray-500">
                                <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px"><rect fill="none" height="18px" width="18px" /><path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" /></svg>
                                <span className="inline-flex items-center justify-center font-medium rounded-full">
                                    Insert
                                </span>
                            </button>}
                            <button
                                onClick={generatehandler}
                                type="button"
                                className="flex flex-row items-center px-4 py-2 rounded-lg transition-all border-none shadow-lg hover:shadow-md active:scale-105 bg-blue-500 hover:bg-blue-600 text-white">
                                <span className="inline-flex items-center justify-center font-medium rounded-full">
                                    {generated ? <><svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F3F3F3"><path d="M.01 0h24v24h-24V0z" fill="none" /><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" /></svg><span className="ml-2">Regenerate</span></> : <><svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F3F3F3"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" /></svg><span className="ml-2">Generate</span></>}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
