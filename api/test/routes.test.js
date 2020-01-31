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

  it('should delete a post', async () => {
    const res = await request(app).delete('products/1')
    expect(res.body).toBe({})
  });

  // it('should update a post', async () => {
  //   const res = await request(app)
  //     .put('/products/2')
  //     .send({
  //       item: 'updated item',
  //     });
  //   expect(res.statusCode).toEqual(200)
  //   expect(res.body).toHaveProperty('item', 'updated item')
  // });
  
 


  // it('should fetch all posts', async (done) => {
  //   const res = await request(app)
  //   .get('/products')
  //   expect(res.statusCode).toEqual(200);
  //   done()
    // expect(res.body).toHaveProperty('posts');
    // expect(res.body.posts).toHaveLength(1);
  // });

  // it('should get all products', async () => {
  //   const res = await request(app).get('/');
  //   expect(res.status.toEqual(200))
  // })
  // it('should create a new product', async () => {
  //   const res = await request(app)
  //     .post('/products')
  //     .send({
  //       item: "Água 500mL",
  //       price: 5,
  //       type: 'bebidas',
  //     })
  //   expect(res.statusCode).toEqual(200)
  //   expect(res.body).toHaveProperty('post')
  // })
})
