<template>
  <q-list class="bg-white" separator bordered>
    <q-item :class="task.done ? 'done bg-blue-1' : '' " @click="done(task)" clickable v-ripple v-for="(task,index) in tasks" :key="task.date">
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
        <q-btn v-if="task.done" dense flat round color="primary" icon="delete" @click.stop @click="confirmList(index)"/>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array
    }
  },
  data () {
  },
  methods: {
    confirmList (index) {
      this.$emit('confirmList', index)
    },
    done (task) {
      task.done = !task.done
    },
    isDone (task) {
      return task.done
    }
  }
}
</script>

<style scoped></style>
