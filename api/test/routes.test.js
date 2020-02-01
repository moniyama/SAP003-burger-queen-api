import request from 'supertest';
import app from '../index';

describe('Testing Sucess Endpoints of Products', () => {
  it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  }),
  
  it('should fetch all five products', async () => {
    const res = await request(app).get('/products')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveLength(5)
  }),

  it('should fetch one product', async () => {
    const res = await request(app).get('/products/3')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message', "Found Product!")
  })

  
  it('should create a new product', async () => {
    const res = await request(app)
    .post('/products')
    .send({
      item: "Água 500mL",
      price: 5,
      type: 'bebidas',
      is_additional: false
    })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message','Product Added!')
  })
  
  
  it('should update a post', async () => {
    const res = await request(app)
    .put('/products/2')
    .send({
      item: 'updated item',
    });
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message', 'Product Updated!')
  });
  
  // it('should delete a post', async () => {
  //   const res = await request(app).delete('products/1')
  //   expect(res.statusCode).toEqual(204)
  //   expect(res.body).toHaveProperty('message', 'Product Deleted!')

  // });
})
