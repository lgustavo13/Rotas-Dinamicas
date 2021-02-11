import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { produtosType } from '../../type/typeProduto'
import { Helmet } from 'react-helmet'

function Home() {

    const [loja, setLoja] = useState<any>([])
    
    useEffect (() => {
        axios.get(`https://fakestoreapi.com/products`)
        .then(resposta => setLoja(resposta.data))
    }, [])

    return (
        <div className="Loja">
            <Helmet>
                <title>Home</title>
            </Helmet>
            {loja.map((item: produtosType) => (
                <ul key={item.id}>
                    <img id="imagem" src={item.image} />
                    <p>Produto: {item.title}</p>
                    <p>Categoria: {item.category}</p>
                    <p>Preço: {item.price}</p>
                    <Link to={`/produtos/${item.id}`}>Compar</Link>
                </ul>
            ))}
        </div>
        
    )
    
}

export default Home