function sendMail() {
    var params = {
        name: document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value ,
    };

  const serviceID = "service_ugkfodl";
  const templateID = "template_48hrb5r"

 emailjs
 .send(serviceID,templateID,params)
 .then((res) => {
        document.getElementById("nema").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message send successfully");
    })
    .catch((err) => console.log(err));
}
