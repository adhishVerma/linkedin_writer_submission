import { ChatBubble } from "~features/ChatBubble";

interface TypeProps {
    prompt: string;
    response: string;
}

export const ChatWindow = (props: TypeProps) => {


    return (
        <div className="w-full">
            <div className="flex flex-col transition-all border-none gap-4 w-full">
                <ChatBubble message={props.prompt} sender="user" />
                <ChatBubble message={props.response} sender="backend" />
            </div>
        </div>
    )
}
