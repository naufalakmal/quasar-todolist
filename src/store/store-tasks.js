import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    // karena mau pake firebase soalnya firebase object not array
    tasks: {
        // 'ID1' : {
        //   name: 'Makan',
        //   completed: false,
        //   dueDate: '2021/04/05',
        //   dueTime: '15:30'
        // },
        // 'ID2' : {
        //   name: 'Kajian',
        //   completed: false,
        //   dueDate: '2021/04/06',
        //   dueTime: '19:30'
        // },
        // 'ID3' : { 
        //   name: 'Belajar',
        //   completed: false,
        //   dueDate: '2021/04/07',
        //   dueTime: '12:30'
        // }
    }
}

const mutations = {
  // state sending dari action
  updateTask(state, payload) {
    // Object.assign for copy the properties from one object to another object/ to updates the object
    // console.log('Payload : ', payload)
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
    // actions tidak bisa mengganti state di tasks makanya kita butuh mutations
    updateTask({ commit }, payload) {
      // console.log(payload)
      // commit payload ke updateTask di mutations
      commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
    },
    addTask({ commit }, task) {
      let taskId = uid()
      let payload = {
        id: taskId,
        task: task
      }
      commit("addTask", payload)
    }
}

// ngambil data dari state
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