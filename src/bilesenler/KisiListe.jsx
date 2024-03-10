import { useEffect, useState } from "react";
import Kisi from ".//Kisi";
import KisiSkelaton from "./KisiSkelaton";

function KisiListe() {
  const [veri, veriGuncelle] = useState([]);
  const [yukleniyor, yukleniyorGuncelle] = useState(true);

  useEffect(() => {
    const LSVeriCek = async () => localStorage.getItem("rehberJSON");

    async function rehberCek() {
      const rehberJSON = await LSVeriCek();
      const rehverVeri = JSON.parse(rehberJSON);

      veriGuncelle(rehverVeri);
      yukleniyorGuncelle(false);
    }

    setTimeout(rehberCek, 2000);
  }, []);

  return (
    <div className="row">
      {yukleniyor && <KisiSkelaton />}
      {veri.map((eleman) => (
        <Kisi key={eleman.id} ad={eleman.ad} tel={eleman.tel} />
      ))}
    </div>
  );
}

export default KisiListe;
