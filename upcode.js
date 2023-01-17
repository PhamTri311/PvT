var name=prompt('Vui lòng nhập tên của bạn:')
console.log(name)
if (name===''){
    document.querySelector('#name').innerHTML=`user`
} else{
document.getElementById('name').innerHTML=`${name}`
}
var array=['bau','ca','cua','huou','tom','ga'];
var square__one=document.querySelector('.bottom__square-one');
var square__two=document.querySelector('.bottom__square-two');
var square__three=document.querySelector('.bottom__square-three');
var button__three=document.querySelector('.btn__stop');
button__one=document.querySelector('.btn__activity');
button__one.onclick=function (){
  
   var b= setInterval(function (){
 setTimeout(function(){
    square__one.innerHTML=`<img class="fontsize" src="${array[Math.floor(Math.random()*6)]}.png">`;
    square__two.innerHTML=`<img class="fontsize" src="${array[Math.floor(Math.random()*6)]}.png">`;
    square__three.innerHTML=`<img class="fontsize" src="${array[Math.floor(Math.random()*6)]}.png">`;
    button__three.onclick=function(e){

    clearInterval(b)
//bầu
var one__nameimage=document.querySelector('.bottom__square-one').querySelector('.fontsize').getAttribute("src");
var fullnamesquare='';
for (var i1=0; i1<one__nameimage.length; i1++) {
         if (one__nameimage[i1]!='.'){
       fullnamesquare=fullnamesquare+`${one__nameimage[i1]}`;
         } 
         else{
            break;
         }
      }
var two__nameimage=document.querySelector('.bottom__square-two').querySelector('.fontsize').getAttribute("src");
var fullnamesquare2='';          
for (var i2=0; i2<two__nameimage.length; i2++) {
               if (two__nameimage[i2]!='.'){
             fullnamesquare2=fullnamesquare2+`${two__nameimage[i2]}`;
               } 
               else{
                  break;
               }
            }
var three__nameimage=document.querySelector('.bottom__square-three').querySelector('.fontsize').getAttribute("src");
var fullnamesquare3='';          
for (var i3=0; i3<three__nameimage.length; i3++) {
               if (three__nameimage[i3]!='.'){
             fullnamesquare3=fullnamesquare3+`${three__nameimage[i3]}`;
               } 
               else{
                  break;
               }
            }
      
var caculator=0;
var caculator2=0;
var caculator3=0;
var charbau='bau';
if (charbau==fullnamesquare){
      if( Number(document.querySelector('.bau').innerText)>0){
        caculator+=Number(document.querySelector('.bau').innerText)*200;
        console.log(caculator)}
     }
if (charbau==fullnamesquare2){
  
     if (Number(document.querySelector('.bau').innerText)>0){
      caculator2+=Number(document.querySelector('.bau').innerText)*200;
      console.log(caculator2)
     }}
if (charbau==fullnamesquare3){
     
     if (Number(document.querySelector('.bau').innerText)>0){
      caculator3+=Number(document.querySelector('.bau').innerText)*200;
      console.log(caculator3)

     }}
   var moneybau=caculator+caculator2+caculator3;

/////cá
var caculatorca=0;
var caculator2ca=0;
var caculator3ca=0;
var charca='ca';
if (charca==fullnamesquare){
      if(Number(document.querySelector('.ca').innerText)>0){
        caculatorca+=Number(document.querySelector('.ca').innerText)*200;
       }
     }
if (charca==fullnamesquare2){
     if (Number(document.querySelector('.ca').innerText)>0){
      caculator2ca+=Number(document.querySelector('.ca').innerText)*200;
     
     }}
if (charca==fullnamesquare3){
     if (Number(document.querySelector('.ca').innerText)>0){
      caculator3ca+=Number(document.querySelector('.ca').innerText)*200;
     }}
   var moneyca=caculatorca+caculator2ca+caculator3ca;

//tom
var caculatortom=0;
var caculator2tom=0;
var caculator3tom=0;
var chartom='tom';
if (chartom==fullnamesquare){
      if(Number(document.querySelector('.tom').innerText)>0){
        caculatortom+=Number(document.querySelector('.tom').innerText)*200;
       }
     }
if (chartom==fullnamesquare2){
     if (Number(document.querySelector('.tom').innerText)>0){
      caculator2tom+=Number(document.querySelector('.tom').innerText)*200;
     
     }}
if (chartom==fullnamesquare3){
     if (Number(document.querySelector('.tom').innerText)>0){
      caculator3tom+=Number(document.querySelector('.tom').innerText)*200;
     }}
     var moneytom=caculatortom+caculator2tom+caculator3tom;
//huou
var caculatorhuou=0;
var caculator2huou=0;
var caculator3huou=0;
var charhuou='huou';
if (charhuou==fullnamesquare){
      if(Number(document.querySelector('.huou').innerText)>0){
        caculatorhuou+=Number(document.querySelector('.huou').innerText)*200;
       }
     }
if (charhuou==fullnamesquare2){
     if (Number(document.querySelector('.huou').innerText)>0){
      caculator2huou+=Number(document.querySelector('.huou').innerText)*200;
     
     }}
if (charhuou==fullnamesquare3){
     if (Number(document.querySelector('.huou').innerText)>0){
      caculator3huou+=Number(document.querySelector('.huou').innerText)*200;
     }}
     var moneyhuou=caculatorhuou+caculator2huou+caculator3huou;
//ga
var caculatorga=0;
var caculator2ga=0;
var caculator3ga=0;
var charga='ga';
if (charga==fullnamesquare){
   if(Number(document.querySelector('.ga').innerText)>0){
     caculatorga+=Number(document.querySelector('.ga').innerText)*200;
    }
  }
if (charga==fullnamesquare2){
  if (Number(document.querySelector('.ga').innerText)>0){
   caculator2ga+=Number(document.querySelector('.ga').innerText)*200;
  
  }}
if (charga==fullnamesquare3){
  if (Number(document.querySelector('.ga').innerText)>0){
   caculator3ga+=Number(document.querySelector('.ga').innerText)*200;
  }}
  var moneyga=caculatorga+caculator2ga+caculator3ga;

//cua
var caculatorcua=0;
var caculator2cua=0;
var caculator3cua=0;
var charcua='cua';
if (charcua==fullnamesquare){
   if(Number(document.querySelector('.cua').innerText)>0){
      caculatorcua+=Number(document.querySelector('.cua').innerText)*200;
     }
   }
 if (charcua==fullnamesquare2){
   if (Number(document.querySelector('.cua').innerText)>0){
    caculator2cua+=Number(document.querySelector('.cua').innerText)*200;
   
   }}
 if (charcua==fullnamesquare3){
   if (Number(document.querySelector('.cua').innerText)>0){
    caculator3cua+=Number(document.querySelector('.cua').innerText)*200;
   }}
   var moneycua=caculatorcua+caculator2cua+caculator3cua;
  
   mymoney=moneybau+moneycua+moneyga+moneyhuou+moneytom+moneyca+Number(document.querySelector('.moneycurrent').innerText);
   document.querySelector('.moneycurrent').innerHTML=`${mymoney}`;
   document.querySelector('.cua').innerHTML=``;
   clicknumbercua=0;
   document.querySelector('.ga').innerHTML=``;
   clicknumberga=0;
   document.querySelector('.tom').innerHTML=``;
   clicknumbertom=0;
   document.querySelector('.huou').innerHTML=``;
   clicknumberhuou=0;
   document.querySelector('.ca').innerHTML=``;
   clicknumberca=0;
   document.querySelector('.bau  ').innerHTML=``;
   clicknumber=0;
    }},0)},50)}
