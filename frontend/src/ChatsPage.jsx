import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('4796565f-3f7d-4ad9-936e-54b6d7b5d8b4', 
    props.user.username,
 props.user.secret
);
    return (<div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
    )
}

export default ChatsPage