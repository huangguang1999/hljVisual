import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 第一个echarts数据
    resData: [],
    // 第二个echarts数据
    resData2: [],
    // 第三个echarts数据
    resData3: [],
    // 第四个echarts数据
    resData4: [],
    // 第五个echarts数据
    resData5: [],
    // 第六个echarts数据
    resData6: [],
    // 第七个echarts数据
    resData7: [],
    // 表格数据
    tableData: []
  },
  mutations: {
    refresh (state, resOption) {
      state.resData = resOption
    },
    refresh2 (state, resOption) {
      state.resData2 = resOption
    },
    refresh3 (state, resOption) {
      state.resData3 = resOption
    },
    refresh4 (state, resOption) {
      state.resData4 = resOption
    },
    refresh5 (state, resOption) {
      state.resData5 = resOption
    },
    refresh6 (state, resOption) {
      state.resData6 = resOption
    },
    refresh7 (state, resOption) {
      state.resData7 = resOption
    },
    retableData (state, resOption) {
      state.tableData = resOption
    }
  },
  actions: {
    refreshFun (context, resOption) {
      context.commit('refresh', resOption)
    },
    refreshFun2 (context, resOption) {
      context.commit('refresh2', resOption)
    },
    refreshFun3 (context, resOption) {
      context.commit('refresh3', resOption)
    },
    refreshFun4 (context, resOption) {
      context.commit('refresh4', resOption)
    },
    refreshFun5 (context, resOption) {
      context.commit('refresh5', resOption)
    },
    refreshFun6 (context, resOption) {
      context.commit('refresh6', resOption)
    },
    refreshFun7 (context, resOption) {
      context.commit('refresh7', resOption)
    },
    tableDataFun (context, resOption) {
      context.commit('retableData', resOption)
    }
  }
})

export default store
