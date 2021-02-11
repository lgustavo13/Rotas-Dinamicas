import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { produtosType } from '../../type/typeProduto'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Produto = () => {

    const [produtos, setProdutos] = useState<produtosType>()
    const params = useParams<any>()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(resposta => setProdutos(resposta.data))
    }, [params.id])
        
    


    return (
        <div className="Produto">
            <Helmet>
                <title>Produtos</title>
            </Helmet>
           <p>O produto é: {produtos?.title}</p>
           <p>Descrição: {produtos?.description}</p>
           <img id="imagem" src={produtos?.image} />
           <p>Valor: {produtos?.price}</p>
           <Link to="/">Voltar</Link>
           
        </div>
    )
}

export default Produto