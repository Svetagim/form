window.onload=function () {
    console.log("you in");
    var addressValidation = document.getElementById("btnSubmit")
    addressValidation.onclick = function () {
        var formAddress = ["4 Privet Drive, London","Number 12, Grimmauld Place","St Mungo's Hospital for Magical Maladies and Injuries, London","Shrieking Shack, Hogsmeade"];
        var address;
        var indicatior = false;
        address = document.getElementById("myAddress").value;
        for (var i = 0; i < 4; i++) {
            console.log(i);
            if (formAddress[i] == address) {
                indicatior = true;
                return true;
            }
        }
            if (indicatior==false) {
                var returnAddress=document.getElementById("h4Address");
                returnAddress.style.visibility="visible";
                return false;
            }

    }

}





