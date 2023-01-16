
const ProductList = ({product}) => {
    // style={{display:"flex", flexDirection:"column"}}
    console.log(product);
    const {title, description, price, brand, images, rating} = product;
    return (
        <div className="product-card">
            <img alt="product" className="product-image" src={images[0]} />
            <h2 id="title">{title}</h2>
            <p id="description">{description}</p>
            <h2 id="price">₹ {price}</h2>
            <h4>⭐ {rating} | Brand: {brand}</h4>
        </div>
    )
}

export default ProductList;