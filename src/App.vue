<script>
import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';
export default {
  components:{
    TaskForm,
    TaskList
  },
  props:{
      // TaskNumToDo: Number,
      // TaskNumDone: Number,
      // TaskNumDel: Number
  },
data() {
  
    return {
      TaskNumToDo: 0,
      TaskNumDone: 0,
      TaskNumDel: 0,
      counter:1 ,
      taskInput: '',
      needToDoList: [],
      completeToDoList: [],
      redid:-1,
      inputText: ""
    };
  },
  methods: {
    addTask(task){
      this.needToDoList.push(task);
      this.TaskNumToDo+=1;
    },
    inputChange(event) {
      this.inputText = event.target.value;
  },
    //как минимум эти, остальные сами придумайте
    
    doCheck(index) {
      const task = this.needToDoList.splice(index, 1);
      task[0].date = new Date();
      this.completeToDoList.push(task[0])
      this.TaskNumToDo-=1;
      this.TaskNumDone+=1;
      console.log(index)
    
    },
    MoveToDo(index) {
      const task = this.completeToDoList.splice(index, 1);
      task[0].date = new Date();
      this.needToDoList.push(task[0])
      this.TaskNumToDo+=1;
      this.TaskNumDone-=1;
      console.log(task)
    },
    removeTask(index,flag) {
      if (flag === 0){
        const task =this.needToDoList.splice(index, 1);
        this.TaskNumToDo-=1;
      }
      else{
        const task =this.completeToDoList.splice(index, 1);
        this.TaskNumDone-=1;
      }
      this.TaskNumDel+=1;
    },
    done(task){
      this.redid = -1;
      this.needToDoList.forEach(e => {
        if (e.id === task.id){
          e.title = this.inputText;
        }
      });
    },
    redact(task){
      this.redid = task.id;

      

    }
  }
}
</script>

<template>
  <div class="header">
      <div class="container header__container">
        <div class="logo">Список задач</div>
        <task-form @create="addTask" />
      </div>
    </div>
    <div class="container">

      <div class="wrapper">
        <!-- <div class="wrapper__list">
          <h2>
            <span>Нужно сделать</span>
            <span class="task-num">{{ TaskNumToDo }}</span>
          </h2>
          <div v-if="needToDoList.length === 0">
            <p>Задач нет</p>
          </div>
          <ul v-else class="task-list">
            <li v-for="(task, index) in needToDoList" :key="task.id">
              <div>
                <input type="checkbox" @click="MoveToComplete(index)"/>

                <span v-if = "task.id != redid" >{{ task.title }}</span>
                <input class="text-field" 
                v-if = "task.id === redid" 
                type="text" 
                @input ="inputChange"
                :value = "task.title">
              </div>
              <div>
                <button v-if="task.id === redid" class="btn btn_mr btn_icon" @click="done(task)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>                
                </button>
                <button v-else class="btn btn_yellow btn_icon" @click="redact(task)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>                
                </button>
                <button class="btn btn_red " @click="removeTask(index,0)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
              </div>
            </li>
          </ul>

        </div> -->
        <task-list :tasks="needToDoList" title="Нужно сделать"   @check="doCheck" />
        <!-- <div class="wrapper__list">
          <h2>
            <span>Уже сделаны</span>
            <span class="task-num">{{ TaskNumDone }}</span>
          </h2>
          <div v-if="completeToDoList.length === 0">
            <p>Задач нет</p>
          </div>
          <ul v-else class="task-list complete-list" >
            <li v-for="(task, index) in completeToDoList" :key="task.id">
              <div>
                <input type="checkbox" checked @click="MoveToDo(index)">
                <span>{{task.title}} ({{task.date.toLocaleString("ru-RU")}})</span>
              </div>
            
            
              <button class="btn btn_red btn_icon" @click="removeTask(index,1)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                </button>
            </li>
          </ul>

        </div> -->
        <task-list :tasks="completeToDoList" title="Уже сделаны"   @check="MoveToDo" SubStyle = "complete-list" isChecked="isChecked"/>
        <p><b>Всего:</b> назначено {{ TaskNumToDo }}, сделано {{ TaskNumDone }}, удалено {{TaskNumDel}}</p>
      </div>
    </div>
</template>

<style>

</style>
