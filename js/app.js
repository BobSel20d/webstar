Vue.createApp({
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
    inputChange(event) {
      this.inputText = event.target.value;
  },
    //как минимум эти, остальные сами придумайте
    addTask() {
      this.redid=-1;
      if(this.taskInput !=""){
        let task={
          id : this.counter,
          title : this.taskInput,
          date :  new Date()
        }
        this.needToDoList.push(task);
        this.taskInput= "";
        this.counter+=1;
        this.TaskNumToDo+=1;
        
      }
    },
    MoveToComplete(index) {
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
).mount('#app');