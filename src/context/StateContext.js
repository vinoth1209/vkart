import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [mensProducts, setMensProducts] = useState({ data: [], count: 0 });
  const [datas, setDatas] = useState({});
  const [womenProducts, setWomensProducts] = useState({ data: [], count: 0 });
  const [kidsProducts, setKidsProducts] = useState({ data: [], count: 0 });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        cart,
        setCart,
        womenProducts,
        setWomensProducts,
        mensProducts,
        setMensProducts,
        datas,
        setDatas,
        kidsProducts,
        setKidsProducts,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
