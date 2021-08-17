import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './Form.css'

const InitialValue = {
    title: '',
    url: '',
    imageURL: '',
    price: 0,
};

const PromotionForm = () => {
    const [values, setValues] = useState({InitialValue})
    const history = useHistory();

    function onChange(ev) {
        const {name, value} = ev.target;

        setValues({ ...values, [name]:value });

    }

    function onSubmit(ev){
        ev.preventDefault();

        axios.post('http://localhost:5000/promotions', values)
        .then((response) => {
            history.push('/');
        })
    }


    return(
        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>

            <form onSubmit={onSubmit}> 
                <div className="Promotion-form__group">
                    <label htmlfor="title">Título</label>
                    <input id="title" name="title" type="text" onChange={onChange}/>
                </div>
                <div className="Promotion-form__group">
                    <label htmlfor="url">Link</label>
                    <input id="url" name="url" type="text" onChange={onChange}/>
                </div>
                <div className="Promotion-form__group">
                    <label htmlfor="imageURL">Imagem (URL)</label>
                    <input id="imageURL" name="imageURL" type="text" onChange={onChange}/>
                </div>
                <div className="Promotion-form__group">
                    <label htmlfor="price">Preço</label>
                    <input id="price" name="price" type="number" onChange={onChange}/>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>

        </div>
    )

}

export default PromotionForm;