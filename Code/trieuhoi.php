

<!DOCTYPE html>
<html>
<head>
	<title>Triệu hồi cực mạnh</title>
	
<meta name="viewport" >
	<link rel="stylesheet" type="text/css" href="x.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/styles/metro/notify-metro.css" />
<script src="https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js"></script>
	
	

		

</head>
<body>

<img src="img/logo.png" width=" 280px" height="auto" id="im">


<script type="text/javascript">
	var limit = Math.floor(Math.random() * 1000); 
	alert(" Bạn được Dâu-sama ban phước cho " + limit +" bùa \n\ (Tớ chưa x2.5 đâu nhá )");


</script>

<div >
<div style="width: 50% ; float: left;">
<a href="javascript:b()" ><img src="img/bua1.png"  ></a>
<p>Triệu hồi 1 lần</p> </div>
<div  style="width: 50%; float: left;">
<a href="javascript:c()"><img src="img/bua.png" ></a>
<p>Triệu hồi 10 lần</p> </div>
 </div>

<div style="clear: left;"></div>


<hr />
<div class="hidden" id="secret-div">

	<div id="a2" style="margin: auto;">
		<div id="card"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px"  onclick="as()" >
  </div> 
  <div class="back">
	<img src="" id="img1">
	<p id ="tt" >Đây là TT	</p>
  </div> 



</div> </div></div>
    	

<div class="hidden" id="secret-div1">
		<div><div id="a1" >
			<div id="card1"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px" onclick="as1()" >
  </div> 
  <div class="back">
    	<img src="" id="imgs1" width="70px" height="auto">
    	<p><span id ="tx1" >Đây là Tx</span></p></div>
  </div> 
</div>


	

		<div id="a1" >
<div id="card2"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px"  onclick="as2()" >
  </div> 
  <div class="back">
    	<img src="" id="imgs2" width="70px" height="auto">
    	<p><span id ="tx2" >Đây là Tx</span></p></div></div></div>

		<div id="a1" >
<div id="card3"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px"  onclick="as3()" >
  </div> 
  <div class="back">
    	<img src="" id="imgs3" width="70px" height="auto">
    	<p><span id ="tx3" >Đây là Tx</span></p></div></div></div>

    			<div id="a1" >
<div id="card4"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px"  onclick="as4()"  >
  </div> 
  <div class="back">
    	<img src="" id="imgs4" width="70px" height="auto">
    	<p><span id ="tx4" >Đây là Tx</span></p></div></div></div>
    			<div id="a1" >
<div id="card5"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px"  onclick="as5()" >
  </div> 
  <div class="back">
    	<img src="" id="imgs5" width="70px" height="auto">
    	<p><span id ="tx5" >Đây là Tx</span></p></div></div></div>
    			<div id="a1" >
<div id="card6"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px" onclick="as6()"  >
  </div> 
  <div class="back">
    	<img src="" id="imgs6" width="70px" height="auto">
    	<p><span id ="tx6" >Đây là Tx</span></p></div></div></div>
    			<div id="a1" >
<div id="card7"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px"  onclick="as7()" >
  </div> 
  <div class="back">
    	<img src="" id="imgs7" width="70px" height="auto">
    	<p><span id ="tx7" >Đây là Tx</span></p></div></div></div>
    			<div id="a1" >
<div id="card8"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px"  onclick="as8()" >
  </div> 
  <div class="back">
    	<img src="" id="imgs8" width="70px" height="auto">
    	<p><span id ="tx8" >Đây là Tx</span></p></div></div></div>
    			<div id="a1" >
<div id="card9"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px"  onclick="as9()" >
  </div> 
  <div class="back">
    	<img src="" id="imgs9" width="70px" height="auto">
    	<p><span id ="tx9" >Đây là Tx</span></p></div></div></div>
    			<div id="a1" >
<div id="card10"> 
  <div class="front" style="margin-top:30px;"> 
 <img src="img/logo.png" width="150px"  onclick="as10()" >
  </div> 
  <div class="back">
    	<img src="" id="imgs10" width="70px" height="auto">
    	<p><span id ="tx10" >Đây là Tx</span></p></div></div></div>


</div> 












<script type="text/javascript" src="javas11.js"></script>
<script type="text/javascript" >
	

function b(){


   if(demb>=limit){
    alert("Hết Lượt");

window.event.stopPropagation();

}

$("#card").flip(false);
demb=demb+1;

    $.notify("Bạn đã dùng "+ (demb) +" bùa \n\ " + "Bạn còn "+ (limit-demb) +" bùa", "warn");
  
     document.getElementById("secret-div1").style.display = "none";
var SSR1 =Math.floor(Math.random() * 27); 
  
var SR1 =Math.floor(Math.random() * 42); 
var R1 =Math.floor(Math.random() * 30); 
var x =Math.floor(Math.random() * 99); 


if(x==0)
  {

    document.getElementById("tt").innerHTML = SSR[SSR1];
    document.getElementById("img1").src= hinh[SSR1]; }
else {
  if(x>=1&&x<26)
  {

    document.getElementById("tt").innerHTML = SR[SR1] ;
    document.getElementById("img1").src= hinh1[SR1]; }

  else {

    document.getElementById("tt").innerHTML = R[R1];

 
    document.getElementById("img1").src= hinh2[R1]; }





document.getElementById("secret-div").style.display = "inline";

}}



function c(){

document.getElementById("secret-div").style.display = "none";

   if((limit-demb)<10){
    alert("Không đủ");
    window.event.stopPropagation();

   }

$("#card1").flip(false);
$("#card2").flip(false);
$("#card3").flip(false);
$("#card4").flip(false);
$("#card5").flip(false);
$("#card6").flip(false);
$("#card7").flip(false);
$("#card8").flip(false);
$("#card9").flip(false);
$("#card10").flip(false);

demb=demb+10;


  $.notify("Bạn đã dùng "+ (demb) +" bùa \n\ " + "Bạn còn "+ (limit-demb) +" bùa", "warn");

<?php 
for ($i = 1; $i <= 10; $i++) { ?>
var SSR2 =Math.floor(Math.random() * 27); 
var SR2 =Math.floor(Math.random() * 42); 
var R2 =Math.floor(Math.random() * 30); 
var x =Math.floor(Math.random() * 99); 
if(x==0){
    tx<?php echo $i ?>.innerHTML = SSR[SSR2];
    imgs<?php echo $i ?>.src= hinh[SSR2]; }


else{
  if(x>=1 && x<26){
    tx<?php echo $i ?>.innerHTML = SR[SR2];
    imgs<?php echo $i ?>.src= hinh1[SR2]; }

else {

    tx<?php echo $i ?>.innerHTML = R[R2];
    imgs<?php echo $i ?>.src= hinh2[R2]; 
 }
}




<?php }?> 


document.getElementById("secret-div1").style.display = "inline";




}

</script>

</body>
</html>