import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({ provider, signer, transactionsContract });

  return transactionsContract;
};

const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_account" });

      console.log(accounts);
      // if (accounts.length) {
      //   setCurrentAccount(accounts[0]);

      //   getAllTransactions();
      // } else {
      //   console.log("No accounts found");
      // }
    } catch (error) {
      console.log(error);
    }
};



export const TransactionsProvider = ({ children }) => {
  useEffect(() => {
  checkIfWalletIsConnect();
},[])
  return (
    <TransactionContext.Provider value={{ value: "praveen" }}>
      {children}
    </TransactionContext.Provider>
  );
};
