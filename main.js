function changeRadius(ele, radius, unit) {
  unit || (unit = '%')
  const xRadius = radius.filter(function (e, idx) { return !(idx % 2) })
  const yRadius = radius.filter(function (e, idx) { return idx % 2 })
  const radiusStr = xRadius.map(function (e) { return e + unit }).join(' ') + ' /' + yRadius.map(function (e) { return e + unit }).join(' ')
  ele.style.borderRadius = radiusStr
}
window.onload = function () {
  const rect = document.getElementById('rect')
  const tl1 = document.getElementById('tl1')
  const tl2 = document.getElementById('tl2')
  const tr1 = document.getElementById('tr1')
  const tr2 = document.getElementById('tr2')
  const br1 = document.getElementById('br1')
  const br2 = document.getElementById('br2')
  const bl1 = document.getElementById('bl1')
  const bl2 = document.getElementById('bl2')
  const eles = [tl1, tl2, tr1, tr2, br1, br1, bl1, bl2]
  const radius = eles.map(function (ele) { return 0 })
  eles.forEach(function (ele, idx) {
    ele.addEventListener('input', function (e) {
      const val = parseInt(e.target.value)
      radius[idx] = val
      changeRadius(rect, radius)
    })
  })
}