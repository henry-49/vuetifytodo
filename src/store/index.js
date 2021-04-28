import Vue from 'vue'
import Vuex from 'vuex'
// import LoacalBase from 'localbase'

Vue.use(Vuex)

// let db = new LoacalBase('')
// db.config.debug = false

export default new Vuex.Store({
  state: {
    // search: null,
    // tasks: [],
    // snackbar: {
    //   show: false,
    //   text: ''
    // }
  },
  mutations: {
    // setSearch(state, value){
    //   state.search = value
    // },
    // addTask(state, newTask){
    //   state.tasks.push(newTask)
    // },

    // doneTask(istate, d){
    //   // filter return an array so i have to grab the first item 
    //   let task = state.tasks.filter(task => task.id === id)[0]
    //   task.done = !task.done
    // },

    // deleteTask(state, id){
    //   state.tasks = state.tasks.filter(task => task.id !== id)
    //  // this.tasks.pop(id)
    // },

    // updatedTaskTitle(state, payload) {
    //   let task = state.tasks.filter(task => task.id === payload.id)[0]
    //   task.title = payload.title
    // },

    // updatedTaskDueDate(state, payload) {
    //   let task = state.tasks.filter(task => task.id === payload.id)[0]
    //   task.dueDate = payload.dueDate
    // },

    // setTask(state, tasks){
    //   state.tasks = tasks
    // },

    // showSnackbar(state, text){
    //   let timeout = 0
    //   if(state.snackbar.show){
    //     state.snackbar.show = false
    //     timeout = 300
    //   }
      // setTimeout(() => {
      //     state.snackbar.show = true
      //     state.snackbar.text = text
      // }, timeout);
        
      
    // },

    // hideSnackbar(state){
    //   state.snackbar.show = false
    // },

    // toggleStoring(state){
    //   state.storting = !state.storting
    // }

  },
  actions: {
    // addTask({ commit }, newTaskTitle){
    //   let newTask = {
    //     id: Date.now(),
    //     title: newTaskTitle,
    //     done: false,
    //     dueDate: null
    //   }

    //   db.collection('task').add(newTask).then(() => {
    //     commit('addTask', newTask)
    //     commit('showSnackbar', 'Task added!')
    //   })
    // }, 
    // doneTask({ state, commit }, id){
    //   let task = state.tasks.filter(task => task.id == id)[0]
    //   db.collection('tasks').doc({ id: id }).update({
    //     done: !task.done
    //   }).then(() => {
    //     commit('doneTask', id)
    //   })
    // },
    // deleteTask({ commit }, id){
    //   db.collection('tasks').doc({ id: id }).delete({
    //     done: !task.done
    //   }).then(() => {
    //     commit('deleteTask', id)
    //     commit('showSnackbar', 'Task Deleted!')
    //   })
    // },

    // updateTaskTitle({ commit }, payload){
    //   db.collection('tasks').doc({ id: payloadid.id }).update({
    //     title: payload.title
    //   }).then(() => {
    //     commit('updateTaskTitle', payload)
    //     commit('showSnackbar', 'Task Updated!')
    //   })
    // },

    // updateTaskDueDate({ commit }, payload){
    //   db.collection('tasks').doc({ id: payloadid.id }).update({
    //     dueDate: payload.dueDate
    //   }).then(() => {
    //     commit('updateTaskTitle', payload)
    //     commit('showSnackbar', 'Due Date Updated!')
    //   })
    // },
    // setTasks({ commit }, tasks){
    //   db.collection('tasks').set(tasks).then(() => {
    //     commit('setTasks', tasks)
    //   })
    // },
    // getTasks({ commit }, tasks){
    //   db.collection('tasks').get().then(documents => {
    //     commit('setTasks', documents)
    //   })
    // },

    // getters: {
    //   tasksFiltered(state){
    //     if(!state.search){
    //       return state.tasks
    //     }
    //     return state.tasks.filter(task => 
    //       task.title.toLowerCase().includes(state.search.getTasks)
    //       )
    //   }
    // }

  },
  modules: {
  }
})
