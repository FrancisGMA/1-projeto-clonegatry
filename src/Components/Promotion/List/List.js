import React from 'react';
import PromotionCard from 'Components/Promotion/Card/Card';
import './List.css'

const PromotionList = ({loading, promotions}) => {
    if(loading || promotions === null){

        return <div>Carregando...</div>;
    }
    if(promotions.length === 0){
        return <div>Nenhum resultado encontrado</div>
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