"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';

const Home = () => {
  const [search, setSearch] = useState('');
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const [daos, setDaos] = useState([
    {id: 0, name: "Ave", logo:"",  members:[]}
  ]);

  const connectWallet = async () => {
    console.log('connecting')
    if (window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setIsWalletConnected(true)
        console.log('connected'); 
        console.log(walletAddress)
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('MetaMask is not installed!');
    }
  };



  useEffect(() => {
    if ( window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts: string[]) => {
          if (accounts.length > 0){
            setWalletAddress(accounts[0]);
            setIsWalletConnected(true);
          } 
        })
        .catch((err: Error) => console.error(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ERC20 DAO</title>
      </Head>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ERC20 DAO</h1>
          {  !isWalletConnected ? <button className="bg-orange-500 text-white px-4 py-2 rounded-lg"
          onClick={connectWallet}>
            Connect Wallet
          </button>:
          <>
           <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
            Create a space
          </button> 
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Connected
        </button> 
        </>
        }
         
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="ml-4 flex space-x-4">
            <select className="px-4 py-2 border rounded-lg">
              <option>Spaces</option>
              <option>Network</option>
              <option>Plugins</option>
            </select>
            <select className="px-4 py-2 border rounded-lg">
              <option>Category</option>
              <option>Social</option>
              <option>Service</option>
              <option>Media</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {daos.map(dao => (
            <div key={dao.id} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex items-center mb-4">
                <img
                  src={dao.logo}
                  alt={dao.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold">{dao.name}</h2>
                  <p className="text-sm text-gray-500">{dao.members} members</p>
                </div>
              </div>
              <button className="bg-blue-500 text-white w-full py-2 rounded-lg">
                Join
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
