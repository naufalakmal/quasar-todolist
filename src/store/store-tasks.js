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

    // tasks/tasks = tasks yg dar state terus masuk ke tasks yang di getters
    // tasks: [
    //     {
    //       id: 1,
    //       name: 'Makan',
    //       completed: false,
    //       dueDate: '2021/04/05',
    //       dueTime: '15:30'
    //     },
    //     {
    //       id: 2,
    //       name: 'Kajian',
    //       completed: false,
    //       dueDate: '2021/04/06',
    //       dueTime: '19:30'
    //     },
    //     {
    //       id: 3,
    //       name: 'Belajar',
    //       completed: false,
    //       dueDate: '2021/04/07',
    //       dueTime: '12:30'
    //     }
    //   ]
}

// tidak bisa asynchronous
const mutations = {

}

// can be asynchronous
const actions = {

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