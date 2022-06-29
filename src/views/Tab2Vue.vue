<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tahminler</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tahminler</ion-title>
        </ion-toolbar>
      </ion-header>
      <Forecast />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Forecast from "@/weather/ForecastVue.vue";
import ionComp from "@/shared/ionComp";
export default defineComponent({
  components: {
    Forecast,
    ...ionComp,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.min-width {
  min-width: 350px;
}
</style>