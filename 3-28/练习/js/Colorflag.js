
function star(IniUl, count, colorBox) {
    let oUl = document.getElementById(IniUl);
    for (var i = 0; i < count; i++) {
      oUl.innerHTML += `<li style="background-color: ${colorBox[i % colorBox.length]}"></li>`
    }
    let aLi = oUl.getElementsByTagName("li")
    for (let i = 0; i < aLi.length; i++) {
      aLi[i].onmouseover = function () {
        aLi[i].style.backgroundColor = "green"
      }
      aLi[i].onmouseout = function () {
        aLi[i].style.backgroundColor = `${colorBox[i % colorBox.length]}`
      }
    }
  }