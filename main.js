document.getElementById("depositok").addEventListener("click", function() {
    let moneyin = parseFloat(document.getElementById("depositin").value);
    // let showdeposit = parseFloat(document.getElementById("depositblnc").innerHTML);
    let blance = parseFloat(document.getElementById("blance").innerHTML);
    let totaldepo = moneyin + 0;
    let totalblnc = moneyin + blance;
    document.getElementById("depositblnc").innerHTML = totaldepo;
    document.getElementById("depositin").value = " ";
    document.getElementById("blance").innerHTML = totalblnc;
});



document.getElementById("withdrawok").addEventListener("click", function() {
    let moneyout = parseFloat(document.getElementById("withdrawin").value);
    let blancewithdraw = parseFloat(document.getElementById("blance").innerHTML);
    let totalBlanceAfterWithdraw = blancewithdraw - moneyout
    let sumwithdraw = moneyout ;
    document.getElementById("withdrawblnc").innerHTML = sumwithdraw;
    document.getElementById("withdrawin").value = "";

    document.getElementById("blance").innerHTML = totalBlanceAfterWithdraw;
});