import axios, { Axios } from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">${konu[0]}</div>
  //   <div class="tab">${konu[1]}</div>
  //   <div class="tab">${konu[2]}</div>
  // </div>
  //
  const divTopics=document.createElement("div");
  divTopics.classList.add("topics");

  konu.forEach(element => {
    const divTab=document.createElement("div");
    divTab.classList.add("tab");
    divTab.textContent=element
    divTopics.appendChild(divTab);
  });


     return divTopics;
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  axios.get("http://localhost:5001/api/konular")
.then(res=>{
 // console.log(res.data.konular)
document.querySelector(secici).appendChild(Tablar(res.data.konular));
})
}

export { Tablar, tabEkleyici }
