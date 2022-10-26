fetch('http://www.254shadesofgray.com/api/GreyOfTheDay')
  .then((response) => response.json())
  .then((data) => {
      let Name = document.getElementById("Name");
      let HexValue = document.getElementById("HexValue");

      Name.innerHTML = data.Name
      HexValue.innerHTML = data.HexValue
  });