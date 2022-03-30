import React, {useEffect, useState} from 'react';
import api from "../services/api";


const ProductList = ({changeProduct}) => {

    const [items, updateItems] = useState([]);

    useEffect(() => {
        api
            .get("product")
            .then((response) => updateItems(response.data))
            .catch((err) => {
                console.error('Ops, ocorreu um erro', err);
            });
    }, []);

    function onClick(id){
        changeProduct(id);
    }

    return(
        items.map((item, index) => { 
            return(
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">name: {item.name}</h5>
                                <p className="card-text">code: {item.code}</p>
                                <button onClick={() => {onClick(item.id)}} className="btn btn-primary">See prices</button>        
                            </div>
                        </div>
                    </div>
                </div>                
            )             
        })        
    )
}

export default ProductList; 