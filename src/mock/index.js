// 引入mockjs
import Mock from 'mockjs'

// 创建拦截请求
const search = Mock.mock(
  'http://118.25.91.106:8080/v2/query/2', 'get', (req, res) => {
    return {
      code: 200,
      data: [
        {
          key: '2017年中心型城市服务业信息化',
          value: '77.73'
        }
      ]
    }
  })
export default{
  search
}
