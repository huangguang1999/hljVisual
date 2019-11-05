// 数据统一定义,怒要问我为什么这么多表,应为我懒
const DataElement = [
  // 黑龙江省 1-7，东三省8-9，地级市10-14
  // 中心型城市、中心型城市群各地市、生态型城市群各地市 10-15 缺少13
  { id: 0, name: '网络零售情况' },
  { id: 1, name: '对俄跨境邮政小包物流' },
  { id: 2, name: '信息化推进城乡协调发展' },
  { id: 3, name: '电子商务交易情况' },
  { id: 4, name: '电子健康档案城乡居民覆盖率' },
  { id: 5, name: '电子健康档案城乡居民覆盖增长率' },
  { id: 6, name: '社会保障卡普及率' },
  { id: 7, name: '社会保障卡普及增长率' },
  { id: 8, name: '移动电话用户' },
  { id: 9, name: '宽带接入用户增长率' },
  { id: 10, name: '应用效益' },
  { id: 11, name: '产业信息化' },
  { id: 12, name: '信息化发展环境' },
  { id: 13, name: '信息化发展指数' },
  { id: 14, name: '网络基础设施就绪度' },
  { id: 15, name: '发展指数 ' },
  { id: 16, name: '固定宽带普及率' },
  { id: 17, name: '移动宽带普及率 ' },
  { id: 18, name: '互联网宽带接入端口数 ' },
  { id: 19, name: '行政村光纤通达率 ' },
  { id: 20, name: '4G网络乡村覆盖率' },
  { id: 21, name: '县以上主城区免费WiFi基本覆盖率 ' },
  { id: 22, name: '关键信息基础设施网络安全检测评估率 ' },
  { id: 23, name: '党委网络安全工作责任制落实率' },
  { id: 24, name: '网络安全经费投入指数' },
  { id: 25, name: '信息产业收入增加值占GDP比例' },
  { id: 26, name: '信息化投入经费占财政经费总支出占比' },
  { id: 27, name: '信息化发展规划' },
  { id: 28, name: '社会各领域信息化发展意见和建议' },
  { id: 29, name: '基本公共服务事项网上办理率' },
  { id: 30, name: '政府信息公开上网率' },
  { id: 31, name: '网络零售额占比' },
  { id: 32, name: '年人均快递物流量' },
  { id: 33, name: '社会保障卡普及率' },
  { id: 34, name: '电子健康档案城乡居民覆盖率' },
  { id: 35, name: '农业测土配方施肥覆盖率 （森林防火在线监测系统覆盖率）' },
  { id: 36, name: '大型农机纳入农机管理信息系统率 （病虫害在线监测覆盖率）' },
  { id: 37, name: '数字化研发设计工具普及率' },
  { id: 38, name: '数字化生产线普及率' },
  { id: 39, name: '网上银行用户数' },
  { id: 40, name: '一卡通应用领域数' },
  { id: 41, name: '网络资源就续度' },
  { id: 42, name: '网络安全保障' },
  { id: 43, name: '网络基础设施就绪度' },
  { id: 44, name: '产业与投入' }
]
// 黑龙江省
// eslint-disable-next-line camelcase
const DataElement_hljProvice = [
  { id: 0, name: '网络零售情况' },
  { id: 1, name: '对俄跨境邮政小包物流' },
  { id: 2, name: '信息化推进城乡协调发展' },
  { id: 3, name: '电子商务交易情况' },
  { id: 4, name: '电子健康档案城乡居民覆盖率' },
  { id: 5, name: '电子健康档案城乡居民覆盖增长率' },
  { id: 6, name: '社会保障卡普及率' },
  { id: 7, name: '社会保障卡普及增长率' }
]
// 东三省
// eslint-disable-next-line camelcase
const DataElement_EstenProbice = [{ id: 8, name: '移动电话用户' }, { id: 9, name: '宽带接入用户增长率' }]
// 地级市
// eslint-disable-next-line camelcase
const DataElement_PrefectureLevelCity = [
  { id: 10, name: '应用效益' },
  { id: 11, name: '产业信息化' },
  { id: 12, name: '信息化发展环境' },
  { id: 13, name: '信息化发展指数' },
  { id: 14, name: '网络基础设施就绪度' }
]
// 中心型城市、中心型城市群各地市、生态型城市群各地市
// eslint-disable-next-line camelcase
const DataElement_KindCity = [
  { id: 10, name: '应用效益' },
  { id: 11, name: '产业信息化' },
  { id: 12, name: '信息化发展环境' },
  { id: 14, name: '网络基础设施就绪度' },
  { id: 15, name: '发展指数 ' }
]
const Area = [
  { id: 0, name: '黑龙江省' },
  { id: 1, name: '东北三省' },
  { id: 2, name: '黑龙江省各地市' },
  { id: 3, name: '中心型城市群' },
  { id: 4, name: '煤城型城市群' },
  { id: 5, name: '生态型城市群' },
  { id: 6, name: '哈尔滨' },
  { id: 7, name: '齐齐哈尔' },
  { id: 8, name: '牡丹江' },
  { id: 9, name: '佳木斯' },
  { id: 10, name: '大庆' },
  { id: 11, name: '鸡西' },
  { id: 12, name: '双鸭山' },
  { id: 13, name: '伊春' },
  { id: 14, name: '七台河' },
  { id: 15, name: '鹤岗' },
  { id: 16, name: '黑河' },
  { id: 17, name: '绥化' },
  { id: 18, name: '大兴安岭' }
]
// eslint-disable-next-line camelcase
const Area_1516 = [
  { id: 3, name: '中心型城市群' },
  { id: 4, name: '煤城型城市群' },
  { id: 5, name: '生态型城市群' },
  { id: 6, name: '哈尔滨' },
  { id: 7, name: '齐齐哈尔' },
  { id: 8, name: '牡丹江' },
  { id: 9, name: '佳木斯' },
  { id: 10, name: '大庆' },
  { id: 11, name: '鸡西' },
  { id: 12, name: '双鸭山' },
  { id: 13, name: '伊春' },
  { id: 14, name: '七台河' },
  { id: 15, name: '鹤岗' },
  { id: 16, name: '黑河' },
  { id: 17, name: '绥化' },
  { id: 18, name: '大兴安岭' }
]
// eslint-disable-next-line camelcase
const Area_17 = [
  { id: 0, name: '黑龙江省' },
  { id: 1, name: '东北三省' },
  { id: 3, name: '中心型城市群' },
  { id: 4, name: '煤城型城市群' },
  { id: 5, name: '生态型城市群' },
  { id: 6, name: '哈尔滨' },
  { id: 7, name: '齐齐哈尔' },
  { id: 8, name: '牡丹江' },
  { id: 9, name: '佳木斯' },
  { id: 10, name: '大庆' },
  { id: 11, name: '鸡西' },
  { id: 12, name: '双鸭山' },
  { id: 13, name: '伊春' },
  { id: 14, name: '七台河' },
  { id: 15, name: '鹤岗' },
  { id: 16, name: '黑河' },
  { id: 17, name: '绥化' },
  { id: 18, name: '大兴安岭' }
]
// eslint-disable-next-line camelcase
const Area_1517 = [
  { id: 0, name: '黑龙江省' },
  { id: 1, name: '东北三省' },
  { id: 3, name: '中心型城市群' },
  { id: 4, name: '煤城型城市群' },
  { id: 5, name: '生态型城市群' },
  { id: 6, name: '哈尔滨' },
  { id: 7, name: '齐齐哈尔' },
  { id: 8, name: '牡丹江' },
  { id: 9, name: '佳木斯' },
  { id: 10, name: '大庆' },
  { id: 11, name: '鸡西' },
  { id: 12, name: '双鸭山' },
  { id: 13, name: '伊春' },
  { id: 14, name: '七台河' },
  { id: 15, name: '鹤岗' },
  { id: 16, name: '黑河' },
  { id: 17, name: '绥化' },
  { id: 18, name: '大兴安岭' }
]

const Time = [{ id: 0, name: '2015 - 2017' }, { id: 1, name: '2015' }, { id: 2, name: '2016' }, { id: 3, name: '2017' }]

export default {
  Area_1517,
  Area_17,
  Area_1516,
  DataElement,
  Area,
  Time,
  DataElement_hljProvice,
  DataElement_EstenProbice,
  DataElement_PrefectureLevelCity,
  DataElement_KindCity
}
