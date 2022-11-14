const tru = document.querySelector(".true").innerText
let fal = document.querySelector(".false").innerText
function one() {
    document.querySelector(".false").innerText += 1
} function zero() {
    document.querySelector(".false").innerText += 0
}
function two() {
    document.querySelector(".false").innerText += 2
} function three() {
    document.querySelector(".false").innerText += 3
} function four() {
    document.querySelector(".false").innerText += 4
} function five() {
    document.querySelector(".false").innerText += 5
} function six() {
    document.querySelector(".false").innerText += 6
} function seven() {
    document.querySelector(".false").innerText += 7
} function eight() {
    document.querySelector(".false").innerText += 8
} function nine() {
    document.querySelector(".false").innerText += 9
} function zeros() {
    document.querySelector(".false").innerText += "00"
}
function ac() {
    document.querySelector(".true").innerText = ""
    document.querySelector(".false").innerText = ""
}
let text = ""
function del() {
    let g = document.querySelector(".false").innerText
    if (g.length > 0) {
        let text = ""
        let r = 0
        for (r in g) {
            if (r < g.length - 1) {
                text += g[r]
            }
        }
        document.querySelector(".false").innerText = text
    } else {
        let u = document.querySelector(".true").innerText
        let g = document.querySelector('.false').innerText
        let r = 0
        let text = ""
        for (r in u) {
            if (r < u.length - 1) {
                text += u[r]
            }
        }
        document.querySelector(".false").innerText = text
        document.querySelector(".true").innerText = ""
    }
}
function um() {
    let g = document.querySelector(".false").innerText
    let u = document.querySelector(".true").innerText
    document.querySelector(".false").innerText = ""
    if (u == "" && g !== "") {
        document.querySelector(".true").innerText = g + "*"
        document.querySelector(".false").innerText = ""
    } else if (u !== "" && g == "") {
        document.querySelector(".true").innerText = u
    } else {
        let text = ""
        let r = 0
        for (r in u) {
            if (r >= u.length - 1) {
                break
            } else {
                text += u[r]
            }
        }
        document.querySelector(".true").innerText = Number(text) * Number(g)
    }
}
function delet() {
    let g = document.querySelector(".false").innerText
    let u = document.querySelector(".true").innerText
    document.querySelector(".false").innerText = ""
    if (u == "" && g !== "") {
        document.querySelector(".true").innerText = g + ":"
        document.querySelector(".false").innerText = ""
    } else if (u !== "" && g == "") {
        document.querySelector(".true").innerText = u
    } else {
        let text = ""
        let r = 0
        for (r in u) {
            if (r > u.length - 1) {
                break
            } else {
                text += u[r]
            }
        }
        document.querySelector(".true").innerText = Number(text) / Number(g)
    }
}
function plus() {
    let g = document.querySelector(".false").innerText
    let u = document.querySelector(".true").innerText
    document.querySelector(".false").innerText = ""
    if (u == "" && g !== "") {
        document.querySelector(".true").innerText = g + "+"
        document.querySelector(".false").innerText = ""
    } else if (u !== "" && g == "") {
        document.querySelector(".true").innerText = u
    } else {
        let text = ""
        let r = 0
        for (r in u) {
            if (r >= u.length - 1) {
                break
            } else {
                text += u[r]
            }
        }
        document.querySelector(".true").innerText = Number(text) + Number(g)
    }
}
function minus() {
    let g = document.querySelector(".false").innerText
    let u = document.querySelector(".true").innerText
    document.querySelector(".false").innerText = ""
    if (u == "" && g !== "") {
        document.querySelector(".true").innerText = g + "-"
        document.querySelector(".false").innerText = ""
    } else if (u !== "" && g == "") {
        document.querySelector(".true").innerText = u
    } else {
        let text = ""
        let r = 0
        for (r in u) {
            if (r >= u.length - 1) {
                break
            } else {
                text += u[r]
            }
        }
        document.querySelector(".true").innerText = Number(text) - Number(g)
    }
}