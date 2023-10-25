import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const Product = () => {

    const {id} = useParams();
    const [product, setproduct] = useState([]);
    const [loading, setLoading] = useState(false);

    // You will need add an 'Add to Cart' button or similar functionality here. 
    // This means you will need to import context so that you can update the cart throughout the app 
    
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/'${id}`);
            setProduct(await response.json());
            setLoading(false);

        }
        getProduct();
        
    }, []);
    const Loading = () => {
        return(
            <>
            Loading...
            </>
        )

    }
    const ShowProduct = () => {
        return(
            <>
            
            </>

        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {Loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    )
}