type Props = {
    message: string,
    sender: 'user' | 'backend'
}

export const ChatBubble = (props: Props) => {

    if (props.sender === 'user') {
        return (
            <div className="flex justify-end">
                <span className="max-w-xl text-2xl w-full bg-gray-200 text-gray-500 p-4 rounded-lg text-wrap break-words overflow-hidden">
                    {props.message}
                </span>
            </div>
        )
    }

    if (props.sender === 'backend') {
        return (
            <div className="flex justify-start">
                <span className="max-w-xl text-2xl w-full bg-blue-200 text-gray-500 p-4 rounded-lg text-wrap break-words overflow-hidden">
                    {props.message}
                </span>
            </div>
        )
    }

}