import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 左中第一个echarts数据
    resDate: [],
    resXDate: '',
    resTitle: '',
    // 左中第二个echarts数据
    resDate2: [],
    resXDate2: '',
    resTitle2: '',
    // 右中echarts数据
    resDate3: [],
    resXDate3: '',
    resTitle3: '',
    // 右下第一个echarts数据
    resDate4: [],
    resXDate4: '',
    resTitle4: '',
    // 右下第二个echarts数据
    resDate5: [],
    resXDate5: '',
    resTitle5: '',
    // 右下第三个echarts数据
    resDate6: [],
    resXDate6: '',
    resTitle6: '',
    // 右下第四个echarts数据
    resDate7: [],
    resXDate7: '',
    resTitle7: ''
  },
  mutations: {
    refresh (state, resOption) {
      state.resDate = resOption
    },
    refreshXDate (state, resXDate) {
      state.resXDate = resXDate
    },
    refreshTitle (state, resTitle) {
      state.resTitle = resTitle
    },
    refresh2 (state, resOption) {
      state.resDate2 = resOption
    },
    refreshXDate2 (state, resXDate) {
      state.resXDate2 = resXDate
    },
    refreshTitle2 (state, resTitle) {
      state.resTitle2 = resTitle
    },
    refresh3 (state, resOption) {
      state.resDate3 = resOption
    },
    refreshXDate3 (state, resXDate) {
      state.resXDate3 = resXDate
    },
    refreshTitle3 (state, resTitle) {
      state.resTitle3 = resTitle
    },
    refresh4 (state, resOption) {
      state.resDate4 = resOption
    },
    refreshXDate4 (state, resXDate) {
      state.resXDate4 = resXDate
    },
    refreshTitle4 (state, resTitle) {
      state.resTitle4 = resTitle
    },
    refresh5 (state, resOption) {
      state.resDate5 = resOption
    },
    refreshXDate5 (state, resXDate) {
      state.resXDate5 = resXDate
    },
    refreshTitle5 (state, resTitle) {
      state.resTitle5 = resTitle
    },
    refresh6 (state, resOption) {
      state.resDate6 = resOption
    },
    refreshXDate6 (state, resXDate) {
      state.resXDate6 = resXDate
    },
    refreshTitle6 (state, resTitle) {
      state.resTitle6 = resTitle
    },
    refresh7 (state, resOption) {
      state.resDate7 = resOption
    },
    refreshXDate7 (state, resXDate) {
      state.resXDate7 = resXDate
    },
    refreshTitle7 (state, resTitle) {
      state.resTitle7 = resTitle
    }
  },
  actions: {
    refreshFun (context, resOption) {
      context.commit('refresh', resOption)
    },
    refreshXDateFun (context, resXDate) {
      context.commit('refreshXDate', resXDate)
    },
    refreshTitleFun (context, resTitle) {
      context.commit('refreshTitle', resTitle)
    },
    refreshFun2 (context, resOption) {
      context.commit('refresh2', resOption)
    },
    refreshXDateFun2 (context, resXDate) {
      context.commit('refreshXDate2', resXDate)
    },
    refreshTitleFun2 (context, resTitle) {
      context.commit('refreshTitle2', resTitle)
    },
    refreshFun3 (context, resOption) {
      context.commit('refresh3', resOption)
    },
    refreshXDateFun3 (context, resXDate) {
      context.commit('refreshXDate3', resXDate)
    },
    refreshTitleFun3 (context, resTitle) {
      context.commit('refreshTitle3', resTitle)
    },
    refreshFun4 (context, resOption) {
      context.commit('refresh4', resOption)
    },
    refreshXDateFun4 (context, resXDate) {
      context.commit('refreshXDate4', resXDate)
    },
    refreshTitleFun4 (context, resTitle) {
      context.commit('refreshTitle4', resTitle)
    },
    refreshFun5 (context, resOption) {
      context.commit('refresh5', resOption)
    },
    refreshXDateFun5 (context, resXDate) {
      context.commit('refreshXDate5', resXDate)
    },
    refreshTitleFun5 (context, resTitle) {
      context.commit('refreshTitle5', resTitle)
    },
    refreshFun6 (context, resOption) {
      context.commit('refresh6', resOption)
    },
    refreshXDateFun6 (context, resXDate) {
      context.commit('refreshXDate6', resXDate)
    },
    refreshTitleFun6 (context, resTitle) {
      context.commit('refreshTitle6', resTitle)
    },
    refreshFun7 (context, resOption) {
      context.commit('refresh7', resOption)
    },
    refreshXDateFun7 (context, resXDate) {
      context.commit('refreshXDate7', resXDate)
    },
    refreshTitleFun7 (context, resTitle) {
      context.commit('refreshTitle7', resTitle)
    }
  }
})

export default store
