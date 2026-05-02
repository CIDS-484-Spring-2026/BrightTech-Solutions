import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';
import '../styles/chatbotStyles.css';  

//Variable that holds the generated API Key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
//Variable that specificies the current model of the API Key
const model = genAI.getGenerativeModel({model: "gemini-2.5-flash"});

function ChatBot(){
    //Variables that handle the messages and user input
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    //Variable that handles the loading animation
    const [loading, setLoading] = useState(false);

    //Function that handles the user sending a message to the AI
    const sendMessage = async () => {
        //Stops function from executing when the input space is blank or gives spaces and tabs
        if (!input.trim() || loading) return;

        

        try{
            setLoading(true);
            

            const userMessage = {role: "user", parts: [{text: input}]};

            //Variable that stores the updates message
            let updateMessages;

            //Function that deals with updating the user message to the AI
            setMessages(prev => {
                updateMessages = [...prev, userMessage];
                return updateMessages;
            });

            //Uses Gemini AI's startChat function to initiate the conversation
            //Also provides the AI with the previous chat history
            const chat = model.startChat({history: updateMessages});

            //Sends the message to Gemini and waits for a response
            const result = await chat.sendMessage(input);

            //Response from the chatbot
            const brightBotResponse = {
                role: "model",
                parts: [{text: result.response.text()}]
            };

            setMessages((prev => [...prev, brightBotResponse]));
            setInput("");
        }
        catch(err){
            console.error("ERROR:", err);
            console.log("MESSAGE: ", err?.message)
        }
        finally{
            setLoading(false);
        }
    };

    //Setting the foundation for the inline styles below
    const styles = {
        container: {
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            height: "90vh",
            padding: "20px",
            boxSizing: "border-box"
        },
        header: {
            textAlign: "center",
            marginBottom: "10px"
        },
        chatWindow: {
            flex: 1,
            overflowY: "auto",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#fafafa"
        },
        message: {
            maxWidth: "75%",
            padding: "10px 14px",
            borderRadius: "12px",
            fontSize: "15px",
            lineHeight: "1.4"
        },
        inputBar: {
            display: "flex",
            marginTop: "10px",
            gap: "10px"
        },
        input: {
            flex: 1,
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px"
        },
        button: {
            padding: "10px 16px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
        },
        spinner: {
            alignSelf: "flex-start",
            padding: "10px 14px",
            borderRadius: "12px",
            backgroundColor: "#e5e7eb",
            display: "inline-block"
        },
        dot: {
            height: "6px",
            width: "6px",
            margin: "0 2px",
            backgroundColor: "#555",
            borderRadius: "50%",
            display: "inline-block",
            animation: "blink 1.4 infinite both"
        }

    };

    return(
        <div style={styles.container}>
            <h2>BrightBot AI Assistant</h2>

            <div style={styles.chatWindow}>
                {messages.map((msg, index) => (
                    <div
                    key={index}
                    style = {{
                        ...styles.message,
                        alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                        backgroundColor: msg.role === "user" ? "#4f46e5" : "#e5e7eb",
                        color: msg.role === "user" ? "white" :"black",
                    }}
                    >
                    {msg.parts[0].text}
                    </div>    
                ))} {/*End of message map div element*/}

                {/*Style/layout for loading animation */}
                {loading && (
                    <div style={styles.spinner}>
                        <span style={{...styles.dot, animationDelay: "0.2s"}}></span>
                        <span style={{...styles.dot, animationDelay: "0.4s"}}></span>
                    </div>
                )}
            </div> {/*End of message chat window styles */}

            {/*Structure for the user input bar */}
            <div style={styles.inputBar}>
                <input 
                    style={styles.input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message to BrightBot..."
                />
                <button style={styles.button} onClick={sendMessage}>
                    Send
                </button>
            </div> {/*End of input bar div element */}
            

        </div> //End of main div container
    );
    
}

export default ChatBot;