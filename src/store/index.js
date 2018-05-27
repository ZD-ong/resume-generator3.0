import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

  export default new Vuex.Store({
    state: {
      selected: 'profile',
      user: {
        id: '',
        username: ''
      },
      resume: {
        config: [
          { field: 'profile', icon: 'profile' },
          { field: 'education', icon: 'study' },
          { field: 'experience', icon: 'work' },
          { field: 'skills', icon: 'tool' },
          { field: 'projects', icon: 'project' },
          { field: 'awards', icon: 'prize' },
          { field: 'social', icon: 'twitter' }
        ],
        profile: {
          name: '',
          city: '大城市铁岭',
          age: '',
          phone: '',
          email: ''
        },
        education: [{
          school: 'AL',
          duration: '',
          degree: ''
        }],
        experience: [{
          company: '鸡飞狗跳公司',
          position: '首席装逼师',
          content: ''
        },{
          company: '鸡飞狗跳公司',
          position: '',
          content: ''
        }],
        skills: [{
          name: '',
          description: ''
        }],
        projects: [{
          name: '',
          link: '',
          description: '',
          keywords: ''
        }],
        awards: [{
          name: '再来十瓶',
          time: ''
        }],
        social: [{
          name: '',
          link: ''
        }]
      }
    },
  mutations: {
    switchTab(state, payload){
      state.selected = payload
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
    },
    removeUser(state){
      state.user.id = ''
    }
  }
})
