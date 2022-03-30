import React, {useEffect, useState} from 'react';
import api from "../services/api";

const PricesList = ({id_product}) => {

    const [items, updateItems] = useState([]);
    
    useEffect(() => {        
        var endpoint = 'product/'+id_product+'/prices';
        console.log(endpoint);
        api
            .get(endpoint)
            .then((response) => updateItems(response.data))
            .catch((err) => {
                console.error('Ops algo deu errado', err);
            });        
    }, [id_product]);

    return(
        items.map((item, index) => { 
            return(
                <>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">store: {item.store}</h5>
                                    <p className="card-text">price: {item.price}</p>
                                    <p className="card-text">date: {item.createdAt}</p>      
                                </div>
                            </div>
                        </div>
                    </div>
                </>                
            )             
        })        
    )
}

export default PricesList; 