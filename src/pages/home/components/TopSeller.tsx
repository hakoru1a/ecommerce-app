import React from "react";
import ProductItem from "../../../components/ProductItem";
import useTranslate from "../../../hooks/useTranslate";

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
function TopSeller() {
  /*------------------------------*/
  const { t } = useTranslate();
  /*------------------------------*/
  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            {/* Heading */}
            <h2 className="mb-4 text-center">{t(`Top month Sellers`)}</h2>
            {/* Nav */}
            <div className="nav justify-content-center mb-10">
              <a
                className="nav-link active"
                href="#topSellersTab"
                data-toggle="tab"
              >
                {t(`Women`)}
              </a>
              <a className="nav-link" href="#topSellersTab" data-toggle="tab">
                {t(`Men`)}
              </a>
              <a className="nav-link" href="#topSellersTab" data-toggle="tab">
                {t(`Kids`)}
              </a>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="topSellersTab">
            <div className="row">
              {DATA &&
                DATA.map((data: Product, i: number) => {
                  return (
                    <div key={i} className="col-6 col-md-4 col-lg-3">
                      <ProductItem {...data} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Link  */}
            <div className="mt-7 text-center">
              <a className="link-underline" href="#!">
                {t(`Discover more`)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSeller;
