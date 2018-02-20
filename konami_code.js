
function init() {
    const main = document.body
    main.addEventListener('keydown', function(e) {
      var key = parseInt(e.which)
      if (key === code[index]) {
        index = index + 1
      }
      if (index === code.length) {
        alert("Hurray");
        index = 0;

      } 
    })
}