import React from "react";
import "./App.css";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import {Aptos} from '@aptos-labs/ts-sdk'
import {useWallet} from '@aptos-labs/wallet-adapter-react'

function App() {
  const aptos = new Aptos();
  const {account} = useWallet();



  return (
    <div className="App">
      <h1 className="text-3xl font-bold m-5">Aptos Micropayment</h1>
      <WalletSelector />
      {account && <p>{account.address}</p>}
      <div className="flex flex-col mt-3 mx-2">
        <div className="rounded-sm bg-gray-200 w-auto m-1 h-12 flex justify-center items-center cursor-pointer">Start Micropayment</div>
        <div className="rounded-sm bg-gray-200 w-auto m-1 h-12 flex justify-center items-center cursor-pointer">Receive Micropayment</div>
        <div className="rounded-sm bg-gray-200 w-auto m-1 h-12 flex justify-center items-center cursor-pointer">Transaction History</div>
        <div className="rounded-sm bg-gray-200 w-auto m-1 h-12 flex justify-center items-center cursor-pointer">User Profile</div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
