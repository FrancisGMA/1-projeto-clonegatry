import React from 'react';
import PromotionCard from 'Components/Promotion/Card/Card';
import './List.css'

const PromotionList = ({loading, promotions}) => {
    if(loading){

        return <div>Carregando...</div>;
    }

    return(
        <div className="Promotion-list">
            {promotions.map((promotion) =>(
                <PromotionCard promotion={promotion} />
             ))
             }
        </div>
    )
}

export default PromotionList;