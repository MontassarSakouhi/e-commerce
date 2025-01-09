import { useSelector } from "react-redux"
import ProductItem from "../productItem/ProductItem"




const RecommandedProducts = ({ product }) => {

    const { products } = useSelector(state => state.products)
    const filtered = products.filter(el => el.category === product.category && el.subCategory === product.subCategory)
    return (
        <div className={'flex flex-wrap gap-10 justify-center'} >
            {filtered.map(el => <ProductItem key={el._id} {...el} />)}
        </div>
    )
}

export default RecommandedProducts