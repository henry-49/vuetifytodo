<template>
  <div class="todo">
   <v-text-field
   v-model="newTaskTitle"
   @click:append="addTask"
   @keyup.enter="addTask"
   class="pa-2"
    outlined
    label="Add Task"
    append-icon="mdi-plus"
    hide-details
    clearable
  ></v-text-field>
  <v-list
      class="pt-0"
      flat
    >
    <div v-for="task in tasks" :key="task.id">
        <v-list-item
        @click="doneTask(task.id)"
        :class="{'green lighten-4' : task.done}">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title 
              :class="{ 'text-decoration-line-through' : task.done }"
              >
              {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
            <v-btn 
            @click.stop="deleteTask(task.id)"
            icon>
              <v-icon color="red lighten-3">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
          </template>
          
        </v-list-item>
        <v-divider></v-divider>
        </div>
    </v-list>  
    
                 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Todo',
  data() {
    return {
       newTaskTitle: '',
      tasks: [
        // {
        //   id: 1,
        //   title: 'Wake Up',
        //   done: false
        // },
        //  {
        //   id: 2,
        //   title: 'Go Shower',
        //   done: false
        // }, {
        //   id: 3,
        //   title: 'Get Breakfast',
        //   done: false
        // },
        //  {
        //   id: 4,
        //   title: 'Take the Bus',
        //   done: false
        // }
      ],
      
    }
  },

  methods: {
    addTask(){
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false
      }
      if(newTask.title !== ''){
        this.tasks.push(newTask)
      }  
      this.newTaskTitle = ''
    },

    doneTask(id){
      // filter return an array so i have to grab the first item 
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },

    deleteTask(id){
      this.tasks = this.tasks.filter(task => task.id !== id)
     // this.tasks.pop(id)
    }
  },
}
</script>
