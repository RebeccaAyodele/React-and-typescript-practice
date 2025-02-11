import { ReactElement, createContext, useState, useEffect } from "react"

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

const initState: ProductType = 

// // This initState array contains three products as default values.
// const initState: ProductType[] = [
//     {
//         "sku": "item0001",
//         "name": "Widget",
//         "price": 9.99
//     },
//     {
//         "sku": "item0002",
//         "name": "Premium Widget",
//         "price": 19.99
//      },
//     {
//         "sku": "item0003",
//         "name": "Deluxe Widget",
//         "price": 29.99
//     }
// ]

// This defines the type for the context, where: products is an array of ProductType
export type UseProductsContextType = { products: ProductType[] }

// This sets up an initial empty state for the context.
const initContextState: UseProductsContextType = { products: [] }

// This creates a new React Context named ProductsContext.
// The default value is initContextState, which means initially, products will be an empty array.
const ProductsContext = createContext<UseProductsContextType>(initContextState)

// This defines the type for children inside the ProductsProvider component.
// It allows passing either a single React element or an array of React elements.
type ChildrenType = { children?: ReactElement | ReactElement[] }

// Creates a ProductsProvider component that will wrap other components.
//Uses useState to store products and initialize it with initState.
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export  default ProductsContext
