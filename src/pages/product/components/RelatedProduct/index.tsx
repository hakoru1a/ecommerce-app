import ProductItem from "../../../../components/ProductItem";
interface Image {
  front: string;
  back: string;
}
interface Product {
  img: Image; // Assuming img is a URL or path to an image
  status: string; // Assuming status is a string representing the status of the product
  type: string; // Assuming type is a string representing the type/category of the product
  name: string; // Assuming name is a string representing the name/title of the product
  price: string; // Assuming price is a number representing the regular price of the product
  discountPrice?: string; // Assuming discountPrice is an optional number representing the discounted price of the product
}
const DATA: Product[] = [
  {
    img: {
      back: "/img/products/product-120.jpg",
      front: "/img/products/product-5.jpg",
    },
    status: "new",
    type: "Shoes",
    name: "Leather mid-heel Sandals",
    price: "129.00",
    discountPrice: "",
  },
  {
    img: {
      back: "/img/products/product-121.jpg",
      front: "/img/products/product-6.jpg",
    },
    status: "",
    type: "Dresses",
    name: "Cotton floral print Dress",
    price: "40.00",
    discountPrice: "",
  },
  {
    img: {
      back: "/img/products/product-122.jpg",
      front: "/img/products/product-7.jpg",
    },
    status: "sale",
    type: "Shoes",
    name: "Leather Sneakers",
    price: "85.00",
    discountPrice: "85.00",
  },
  {
    img: {
      back: "",
      front: "/img/products/product-8.jpg",
    },
    status: "",
    type: "Tops",
    name: "Cropped cotton Top",
    price: "29.00",
    discountPrice: "",
  },
];

function RelatedProduct() {
  return (
    <section className="pt-11">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Heading */}
            <h4 className="mb-10 text-center">You might also like</h4>
            {/* Items */}
            <div className="row">
              {DATA &&
                DATA.map((data, i) => {
                  return (
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                      <ProductItem key={i} {...data} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedProduct;
