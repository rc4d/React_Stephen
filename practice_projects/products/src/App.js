import React, {useEffect, useState} from "react";
import Product from "./components/Product";
/**
 * Component Design
 * App -> product -> Product List
 * Fetch Data in app  Component -> pass it to product and one by one 
 * write jsx using map and product list
 * @returns 
 */
const App = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData  = async () => {
        const response = await fetch("https://dummyjson.com/products")
                            .then((data) => data.json())
                            .catch((error) => console.log(error));
        setProducts(response.products);
    };
    // console.log(products)
    
    return (
        <div>
            <Product products={products} />
            Hello India</div>
    )
}

export default App;