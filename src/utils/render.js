// 渲染方法

// 渲染表格X轴数据的方法
export function renderTableList (resOption) {
  let list = []
  for (let i = 0; i < resOption.length; i++) {
    list.push(
      {label: resOption[i][0].value, width: '', placeholder: '请输入内容', type: 'text', model: 'data' + i}
    )
  }
  return list
}

// 渲染表格数据的方法
export function renderTableData (resOption) {
  let tableData = []
  for (let i = 0; i < resOption[0].length - 1; i++) {
    let obj = {}
    for (let j = 0; j < resOption.length; j++) {
      obj['data' + j] = resOption[j][i + 1].value + ''
    }
    tableData.push(obj)
  }
  return tableData
}
