const { useState, useEffect } = require("react")

const UseProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://hot-gadget.onrender.com/product')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    return [product]
}

export default UseProducts;