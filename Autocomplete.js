function billingFunction(){
  var name = document.getElementById('shippingName').value;
  var zipCode = document.getElementById('shippingZip').value;
  if(document.getElementById('same').checked){
    document.getElementById('billingName').value = name;
    document.getElementById('billingZip').value = zipCode;
  }
  else {
    document.getElementById('billingName').value=null;
    document.getElementById('billingZip').value=null;
  }
}