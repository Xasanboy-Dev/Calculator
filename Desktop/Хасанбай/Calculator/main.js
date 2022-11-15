let r = 0
const down = document.querySelector(".down")
for (r; r <= 9; r++) {
    const btn = (document.createElement("button"))
    btn.textContent = r.toString()
    btn.onclick = (event) => {
        document.querySelector(".true").innerText += event.target.textContent
    }
    down.append(btn)
}

let d = 0
let btn = document.querySelectorAll("button")
for (d in btn) {
    if (Number(btn[d].innerText).toString() == "NaN") {
        btn[d].onclick = (event) => {
            if (event.target.textContent == "AC") {
                document.querySelector(".true").innerText = ""
                document.querySelector(".false").innerText = ""
            } else if (event.target.textContent == "DEL") {
                let tr = document.querySelector(".true").innerText
                if (tr.length > 0) {
                    let r = 0
                    let text = ""
                    for (r in tr) {
                        if (r == tr.length - 1) {
                            break
                        } else {
                            text += tr[r]
                        }
                    }
                    document.querySelector(".true").innerText = text
                } else {
                    let fl = document.querySelector(".false").innerText
                    let r = 0
                    let text = ""
                    for (r in fl) {
                        if (r == fl.length - 1) {
                            break
                        } else {
                            text += fl[r]
                        }
                    }
                    document.querySelector(".false").innerText = ""
                    document.querySelector(".true").innerText = text
                }
            } else if (event.target.textContent == "+") {
                let tr = document.querySelector(".true").innerText
                let fl = document.querySelector(".false").innerText.split(" ")[0]
                document.querySelector(".false").innerText = ""
                document.querySelector(".false").innerText = (Number(tr) + Number(fl)) + " +"
                document.querySelector(".true").innerText = ""
            } else if (event.target.textContent == "-") {
                let tr = document.querySelector(".true").innerText
                let fl = document.querySelector(".false").innerText
                document.querySelector(".false").innerText = Number(fl) - Number(tr)
                document.querySelector(".true").innerText = ""
            } else if (event.target.textContent == "*") {
                let tr = document.querySelector(".true").innerText.split(" ")
                let fl = document.querySelector(".false").innerText.split(" ")
                if (fl[fl.length - 1] == "+") {
                    document.querySelector(".false").innerText = Number(fl[0]) * Number(tr)
                    document.querySelector(".true").innerText = ""
                } else {
                    if (document.querySelector(".false").innerText == '') {
                        document.querySelector(".false").innerText = document.querySelector(".true").innerText
                        document.querySelector(".true").innerText = ""
                    } else {
                        document.querySelector('.false').innerText = Number(document.querySelector(".false").innerText) * Number(document.querySelector(".true").innerText)
                        document.querySelector(".true").innerText = ""
                    }
                }
            } else if (event.target.textContent == ":") {
                let tr = document.querySelector(".true").innerText.split(" ")
                let fl = document.querySelector(".false").innerText.split(" ")
                if (fl[fl.length - 1] == "+") {
                    document.querySelector(".false").innerText = Number(fl[0]) / Number(tr)
                    document.querySelector(".true").innerText = ""
                } else {
                    if (document.querySelector(".false").innerText == '') {
                        document.querySelector(".false").innerText = document.querySelector(".true").innerText
                        document.querySelector(".true").innerText = ""
                    } else {
                        document.querySelector('.false').innerText = Number(document.querySelector(".false").innerText) / Number(document.querySelector(".true").innerText)
                        document.querySelector(".true").innerText = ""
                    }
                }
            } else {

            }
        }
    } else {
        btn[d].onclick = (event) => {
            document.querySelector(".true").innerText += event.target.textContent
        }
    }
}