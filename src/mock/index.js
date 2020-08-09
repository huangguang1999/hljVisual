// 引入mockjs
const Mock = require('mockjs')

// 创建拦截请求
const produceSearchData = function () {
  return [
    [
      {
        'key': 'dataName',
        'value': '2018年中心型城市指标数据'
      }
    ],
    [
      {
        'key': 'dataName',
        'value': '2018年煤城型城市指标数据'
      }
    ],
    [
      {
        'key': 'dataName',
        'value': '2018年生态型城市指标数据'
      }
    ],
    [
      {
        'key': 'dataName',
        'value': '2018年黑龙江省各市指标数据'
      }
    ]
  ]
}

Mock.mock('/mock/searchData', produceSearchData)
