import ProductList from "./ProductList";
import './Product.css';
const Product = ({ products }) => {
    
    // console.log(products);
    // const renderedProducts = products.map()
    return (
        <div className="all-product">
            {products.map((product) => <ProductList key={product.id} product={product} />)}
            
        </div>
    )
}

export default Product;