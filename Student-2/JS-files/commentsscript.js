function validateForm(){

  var textarea1=document.getElementById('textarea-1').value;
  var radiobtn1=document.getElementById('radio-1');
  var radiobtn2=document.getElementById('radio-2');
  var radiobtn3=document.getElementById('radio-3');
  var radiobtn4=document.getElementById('radio-4');
  var radiobtn5=document.getElementById('radio-5');
  var radiobtn6=document.getElementById('radio-6');
  var radiobtn7=document.getElementById('radio-7');
  var radiobtn8=document.getElementById('radio-8');
  var radiobtn9=document.getElementById('radio-9');
  var radiobtn10=document.getElementById('radio-10');
  var ratingcard=document.getElementById('ratingcard');
  var form=document.getElementById('form'); 
  var required=document.getElementById('required');   
  var required2=document.getElementById('required2');   

  
  if(!radiobtn1.checked && !radiobtn2.checked && !radiobtn3.checked && !radiobtn4.checked && !radiobtn5.checked && !radiobtn6.checked && !radiobtn7.checked && !radiobtn8.checked && !radiobtn9.checked && !radiobtn10.checked ){
    ratingcard.style.boxShadow="0px 0px 8px 0px rgba(255, 0, 0, 0.4)";
    required.innerHTML="*Required";

    setTimeout(() => {
      ratingcard.style.boxShadow="0px 0px 8px 0px rgba(0, 0, 0, 0.1)";
      required.innerHTML="";
    }, 2500);
  }else if(textarea1==""){
    textarea.style.boxShadow="0px 0px 8px 0px rgba(255, 0, 0, 0.4)";
    required2.innerHTML="*Required";
    setTimeout(() => {
      textarea.style.boxShadow="0px 0px 8px 0px rgba(0, 0, 0, 0.1)";
      required2.innerHTML="";
    }, 2500);
  }else{
    form.style.display="none";   
    document.getElementById('thanks').style.display="block";

    form.setAttribute("action", "mailto:dineth.20223003@iit.ac.lk");
    form.setAttribute("method", "post");
    form.setAttribute("enctype", "text/plain");
    form.submit();

    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }
  


  
}
