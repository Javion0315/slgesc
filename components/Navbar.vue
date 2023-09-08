<template>
  <div
    class="bg-gray-800 border-b border-gray-400 p-4 flex justify-start items-center"
  >
    <font-awesome-icon
      class="mr-4 cursor-pointer"
      :icon="['fas', 'bars']"
      size="lg"
      @click="toggle"
    />
    <div>沙崙能源管理系統</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["toggle"]),
  },
  computed: {
    ...mapGetters(["getToggleState"]),
  },
};
</script>
