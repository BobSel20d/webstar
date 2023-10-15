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
    
    MoveToComplete(index) {
      const task = this.needToDoList.splice(index, 1);
      task[0].date = new Date().toLocaleString('ru-RU');
      this.completeToDoList.push(task[0])
      this.TaskNumToDo-=1;
      this.TaskNumDone+=1;
      // console.log(index)
    
    },
    MoveToDo(index) {
      const task = this.completeToDoList.splice(index, 1);
      task[0].date = new Date();
      this.needToDoList.push(task[0])
      this.TaskNumToDo+=1;
      this.TaskNumDone-=1;
      // console.log(task)
    },
    // передаем флаг, откуда удалять
    removeTask(index,flag) {
      if (flag == 0){
        const task =this.needToDoList.splice(index, 1);
        this.TaskNumToDo-=1;
      }
      else{
        const task = this.completeToDoList.splice(index, 1);
        this.TaskNumDone-=1;
      }
      this.TaskNumDel+=1;
    },
    TaskDone(task){
      //console.log("app")
      this.redid = -1;
      this.needToDoList.forEach(e => {
        if (e.id === task.id){
          e.title = this.inputText;
        }
      });
    },
    TaskRedact(task){
      this.inputText = task.title
      //console.log("app1")
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
       
        <task-list 
        :tasks="needToDoList" 
        title="Нужно сделать"   
        @check="MoveToComplete" 
        @remove="removeTask" 
        @redact="TaskRedact"
        @done="TaskDone"
        @inputChangeList = "inputChange"
        :isDelList = false 
        :TaskNum = TaskNumToDo
        :list_redid = this.redid
        :inputTextList = this.inputText />
        
        <!-- прокидываем проп isDelList, шобы понять, какой это тасклист -->
        <task-list 
        :tasks="completeToDoList" 
        title="Уже сделаны"   
        @check="MoveToDo" 
        @remove="removeTask" 
        :isDelList = true 
        SubStyle = "complete-list" 
        isChecked="isChecked" 
        :TaskNum = TaskNumDone
        isHidden = "hidden_button" />
        <p><b>Всего:</b> назначено {{ TaskNumToDo }}, сделано {{ TaskNumDone }}, удалено {{TaskNumDel}}</p>
      </div>
    </div>
</template>

<style>

</style>
