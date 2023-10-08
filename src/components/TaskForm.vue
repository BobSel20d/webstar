<template>
    <div class="wrapper">
          
        
<div class="form">
            <input 
                type="text" 
                placeholder="Введите название задачи"
                @keypress.enter="createTask"
                v-model="task.title">
            <button class="btn btn_icon" @click="createTask">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path></svg>
            
            </button>
          </div>
        </div>
</template>

<script>
    export default{
        data(){
            return{
                task:{
                    id: '',
                    title:'',
                    
                }
            }


        },
        methods:{
            createTask() {
                this.redid=-1;
                if(this.taskInput !=""){
                    if (this.task.title != ''){
                        this.task.id = Date.now();
                        this.$emit('create', this.task);
                        this.task = {
                            id: "",
                            title:"",
                            date: new Date()

                        };
                        
                    }
                    // let task={
                    // id : this.counter,
                    // title : this.taskInput,
                    // date :  new Date()
                    // }
                    // this.needToDoList.push(task);
                    // this.taskInput= "";
                    // this.counter+=1;
                    // this.TaskNumToDo+=1;
        
            }
    },
        }

    }
</script>

<style scoped>
</style>