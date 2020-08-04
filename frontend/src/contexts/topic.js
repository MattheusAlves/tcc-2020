import React, { createContext, useState, useEffect, useContext } from "react";

const topicContextData = {
    categoryId: '',
    categoryName: '',
    setData: () => {}
}
const TopicContext = createContext(topicContextData)

export const TopicProvider = ({ children }) => {
    const [categoryId, setCategoryId] = useState()
    const [categoryName, setCategoryName] = useState()
    async function setData(categoryId, categoryName) {
        setCategoryId(categoryId)
        setCategoryName(categoryName)
  
    }
    return (
        <TopicContext.Provider value={{ categoryId, categoryName,setData }}>
            {children}
        </TopicContext.Provider >
    )

}

export function useTopic() {
    const context = useContext(TopicContext)
    return context
}