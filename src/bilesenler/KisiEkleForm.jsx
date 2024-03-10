import { useState } from "react";

function KisiEkleForm() {
  const [yeniAd, adGuncelle] = useState("");
  const [yeniTel, telGuncelle] = useState("");

  function kisiEkle() {
    const yeniKisi = { id: yeniAd + yeniTel, ad: yeniAd, tel: yeniTel };

    //1 localstoragedan veriyi cek, js arraya dönüştür
    const rehberVeri = localStorage.getItem("rehberJSON");
    let rehberArray = JSON.parse(rehberVeri);

    //1-b bu kişi ve telefonu daha önce kayıtlı mı?
    const mevcutMu = rehberArray.some((eleman) => eleman.id === yeniKisi.id);

    if (mevcutMu !== true) {
      //2 js arraye yeni kişiyi push yap
      rehberArray.push(yeniKisi);

      //3 js arrayı JSONa dönüştür
      const yeniRehberJSON = JSON.stringify(rehberArray);

      //4 JSONı localstorage tekrar kaydet
      localStorage.setItem("rehberJSON", yeniRehberJSON);
    } else {
      alert("Bu kayıt mevcut!");
    }
  }

  return (
    <>
      <div className="row mb-5">
        <div className="col">
          <input
            value={yeniAd}
            onChange={(olay) => {
              adGuncelle(olay.currentTarget.value);
            }}
            type="text"
            className="form-control"
            placeholder="Ad Soyad"
          />
        </div>

        <div className="col">
          <input
            value={yeniTel}
            onChange={(olay) => {
              telGuncelle(olay.currentTarget.value);
            }}
            type="text"
            className="form-control"
            placeholder="Telefon"
          />
        </div>

        <div className="col-2">
          <button onClick={kisiEkle} className="btn btn-success">
            Ekle
          </button>
        </div>
      </div>
    </>
  );
}

export default KisiEkleForm;
