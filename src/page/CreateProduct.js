import { act, useEffect, useReducer } from 'react'
import '../style/createProduct.css'
import { useState } from 'react'
import CreateProductActions from '../functions/CreateProductActions'
import { useFormStatus } from 'react-dom'

async function productAction(state, action){
    if(action.type === "POST"){

        const data = {
            ...action.payload,
        }
        const response = await CreateProductActions(data)
    }

    if(action.type === "PATCJ"){
        const {id, ...rest} = action.payload
        const data = {
            ...rest,
        }
    }

}

export function CreateProductPage(){
    const [categories, setCategories] = useState([])
    const [state, dispatch] = useReducer(productAction, {
        title: "",
        description: "",
        category: "",
        price: 0,
    })

    useEffect(() =>{
        async function fetchCategories(){
            const response = await fetch('https://dummyjson.com/products/categories')
            const data = await response.json()
            setCategories(data)
        
        }
        fetchCategories()
    }, [])

    async function submitActions(formData){
        const {title, description, category, price} = Object.fromEntries(formData)
        dispatch({type: "POST", payload: {title, description, category, price}})
        return;
        /*
        const {title, description, category, price} = state
        const data = Object.fromEntries(formData)
        const response = await CreateProductActions(data)
        console.log("Suvmit", response)
        if(response?.id === undefined){
            alert("Product created successfully")
            return
        }
        
        const newProducts = localStorage.getItem("newProducts") != null ? 
            JSON.parse(localStorage.getItem("newProducts")) : []
        newProducts.push(response)

        const newProductsString = JSON.stringify(newProducts)
        localStorage.setItem("newProducts", newProductsString)
        */
    }

    function ButtonSave(){
        const {pending} = useFormStatus();

        return(
            <button type="submit" className='blueButton' disabled={pending}>{pending ? "Saving...":"Save"}</button>
        )
    }

    return(
        <div className="container">
            <h1>Create product</h1>
            <form action={submitActions} method='POST'>
                <div className='labelInput'>
                    <label htmlFor='title'>Title </label>
                    <input type="text" name="title" id='title'/>
                </div>
                <div className='labelInput'>
                    <label htmlFor='description'>Description</label>
                    <textarea name="description" id='description'></textarea>
                </div>
                <div className='doubleContainer'>
                    <div className='labelInput'>
                        <label htmlFor='category'>Categories</label>
                        <select name="category" id='category'>
                            {categories.map((category =>(
                                <option key={category.slug} value={category.slug}>{category.name}</option>
                            )))}
                        </select>
                    </div>
                    <div className='labelInput'>
                        <label htmlFor='price'>Price</label>
                        <input type="number" name="price" id='price'/>
                    </div>
                </div>
                <button className='blueButton' onClick={()=> dispatch({type: "CREATE_PRODUCT"})}>Crear</button>
            </form>
        </div>
    )
}
