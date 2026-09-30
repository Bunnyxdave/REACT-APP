import React from "react";
import ReactDOM from "react-dom/client";

const products = [
  {
    id: 1,
    name: "Hoodie",
    brand: "bunnyxdave",
    price: "1300/-",
    ratings: "4.5",
    imgid:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesQEcrBU6ezxdg0ngSAGPColxUEh2O3c0OG-AFdo2bQ&s",
  },
  {
    id: 2,
    name: "Oversized T-Shirt",
    brand: "urbanthread",
    price: "899/-",
    ratings: "4.3",
    imgid:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 3,
    name: "Cargo Pants",
    brand: "streetwear",
    price: "1499/-",
    ratings: "4.4",
    imgid:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
  },
  {
    id: 4,
    name: "Denim Jacket",
    brand: "blueorbit",
    price: "1799/-",
    ratings: "4.6",
    imgid:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5",
  },
  {
    id: 5,
    name: "Sneakers",
    brand: "solecraft",
    price: "2299/-",
    ratings: "4.7",
    imgid:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 6,
    name: "Graphic T-Shirt",
    brand: "bunnyxdave",
    price: "799/-",
    ratings: "4.2",
    imgid:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
  },
  {
    id: 7,
    name: "Track Pants",
    brand: "fitstreet",
    price: "999/-",
    ratings: "4.1",
    imgid:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea",
  },
  {
    id: 8,
    name: "Sweatshirt",
    brand: "cozywear",
    price: "1199/-",
    ratings: "4.5",
    imgid:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
  },
  {
    id: 9,
    name: "Baseball Cap",
    brand: "urbanthread",
    price: "599/-",
    ratings: "4.0",
    imgid:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee",
  },
  {
    id: 10,
    name: "Varsity Jacket",
    brand: "streetkings",
    price: "2499/-",
    ratings: "4.8",
    imgid:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
  },
];


const Header = () => {
  return (
    <div className="header">
      <div className="logo-header">
        <img
          className="img-logo"
          src="https://img.magnific.com/premium-vector/shopping-online-shop-logo-design-symbol_852937-4241.jpg?semt=ais_hybrid&w=740&q=80"
        />
      </div>
      <div className="nav-links">
        <ul>
          <li className="ul_1">Home</li>
          <li className="ul_1">Shop</li>
          <li className="ul_1">About</li>
          <li className="ul_1">Contact</li>
        </ul>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="  search products..." />
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <div className="user-navs">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
          />
        </svg>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div className="herochild1"></div>

      <div className="herochild2"></div>
      <div className="herochild3"></div>
    </div>
  );
};

const Collection = () => {
  return (
    <div className="collection-container">
      <div className="w_collec"></div>
      <div className="sub_cont">
        <div className="m_collec"></div>
        <div className="sub2_cont">
          <div className="k_collec"></div>
          <div className="g_card"></div>
        </div>
      </div>
    </div>
  );
};

const Trendy = () => {
  return (
    <div className="Trendy">
      <h2>OUR TRENDY</h2>
      <ul>
        <li>ALL</li>
        <li>NEW ARRIVAL</li>
        <li>BEST SELLER</li>
        <li>TOP RATED</li>
      </ul>

     
      <div className="prd-cont">
      {
        products.map((elem)=>{
          return  <Products  key={elem.id} prdDetails={elem} />
        })
      }
    </div>
    </div>
  );
};

const Products = ({ prdDetails }) => {
  const { name, brand, price, ratings, imgid } = prdDetails;
  return (
    <div className="card">
      <img className="prd-img" src={imgid} />
      <div className="prd-details">
        <h3>{name}</h3>
        <p>brand:{brand}</p>
        <span>rating:{ratings}</span>
        <span>
          {" "}
          price:<b>{price}</b>
        </span>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <HeroSection />
      <Collection />
      <Trendy />
    </div>
  );
};

const Footer = () => {
  return <div className="footer">
    <span>&copy; all rights reserved</span>
  </div>;
};

const Container = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Container />);
