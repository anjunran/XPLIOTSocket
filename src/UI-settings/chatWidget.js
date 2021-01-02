export const chatwidgetProps = () => {
  return {
    handleNewUserMessage:()=>{},
    title:"SoChat",
    subtitle:"Chat anytime you want",
    profileAvatar:"",
    titleAvatar:"",
    showCloseButton:false,
    fullScreenMode:false,
    autofocus:true,
    launcher:()=>{},
    handleQuickButtonClicked:()=>{},
    showTimeStamp:true,
    chatId:'rcw-chat-container',
    launcherOpenLabel:'Open chat',
    launcherCloseLabel:'Close chat',
    sendButtonAlt:'Send',
    handleTextInputChange:()=>{},
    handleSubmit:()=>{}
  };
};
