import React, {useEffect, useState} from 'react';
import PromotionList from 'Components/Promotion/List/List';
import useApi from 'Components/utils/useApi';
import {Link} from 'react-router-dom';
import './Search.css'

const PromotionSearch = () => {

    const [search, setSearch] = useState('');
    const [load, loadInfo] = useApi(
        {
            method: 'get',
            url: '/promotions',
            params: {
                _embed: 'comments',
                _order: 'desc',
                _sort: 'id',
                title_like: search || undefined,
            },
           
        }
    );

    useEffect(() =>{
        load();
    }, [search]);

    return(
        <div className="Promotion-search">
            <header className="Promotion-search__header">
            <h1>Promo Show </h1>
                <Link to="/create">Nova Promoção</Link>
            </header>
            <input 
                type="search"
                className="Promotion-search__input"
                placeholder="Buscar"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
           
           <PromotionList 
                promotions={loadInfo.data} 
                loading={loadInfo.loading}
                error={loadInfo.error} />
        </div>
    );
};

export default PromotionSearch;