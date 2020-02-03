import request from "supertest";
import app from "../index";

describe("Testing Sucess Requests of Products", () => {
  it("should fetch all five products", async () => {
    const res = await request(app).get("/products");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(5);
  });

  it("should fetch one product", async () => {
    const res = await request(app).get("/products/3");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Found Product!");
  });

  it("should create a new product", async () => {
    const res = await request(app)
      .post("/products")
      .send({
        item: "Água 500mL",
        price: 5,
        type: "bebidas",
        is_additional: false
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Product Added!");
  });

  it("should update a post", async () => {
    const res = await request(app)
      .put("/products/2")
      .send({
        item: "updated item"
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Product Updated!");
  });
});

describe("Testing Failures Endpoints of Products", () => {
  it("should not find a product on get", async () => {
    const res = await request(app).get("/products/30");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Cannot find Product with the id 30");
  });

  it("should not find a product on put", async () => {
    const res = await request(app).put("/products/20");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Cannot find Product with the id 20");
  });

  it("should not find a product on delete", async () => {
    const res = await request(app).delete("/products/20");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Cannot find Product with the id 20");
  });

  it("should ask for a valid numeric value on put", async () => {
    const res = await request(app).put("/products/test");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty(
      "message",
      "Please input a valid numeric value"
    );
  });

  it("should ask for a valid numeric value on delete", async () => {
    const res = await request(app).delete("/products/test");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty(
      "message",
      "Please input a valid numeric value"
    );
  });

  it("should ask for a valid numeric value on get", async () => {
    const res = await request(app).get("/products/test");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty(
      "message",
      "Please input a valid numeric value"
    );
  });

  it("should ask for more details", async () => {
    const res = await request(app)
      .post("/products")
      .send({
        item: "Água 500mL",
        price: 5
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty(
      "message",
      "Please provide complete details"
    );
  });

});
