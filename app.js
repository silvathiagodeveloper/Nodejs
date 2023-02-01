const { request } = require("express");
const express = require("express")
const { randomUUID } = require("crypto")

const app = express();
const products = []

app.use(express.json())


app.get("/", (request, response) => {
    return response.json({
        message : 'index'
    })
})

app.get("/products", (request, response) => {
    return response.json(products)
})

app.get("/products/:id", (request, response) => {
    const { id } = request.params

    const product = products.find(product => product.id === id)

    return response.json(product)
})

app.post("/products", (request, response) => {
    
    const { name, value } = request.body

    const product = {
        id: randomUUID(),
        name,
        value
    }

    products.push(product)

    return response.json(product)
})

app.put("/products/:id", (request, response) => {
    const { id } = request.params
    const { name, value } = request.body

    const index = products.findIndex(product => product.id === id)

    products[index] = {
        ...products[index],
        name, 
        value
    }

    return response.json(products[index])
})

app.delete("/products/:id", (request, response) => {
    const { id } = request.params

    const index = products.findIndex(product => product.id === id)

    products.splice(index,1)

    return response.json({ message: "Excluído"})
})

app.listen(80,() => { console.log('server rodadno na porta 80')})
