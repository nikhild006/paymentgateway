// Fetch the predefined amount value from Google Sheets
      fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/137n2JQAJmTjU8koO2-CN3bw0KsKwlJHE9OUy90sBPLU/values/B2?key=AIzaSyAogZnLbgKWqxLrfPBa8AOIKFXJ4AETUoE"
      )
        .then((response) => response.json())
        .then((data) => {
          // Update the input field with the fetched amount
          document.getElementById("amount").value = data.values[0][0];
        })
        .catch((error) => console.error("Error fetching amount:", error));

      function generateQRCode() {
        var amount = document.getElementById("amount").value;
        if (amount && !isNaN(amount)) {
          var qrCodeDiv = document.getElementById("qrcode");
          qrCodeDiv.innerHTML = "";
          // Generate QR code using the fetched amount
          var qrCodeData =
            "upi://pay?pa=8919169279@fam&pn=WIKIJS&am=" + amount + "&cu=INR";
          new QRCode(qrCodeDiv, qrCodeData);
        } else {
          alert("Please enter a valid amount");
        }
      }
