import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import ChatBoxReceiver, { ChatBoxSender } from "../ChatBox";
import InputText from "../InputText";
import ChatContainer from "../ChatContainer";

// Components/Chat.js
const Chat = () => {
  const user = useSelector((store)=>store.app.user)

  return (
    <div style={{backgroundColor:'#fcf5dd', height:'100vh'}}>
      <Navbar/>
      {/* <ChatBoxReceiver message={"hello wold"}/>
      <ChatBoxSender message={"hii ,how are you doing"}/>
      <InputText addMessage = {(message)=>console.log(message.message)} /> */}
      <ChatContainer/>
    </div>
  );
};


export default Chat;
