import React, { createContext, useState, useEffect, useContext } from "react";

const topicContextData = {
    topicData: {
        topicId:'',
        topicTitle:'',
        user:'',
        topicBody:{}
    },
    topicId:'',
    setDataTopic: () => { },
    setTopicId:() => {},
    setFullTopic:() => {}
}
const TopicContext = createContext(topicContextData)

export const TopicProvider = ({ children }) => {
    const [topicData, setTopicData] = useState({})
    const [topicBody,setTopicBody] = useState()
    const [topicId, setTopicId] = useState('')

    async function setFullTopic(topic){
        setTopicBody(topic)
    }
    
    async function setDataTopic(topicId, topicTitle, user) {
        setTopicData({
            topicId: topicId,
            topicTitle: topicTitle,
            user:user
        })
    }
    return (
        <TopicContext.Provider value={{ topicData,topicBody, setDataTopic,setFullTopic,topicId,setTopicId }}>
            {children}
        </TopicContext.Provider >
    )

}

export function useTopic() {
    const context = useContext(TopicContext)
    return context
}