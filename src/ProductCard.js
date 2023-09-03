function ProductCard(props) {

    const buyProduct = function(name) {
        alert(`${name} Product added to cart.`)
    }

    return (
      <div className='card'>
        <p>Name of Product: {props.n}</p>
        <p>Price of Product: Rs. {props.price}</p>
        <p>Product in stock: {props.inStock ? "Yes" : "No"}</p>
        <button on
            onClick={
                () => buyProduct(props.n)
            }
        >
            Buy
        </button>
      </div>
    );
  }

  export default ProductCard