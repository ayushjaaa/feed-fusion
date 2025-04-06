import express from 'express'
const app  = express()




app.get('/api/products',(req,res)=>{
    const products = [[
        { id: 1, name: "Laptop", description: "A high-performance laptop with 16GB RAM and 512GB SSD." },
        { id: 2, name: "Smartphone", description: "A 5G-enabled smartphone with a 108MP camera and AMOLED display." },
        { id: 3, name: "Headphones", description: "Noise-canceling wireless headphones with 30 hours of battery life." },
        { id: 4, name: "Smartwatch", description: "A fitness smartwatch with heart rate and sleep tracking." },
        { id: 5, name: "Tablet", description: "A 10-inch tablet with stylus support and a long-lasting battery." }
      ]]
    //   http://localhost:3000/api/products?search=joh
    setTimeout(() => {
      res.send(products)                                                                                            
    }, 3000);
})

const port  = process.env || 3000;
app.listen(port,()=>{
    console.log(`Server running on    port ${port}`)
})