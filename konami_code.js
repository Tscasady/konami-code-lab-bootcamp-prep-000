const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0

function init() {
    const main = document.body
    main.addEventListener('keydown', function(e) {
      const key = parseInt(e.which)
      if (key === code[index]) {
        index++;
      }
      if (index === code.length -1) {
        alert("Hurray");
        index = 0;

      } 
    })
}