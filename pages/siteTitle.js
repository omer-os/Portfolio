//taken and reworked from here https://www.labnol.org/visitor-country-ip-address-200822
//original code by Amit Agarwal


const checkCountry = () => {
  return new Promise((resolve, reject) => {
    window
      .fetch("https://ip2c.org/self")
      .then((data) => data.text())
      .then((data) => {
        const [status, country] = String(data).split(";");
        if (status !== "1") {
          console.log("Unable to fetch country, defaulting to normal title");
        }

        if (country != "UK"){
            document.title = "Rosia E Evans Portfolio"
            document.getElementById("siteTitle").innerHTML = "Rosia E Evans"
            document.getElementById("profileImage").src = "images/Profile3.png"
        }else{
            document.title = "Nye Evans Portfolio"
            document.getElementById("siteTitle").innerHTML = "Nye Evans"
            document.getElementById("profileImage").src = "images/Profile2.png"
        }
        })
      })
};

checkCountry();
