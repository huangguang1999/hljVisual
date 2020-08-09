// 取出数组中具体数据(数组，行，列)
function renderData (arr, row, col) {
  var p = 0
  var a = arr[row]
  for (var i in a) {
    if (p === col) {
      return {key: i, value: a[i]}
    }
    p++
  }
  return ''
}
export {renderData}
