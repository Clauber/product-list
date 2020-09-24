export class Product {
  /**
   *
   * @param {number} id Item's id
   * @param {string} title Product's title
   * @param {string} description Product's description
   * @param {number} price Product's price
   * @param {number} quantity Quantity available
   * @param {string} image url for image
   */
  constructor(
    id = 0,
    title = null,
    description = null,
    price = null,
    quantity = null,
    image = null
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.image = image;
  }
}

export const productsSeeder = [
  new Product(
    0,
    "MDF",
    "This is what currently is being used the most in wood projects",
    30,
    100,
    "https://images-na.ssl-images-amazon.com/images/I/91BvU91UPQL._AC_SL1500_.jpg"
  ),
  new Product(
    1,
    "Ply wood",
    "Very interesting wood for your project",
    40,
    50,
    "https://mobileimages.lowes.com/product/converted/081999/081999104481.jpg?size=pdhi"
  ),
  new Product(
    2,
    "Chipwood",
    "This is a very nice product",
    25,
    1000,
    "https://st2.depositphotos.com/6558960/9368/i/950/depositphotos_93686188-stock-photo-close-up-view-of-chipwood.jpg"
  ),
  new Product(
    3,
    "Pine",
    "This is a very nice product",
    80,
    200,
    "data:image/jpeg;base64,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"
  ),
  new Product(
    4,
    "Oak",
    "This is a very nice product",
    100,
    95,
    "https://www.woodshopnews.com/.image/t_share/MTYxNTA1MjYyNjIzMDA3OTU2/red-oak.jpg"
  ),
];
