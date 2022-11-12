const arr = [8, 0, 0, 5, 3, 5, 1, 4, 9, 2, 6, 5, 5, 7, 2, 2, 2, 0, 5, 3, 4, 7, 3, 9, 0]
let d = arr.sort(function (a, b) { return a - b })
let r = 0
let w = []
for (r in d) {
    if (d[r] == d[Number(r) + 1] || d[r] == Number(r) - 1) {
        continue
    } else {
        w.push(d[r])
    }
}
console.log(w)