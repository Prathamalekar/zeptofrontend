import React, {Component} from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import botIcon from "./BotIcon.png"


class Chatbotreal extends Component{
    user = ""
    constructor(props){
        super(props);
        this.state = {
            data : "hello welcome to zepto"
        }
    }
    componentWillMount(){
        console.log('First this called');
      }
    
      async getData(){

            try {
              const response = await fetch('http://localhost:5000/chatbotRequest', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({message:this.user}),
              });
        
              if (!response.ok) {
                console.log("shit error aagya")
                throw new Error('Network response was not ok');
                
              }
              console.log(response)
        
              const data3 = await response.json();
              console.log("data ka reply", data3.message)
              this.setState({data : data3.message});
            //   return JSON.stringify(data.message);
              return data3.message  
            } catch (error){
              console.error('Error sending message:', error);
            }
          
      }
    
      componentDidMount(){
        this.getData().then((value)=>{
            this.setState({data:value})
        }).catch((err)=>{
            console.log(err)
        })
        
      }
    //    CustomComponent = ({triggerNextStep})=>{
	//     triggerNextStep({value: this.state.data,trigger:"2"})
    //     return(
    //         <div>{this.state.data}</div>
    //     )
		

    //   }

    CustomComponent = (props) => {
        const { triggerNextStep } = props;
		// console.log("this is props",props)

        // // If fetchData state is true, trigger the next step with the updated data
        // if (this.state.data) {
        //     triggerNextStep();
        // }
		
        return (
			
            <div>{this.state.data}</div>
        );
    }
       steps = [
		{
			id: '0',
			message: "Hello welcome to zepto",
	
			// This calls the next id
			// i.e. id 1 in this case
			trigger: '2',
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
				this.user = input.value;
			    this.getData();
				return "3"
			},
			
		},
		 {
			id: '3',
            component: <this.CustomComponent/>,
			trigger: ()=>{
				return '5'
			},
			asMessage: true,

			
			
		},
		{
			id: '5',
			user: true,
			waitAction :false,
			trigger: (input)=>{
				this.user = input.value;
			    this.getData();
				
				return "3"
			},
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
			
			
		}
	]

	 contentstyle = {
		color:" #000",
		fontFamily: "Inter",
		fontSize: "1rem",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "normal",
		textAlign:"left"
	
	}
	
	// Creating our own theme
	theme = {
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
	config = {
		botAvatar: botIcon,
		floating: true,
	};





      render(){
        return(
        <div className="App">
		    
			<ThemeProvider theme={this.theme}>
            
				<ChatBot
                    floating = {true}
                    contentStyle = {this.contentstyle}
                    placeholder = "Enter you message... "
                    height = "80vh"
                    width = "50vh"
                    // enableSmoothScroll = {true}
					headerTitle="Inflowmate"
					steps={this.steps}
					{...this.config}
                    

				/>
			</ThemeProvider>
		</div>
        )
      }
}
export default Chatbotreal;