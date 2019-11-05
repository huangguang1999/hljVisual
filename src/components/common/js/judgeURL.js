import {dictionary} from './dictionary'

function judgeURL (areaChoose, timeChoose, dataElementChoose) {
  let jURL = ''
  let ip = 'http://118.25.91.106:8080/main/'
  if (areaChoose === '黑龙江省' && timeChoose === '2015 - 2017') { // 第四个接口实现
    dataElementChoose = dictionary(dataElementChoose)
    jURL = ip + 'get3y/' + dataElementChoose
    return jURL
  } else if (areaChoose === '东北三省' && dataElementChoose === '宽带接入用户增长率') {
    jURL = ip + 'getPrvns/2017'
    return jURL
  } else if (areaChoose === '东北三省' && dataElementChoose === '移动电话用户') {
    jURL = ip + 'getPrvns/1517'
    return jURL
  } else if (areaChoose === '中心型城市群' || areaChoose === '煤城型城市群' || areaChoose === '生态型城市群') { // 第三个接口实现
    areaChoose = dictionary(areaChoose)
    dataElementChoose = dictionary(dataElementChoose)
    jURL = ip + 'getGroup/' + timeChoose + '/' + areaChoose + '/' + dataElementChoose
    return jURL
  } else {
    areaChoose = dictionary(areaChoose)
    jURL = ip + 'getSingle/' + timeChoose + '/' + areaChoose
    return jURL
  }
}

export {judgeURL}
