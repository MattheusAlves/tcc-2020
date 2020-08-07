import React, { createContext, useState, useEffect, useContext } from "react";

const topicContextData = {
    topicData: {
        categoryId: '',
        categoryName: ''
    },
    setData: () => { }
}
const TopicContext = createContext(topicContextData)

export const TopicProvider = ({ children }) => {
    const [topicData, setTopicData] = useState({})

    async function setData(categoryId, categoryName) {
        setTopicData({
            categoryId: categoryId,
            categoryName: categoryName
        })
    }
    return (
        <TopicContext.Provider value={{ topicData, setData }}>
            {children}
        </TopicContext.Provider >
    )

}

export function useTopic() {
    const context = useContext(TopicContext)
    return context
}