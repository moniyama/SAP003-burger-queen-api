import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import ProductRouter from './server/routes/ProductRouter';
import OrdersRouter from './server/routes/OrdersRouter';


const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000;

app.use('/products', ProductRouter);
app.use('/orders', OrdersRouter);
// app.use('/tables', TablesRouter);

app.get('*', (req, res) => res.status(200).send({
   message: 'Esta é a API do burger queen.'
}))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`)
})

export default app
