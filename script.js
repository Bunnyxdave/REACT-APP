import React from "react";
import ReactDOM from "react-dom/client";

let products = {
  name: "hoodie",
  brand: "bunnyxdave",
  price: "1300/-",
  ratings: "4.5",
  imgid:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesQEcrBU6ezxdg0ngSAGPColxUEh2O3c0OG-AFdo2bQ&s",
};

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

      <Products />
    </div>
  );
};

const Products = ()=>{
    return (
        <div className="Products">
        <div className="card">
          <img className="prd-img" src={products.imgid} />
          <div className="prd-details">
            <h3>{products.name}</h3>
            <p>brand:{products.brand}</p>
            <span>rating:{products.ratings}</span>
            <span> price:<b>{products.price}</b></span>
          </div>
        </div>
      </div>
    )
}

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
  return <div></div>;
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
