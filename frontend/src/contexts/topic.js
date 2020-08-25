import React, { createContext, useState, useEffect, useContext } from "react";

const topicContextData = {
    topicData: {
        id: '',
        title: '',
        description: '',
        user:{
            name:''
        } 
    },
    setDataTopic: () => { }

}
const TopicContext = createContext(topicContextData)

export const TopicProvider = ({ children }) => {
    const [topicData, setTopicData] = useState({
        id: '',
        title: '',
        description: '',
        user:{
            name:''
        } 

    })

    async function setDataTopic( topic ) {
        console.log("topic setado context")
        setTopicData({
            ...topic
        })
    }
    return (
        <TopicContext.Provider value={{ topicData, setDataTopic }}>
            {children}
        </TopicContext.Provider >
    )

}

export function useTopic() {
    const context = useContext(TopicContext)
    return context
}