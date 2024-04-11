// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         contact: document.getElementById("contactNo").value,
//         address: document.getElementById("address").value,
//         message: document.getElementById("message").value,
//     };
//     const serviceID = "service_dhaal1a"; // Replace with your service ID
//     const templateID = "template_cg5sf2k"; // Replace with your template ID
//     emailjs.send(serviceID, templateID, params)
//         .then(res => {
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("contactNo").value = "";
//             document.getElementById("address").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("Your message sent successfully!!");
//         })
//         .catch(err => console.log(err));
// }