import Vue from 'vue'

const state = {
    // karena mau pake firebase soalnya firebase object not array
    tasks: {
        'ID1' : {
          name: 'Makan',
          completed: false,
          dueDate: '2021/04/05',
          dueTime: '15:30'
        },
        'ID2' : {
          name: 'Kajian',
          completed: false,
          dueDate: '2021/04/06',
          dueTime: '19:30'
        },
        'ID3' : { 
          name: 'Belajar',
          completed: false,
          dueDate: '2021/04/07',
          dueTime: '12:30'
        }
    }
}

const mutations = {
  // state sending dari action
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  }
}

const actions = {
    updateTask({ commit }, payload) {
      commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
    }
}

// ngambal data dari state
const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}