import React, { createContext, useEffect, useState } from "react";
import { getData } from "../lib";
import { config } from "../../config";
import { toast } from "react-toastify";
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from "react-router-dom";

// StoreContext
export const StoreContext = createContext();
function GlobalContext({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [highlights, setHighlights] = useState([]);
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const [allProductData, setAllProductData] = useState([]);
  const [images, setImages] = useState("");
  const [color, setColor] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [categories, setCategories] = useState([]);
  const [singleCategory, setSingleCategory] = useState(null);

  // fetching categories data from express server

  const fetchCategoryData = async (id) => {
    const endpoint = id
      ? `${config?.baseUrl}/categories/${id}`
      : `${config?.baseUrl}/categories`;
    try {
      const data = await getData(endpoint);
      if (id) {
        setSingleCategory(data);
        setCategories([]);
        setLoading(true);
      } else {
        setCategories(data);
        setSingleCategory(null);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // fetching highlights data from express server
  useEffect(() => {
    const fetchData = async () => {
      const res = `${config?.baseUrl}/highlights`;
      try {
        const data = await getData(res);
        setHighlights(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // fetching highlights data from express server
  useEffect(() => {
    const fetchData = async () => {
      const res = `${config?.baseUrl}/products`;
      try {
        const data = await getData(res);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  // Single Product
  // Function to fetch product data
  const fetchProductData = async (id) => {
    const endPoint = id
      ? `${config?.baseUrl}/products/${id}`
      : `${config?.baseUrl}/products`;

    try {
      const data = await getData(endPoint);
      if (id) {
        setSingleProduct(data);
        setAllProductData(null);
        setImages(data?.images[0]);
        setColor(data?.colors[0]);
        setLoading(true);
      } else {
        setAllProductData(data);
        setSingleProduct(null);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // getTotalCartAmount function
  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.regularPrice * item.quantity;
    }, 0);
  };

  // addToCart function
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    toast.success(`${cartItems.length + 1} items added!`);
  };
  // removeToCart function
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== itemId)
    );
    toast.error(`1 items remove!`);
  };
  // Check if the product is in the cart
  const isInCart = (itemId) => cartItems.some((item) => item._id === itemId);

  // removeItems function
  const removeItems = (itemId) => {
    setFavorite((prevItems) => prevItems.filter((item) => item._id !== itemId));
    toast.error(`remove item!`);
  };
  // Conditional rendering based on loading or error state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader
          color="#826DDC"
          cssOverride={{}}
          loading
          margin={8}
          radius={2}
          speedMultiplier={1}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // contextValue
  const contextValue = {
    categories,
    setCategories,
    loading,
    setLoading,
    error,
    setError,
    highlights,
    setHighlights,
    products,
    setProducts,
    singleProduct,
    setSingleProduct,
    allProductData,
    setAllProductData,
    images,
    setImages,
    color,
    setColor,
    fetchProductData,
    cartItems,
    setCartItems,
    favorite,
    setFavorite,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    isInCart,
    removeItems,
    singleCategory,
    setSingleCategory,
    fetchCategoryData,
   
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default GlobalContext;
