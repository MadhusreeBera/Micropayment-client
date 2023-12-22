import React from 'react'
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";

const GameAsset = () => {
  return (
    <div>
        <header className="flex justify-between items-center px-10 bg-gray-100 shadow-md">
        <img src="μPay-logos_transparent.png" alt="" className="h-24 m-2" />
        {/* <h1 className="text-3xl font-bold m-5">μPay</h1> */}
        <div>
          <WalletSelector />
        </div>
      </header>
      <div>
        <h1 className='text-5xl font-bold m-5 mx-auto text-center'>Buy Game Assets</h1>
        <div>
        <div className="lg:w-[20%] md:w-[40%] flex items-center justify-center flex-col m-auto my-4 px-4 py-2 rounded-md mx-4 operateCard bg-white min-h-[100px] shadow-md">
          <img src="Bulbasaur.png" alt="" />
          <div className='flex justify-end'>

          <p className="text-lg ">Bulbasaur</p>
          <button
        
        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
      >
        Approve
      </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default GameAsset