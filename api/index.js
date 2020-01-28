import express from 'express'
import bodyParser from 'body-parser'
import ProductRouter from './server/routes/ProductRouter';

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = 3000

app.use('/products', ProductRouter);

app.get('*', (req, res) => res.status(200).send({
   message: 'Esta é a API do burger queen.'
}))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`)
})

export default app
