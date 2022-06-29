<template>
  <div>
    <ForecastVue />
  </div>
</template>

<script lang="ts">
import ForecastVue from "./ForecastVue.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { ForecastVue },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>