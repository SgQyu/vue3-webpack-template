<template>
  <div :class="msg" @click="handler" @keydown.ctrl.shift.1="handler2"></div>
  <li
    v-for="(todo, index) in todoItems"
    :key="todo.id"
    class="todo-item"
    @click="hello"
  ></li>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
