//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import botIcon from "./BotIcon.png"
import Form from './component1';
import { useState, useEffect } from 'react';



var user = ""

function ChatbotInflowmate(){
	const [reply, setReply] = useState("hello");
	const [apiResponse, setApiResponse] = useState("*** now loading ***");
	
	const handleSendMessage = async () => {


		try {
		  const response = await fetch('http://localhost:5000/chatbotRequest', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({message:user}),
		  });
	
		  if (!response.ok) {
			console.log("shit error aagya")
			throw new Error('Network response was not ok');
			
		  }
		  console.log(response)
	
		  const data = await response.json();
		  console.log("data ka reply", data.message)
		  
		  return JSON.stringify(data.message);
		  
		   
		   
		  
		} catch (error){
		  console.error('Error sending message:', error);
		}
	  };
	
		
	  async function RetrieveData(){
	     setTimeout(()=>{
			return "hello baby girl"
		 },1000)
		 
		 

	  }
	//   useEffect(async () => {
	// 	const variable = await handleSendMessage().message;
	// 	    setReply(variable);
	// 		return variable;
	//   }, []); // Empty dependency array ensures it runs only once after mount
	  
	  
	useEffect(() => {
		handleSendMessage().then(
	    (result )=> {String(setApiResponse(result))
		console.log("useEffect",result)});
	},[]);
	const steps = [
		{
			id: '0',
			message: "Hello welcome to zepto",
	
			// This calls the next id
			// i.e. id 1 in this case
			trigger: '1',
		},
		 {
			id: '1',
	
			// This message appears in
			// the bot chat bubble
			message: 'Please write your name  ',
			trigger: '2'
		}, 
		{
			id: '2',
			user: true,
			trigger: (input)=>{
				user = input.value;
				handleSendMessage();
				
				return "3"
			},
		},
		 {
			id: '3',
			
			component:(
				<div>{apiResponse && RetrieveData()}</div>
			),
			trigger: ()=>{
				return "2"
			}
		}, 
		{
			id: '4',
			options: [
	
				// When we need to show a number of
				// options to choose we create alist
				// like this
				{ value: 1, label: 'View Courses'},
				{ value: 2, label: 'Read Articles' },
	
			],
			end: true
		}
	];
	const contentstyle = {
		color:" #000",
		fontFamily: "Inter",
		fontSize: "1rem",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "normal",
		textAlign:"left"
	
	}
	
	// Creating our own theme
	const theme = {
		background: 'white',
		headerBgColor: "linear-gradient(273deg, #E082E8 4.05%, #8C2EFF 98.85%)",
		headerBorderRadius: "1.1875rem 1.1875rem 0rem 0rem",
		headerBoxShadow: "0px 1px 27.9px -2px rgba(0, 0, 0, 0.25)",
		headerFill: "linear-gradient(92deg, #8F31FF 16.51%, #DD7FEA 83.82%)",
		headerFilter: "drop-shadow(0px -7px 4px rgba(0, 0, 0, 0.25))",
		headerFontSize: '20px',
		botBubbleColor: '#EDF1F7',
		headerFontColor: 'white',
		botFontColor: "#000",
		userBubbleColor: 'linear-gradient(90deg, #8E30FF 4.7%, #E082E9 63.83%)',
		userFontColor: 'white',
		botFontSize : "1px"
	   
	   
		
		// background: "linear-gradient(90deg, #8E30FF 4.7%, #E082E9 63.83%)";
	};
	
	// Set some properties of the bot
	const config = {
		botAvatar: botIcon,
		floating: true,
	};
	return (
		
		<div className="App">
		
			<ThemeProvider theme={theme} component= {<Form/>}>
				<ChatBot
                    floating = {true}
                    contentStyle = {contentstyle}
                    placeholder = "Enter you message... "
                    height = "70vh"
                    width = "50vh"
                    // enableSmoothScroll = {true}
					headerTitle="Inflowmate"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default ChatbotInflowmate;
