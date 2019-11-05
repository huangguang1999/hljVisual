// 将数组数据渲染
function renderDate (arr, row, col) {
  var p = 0
  var a = arr[row]
  for (var i in a) {
    if (p === col) {
      return {key: i, value: a[i]}
    }
    p++
  }
  return null
}
export {renderDate}
