<template>
  <q-page class="bg-gray-3">
    <q-list class="bg-white" separator bordered>
      <q-item :class="task.done ? 'done bg-blue-1' : '' " @click="task.done = !task.done" clickable v-ripple v-for="task in tasks" :key="task.title">
        <q-item-section avatar>
          <q-checkbox
          class="no-pointer-events"
          v-model="task.done"
          color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn v-if="task.done" dense flat round color="primary" icon="delete" @click="confirm(index)"/>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Confirm" color="primary" @click="confirm" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: [
        {
          title: 'Проснуться',
          done: false
        },
        {
          title: 'Прийти на пару',
          done: false
        },
        {
          title: 'Уйти домой',
          done: false
        }
      ]
    }
  },
  methods: {
    confirm (index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Вы уверены, что хотите удалить задачу?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify({
          message: 'Задача анигилированна.',
          color: 'purple'
        })
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>