var hover=document.querySelector('.fontsize__bau')
var mymoney=1000;
document.querySelector('.moneycurrent').innerHTML=`${mymoney}`;

var clicknumber=0;
hover.onclick=function(e){ 
   var money=document.querySelector('.moneycurrent');
   if (mymoney>0){
      mymoney-=100;   
      console.log(mymoney)
      money.innerHTML=`${mymoney}`;
      clicknumber+=1;
   document.querySelector('.number').innerHTML=`${clicknumber}`;
   } else{
      alert('Còn tiền đâu mà đặt bạn êi')
   }
} 
console.log( document.querySelector('.number').innerText)
//cá
var hoverca=document.querySelector('.fontsize__ca')
var clicknumberca=0;
hoverca.onclick=function(e){ 
   var money=document.querySelector('.moneycurrent');
   if (mymoney>0){
      mymoney-=100;   
      console.log(mymoney)
      money.innerHTML=`${mymoney}`;
      clicknumberca+=1;
   document.querySelector('.numberca').innerHTML=`${clicknumberca}`;
   } else{
      alert('Còn tiền đâu mà đặt bạn êi')
   }
}
//tom 
var hovertom=document.querySelector('.fontsize__tom')
var clicknumbertom=0;
hovertom.onclick=function(e){ 
   var money=document.querySelector('.moneycurrent');
   if (mymoney>0){
      mymoney-=100;   
      console.log(mymoney)
      money.innerHTML=`${mymoney}`;
      clicknumbertom+=1;
   document.querySelector('.numbertom').innerHTML=`${clicknumbertom}`;
   } else{
      alert('Còn tiền đâu mà đặt bạn êi')
   }
}
//huou
var hoverhuou=document.querySelector('.fontsize__huou')
var clicknumberhuou=0;
hoverhuou.onclick=function(e){ 
   var money=document.querySelector('.moneycurrent');
   if (mymoney>0){
      mymoney-=100;   
      console.log(mymoney)
      money.innerHTML=`${mymoney}`;
      clicknumberhuou+=1;
   document.querySelector('.numberhuou').innerHTML=`${clicknumberhuou}`;
   } else{
      alert('Còn tiền đâu mà đặt bạn êi')
   }
}
//ga
var hoverga=document.querySelector('.fontsize__ga')
var clicknumberga=0;
hoverga.onclick=function(e){ 
   var money=document.querySelector('.moneycurrent');
   if (mymoney>0){
      mymoney-=100;   
      console.log(mymoney)
      money.innerHTML=`${mymoney}`;
      clicknumberga+=1;
   document.querySelector('.numberga').innerHTML=`${clicknumberga}`;
   } else{
      alert('Còn tiền đâu mà đặt bạn êi')
   }
}
//cua
var hovercua=document.querySelector('.fontsize__cua')
var clicknumbercua=0;
hovercua.onclick=function(e){ 
   var money=document.querySelector('.moneycurrent');
   if (mymoney>0){
      mymoney-=100;   
      console.log(mymoney)
      money.innerHTML=`${mymoney}`;
      clicknumbercua+=1;
   document.querySelector('.numbercua').innerHTML=`${clicknumbercua}`;
   } 
   else{
      alert('Còn tiền đâu mà đặt bạn êi')
   }
}
















// document.querySelector('.number').onchange=function(e){
//    console.log(e.target.value)
// }

// hover1.onmouseover =function(e){
//    Object.assign(document.querySelector('.dat_1').style,{
//       display:'block',
//    })
// }  
// hover.onmouseleave=function(){
//    Object.assign(document.querySelector('.dat_1').style,{
//       display:'none',})
// }



//     button__three.onclick=function(e){
//         do{     console.log('phạm')}
//             while((e).isTrusted!=true)
        
// }};

// button__two.onclick=function (e){
// function image(array){
//     array.
// }
// khi click vào lắc thì square sẽ đổi hình liên tục và bấm dùng sẽ ko đổi nữa mà dừng lại
















// square__two.innerHTML=`<img class="fontsize" src="${array[Math.floor(Math.random()*6)]}.png">`
// console.log(array[Math.floor(Math.random()*6)])
// square__three.innerHTML=`<img class="fontsize" src="${array[Math.floor(Math.random()*6)]}.png">`
// console.log(array[Math.floor(Math.random()*6)])
// }
