<template>
    <div class="wrapper">
          
        
<div class="form">
            <input 
                type="text" 
                placeholder="Введите название задачи"
                @keypress.enter="createTask"
                v-model="task.title">
            <button class="btn" @click="createTask">Добавить</button>
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
                    checked: false
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