<template>
  <div class="">
    <h3 class="text-lg font-semibold">You have {{ todosCount }} Todos!</h3>
    <input
      type="text"
      id="todo"
      placeholder="Add a todo"
      v-model="newTodoName"
      @keyup.enter="addTodo"
      class="px-2 py-1 rounded-sm" />
  </div>
  <div class="mt-2">
    <ul class="space-y-1">
      <li
        v-for="(item, i) in todos"
        :key="item.id"
        class="flex p-1 bg-white/5 items-center rounded-sm">
        <p class="flex-1 text-left">{{ item.todo }}</p>
        <button @click="deleteTodo(i)" class="p-[0.2em_0.6em] bg-white/20 rounded-sm">
          X
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      newTodoName: "",
      todos: [
        { id: 1, todo: "1ne" },
        { id: 2, todo: "T2o" },
        { id: 3, todo: "3hree" },
      ],
      swearWords: ["fuck", "ass"],
    };
  },
  computed: {
    todosCount() {
      return this.todos.length;
    },
  },
  methods: {
    addTodo() {
      let newTodo = {
        id: this.todos.length + 1,
        todo: this.newTodoName,
      };
      this.todos.push(newTodo);
      this.newTodoName = "";
    },
    deleteTodo(i: number) {
      this.todos.splice(i, 1);
    },
  },
  watch: {
    newTodoName(newValue: string) {
      const containSwear = this.swearWords.some((word) =>
        newValue.toLowerCase().includes(word)
      );

      const foundSwearWords = this.swearWords.filter((swearWord) =>
        newValue.toLowerCase().includes(swearWord)
      );

      if (containSwear) {
        this.newTodoName = "";
        alert(`You must NEVER say ${foundSwearWords}!!`);
      }
    },
  },
};
</script>
