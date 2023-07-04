function ingresar(){
    let name = document.getElementById("name").value;
    let txt;


    if (name==null ||name==0 || name.length<=1|| name.length>=15  ) {
      txt = "texto invalido";
    } else {
      txt = "valido";
    }
    document.getElementById("dimo").style.color="red";
    document.getElementById("dimo").innerHTML = txt;



    let id = document.getElementById("id").value;
    let ttt;


    if (id==null ||id==0 || id.length<=1|| id.length>=30  ) {
      ttt = "correo no valido";
    } else {
      ttt = "valido";
    }   
    document.getElementById("domo").style.color="red";
    document.getElementById("domo").innerHTML = ttt;



    let comments=document.getElementById("comments").value; 
    let tot;

    if(comments===null||comments==0 || comments.length<=1|| comments.length<=20 ){
        tot="debes mejorar tu comentario";
    } else{
        tot="gracias por tu comentario";
    }
    document.getElementById("com").style.color="red";
    document.getElementById("com").innerHTML=tot;

    
    
















}


function aumentar(){
  let emaill= document.getElementById("emaill").value; 
  let pll; 

  if(emaill==null|emaill==0 || emaill.length<=1 || emaill.length<=15 ){
    pll="completa tu correo"; 


  }
  else{
    pll="gracias por completar"
  }
  document.getElementById("fott").style.color="red";
  document.getElementById("fott").innerHTML=pll;






}


document.addEventListener('keyup', e=>{
  if(e.target.matches('#buscador')){
    document.querySelectorAll('#servicios,#noticias,#galeria,#promocion,#banner,#productos').forEach(fruta=>{
      fruta.textContent.toLowerCase().includes(e.target.value)
      ?fruta.classList.remove('filtro')
      :fruta.classList.add('filtro');

    })

  }
})



