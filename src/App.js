import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import PunksList from "./components/PunksList";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xc1CC293e28F748EC47501Db48a53EA59901908B6&order_direction=asc"
      );
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        {/* Is there any Punks? Show this ==> */}
        {punkListData.length > 0 && (
          <>
            <Main selectedPunk={selectedPunk} punkListData={punkListData} />

            <PunksList
              punkListData={punkListData}
              setSelectedPunk={setSelectedPunk}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
