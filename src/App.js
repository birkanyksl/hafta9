import { useEffect, useState } from "react";
import Kisi from "./bilesenler/Kisi";
import KisiSkelaton from "./bilesenler/KisiSkelaton";

function App() {
  const [veri, veriGuncelle] = useState([]);
  const [yukleniyor, yukleniyorGuncelle] = useState(true);

  useEffect(() => {
    const LSVeriCek = async () => localStorage.getItem("rehberJSON");

    async function rehberCek() {
      const rehberJSON = await LSVeriCek();
      const rehberVeri = JSON.parse(rehberJSON);

      veriGuncelle(rehberVeri);
      yukleniyorGuncelle(false);
    }

    setTimeout(rehberCek, 2000);
  }, []);

  //console.log(veri);

  return (
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>

        <div className="row">
          {yukleniyor && <KisiSkelaton />}
          {veri.map((eleman) => (
            <Kisi key={eleman.id} ad={eleman.ad} tel={eleman.tel} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
