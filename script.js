 const h1 = document.querySelector("h1");
 const calculo1 = document.querySelector("#calculo1")
 const calculo2 = document.querySelector("#calculo2")
 const buton = document.querySelector("#Btrespuesa")
 const form = document.querySelector("#formu")
 const resp = document.querySelector("#resp")

 form.addEventListener("submit", sumaDeElementos);

 function sumaDeElementos(event){

    event.preventDefault();

    const SumaList = calculo1.value + calculo2.value ;
    resp.innerText = "Respuesta :" + SumaList ;

 }

