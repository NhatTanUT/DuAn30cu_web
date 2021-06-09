// ======================================================================================

// var btn_delete = document.querySelectorAll(".btn-delete")
// btn_delete.forEach(element => {
// 	element.addEventListener("click", () => {
// 		// let id = this.getAttribute("class").split(" ")[3]
// 		// console.log(id);

// 		alert("H")
// 	})
// })




//=======================================================================================

// var btn_update = document.querySelectorAll(".btn-update")
// btn_update.forEach(element => {
//     element.addEventListener("click", function() {
//         var id = element.classList[4]
//         document.getElementsByClassName(id+" input-classid")[0].setAttribute("contenteditable", "true")
//         document.getElementsByClassName(id+" input-classname")[0].setAttribute("contenteditable", "true")
//         document.getElementsByClassName(id + " btn-save")[0].style.display = "block"
//         document.getElementsByClassName(id + " btn-cancel")[0].style.display = "block"
//     })
// })

// var btn_cancel = document.querySelectorAll(".btn-cancel")
// btn_cancel.forEach(element => {
//     element.addEventListener("click", function() {
//         var id = element.classList[1]
//         document.getElementsByClassName(id+" input-classid")[0].setAttribute("contenteditable", "false")
//         document.getElementsByClassName(id+" input-classname")[0].setAttribute("contenteditable", "false")
//         document.getElementsByClassName(id + " btn-save")[0].style.display = "none"
//         document.getElementsByClassName(id + " btn-cancel")[0].style.display = "none"
//     })
// })

// var addClass = document.querySelector(".btn-add-class")
// addClass.onclick = function() {
// 	document.querySelector(".form-add-class").style.display = "block"
// }

const primaryColor = '#4834d4'
const warningColor = '#f0932b'
const successColor = '#6ab04c'
const dangerColor = '#eb4d4b'

const themeCookieName = 'theme'
const themeDark = 'dark'
const themeLight = 'light'

const body = document.getElementsByTagName('body')[0]

function setCookie(cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = "expires="+d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
  var name = cname + "="
  var ca = document.cookie.split(';')
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

loadTheme()

function loadTheme() {
	var theme = getCookie(themeCookieName)
	body.classList.add(theme === "" ? themeLight : theme)
}

function switchTheme() {
	if (body.classList.contains(themeLight)) {
		body.classList.remove(themeLight)
		body.classList.add(themeDark)
		setCookie(themeCookieName, themeDark)
	} else {
		body.classList.remove(themeDark)
		body.classList.add(themeLight)
		setCookie(themeCookieName, themeLight)
	}
}

function collapseSidebar() {
	body.classList.toggle('sidebar-expand')
}

window.onclick = function(event) {
	openCloseDropdown(event)
}

function closeAllDropdown() {
	var dropdowns = document.getElementsByClassName('dropdown-expand')
	for (var i = 0; i < dropdowns.length; i++) {
		dropdowns[i].classList.remove('dropdown-expand')
	}
}

function openCloseDropdown(event) {
	if (!event.target.matches('.dropdown-toggle')) {
		// 
		// Close dropdown when click out of dropdown menu
		// 
		closeAllDropdown()
	} else {
		var toggle = event.target.dataset.toggle
		var content = document.getElementById(toggle)
		if (content.classList.contains('dropdown-expand')) {
			closeAllDropdown()
		} else {
			closeAllDropdown()
			content.classList.add('dropdown-expand')
		}
	}
}
