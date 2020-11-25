import React, { createContext, useState, useEffect, useContext } from "react";

const categoryContextData = {
    categoryData: {
        categoryId: '',
        categoryName: ''
    },
    setData: () => { }
}
const CategoryContext = createContext(categoryContextData)

export const CategoryProvider = ({ children }) => {
    const [categoryData, setCategoryData] = useState({})

    async function setData(categoryId, categoryName) {
        setCategoryData({
            categoryId: categoryId,
            categoryName: categoryName
        })
    }
    return (
        <CategoryContext.Provider value={{ categoryData, setData }}>
            {children}
        </CategoryContext.Provider >
    )

}

export function useCategory() {
    const context = useContext(CategoryContext)
    return context
}