<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <img
              :src="getWeatherImageUrl(weather?.current?.weather[0].icon, '2x')"
            />
            <ion-label
              >Hava Durumu: {{ formatTemperature(weather?.current?.temp, "C") }}
            </ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="calendarOutline" />
            <ion-label>Tahmin</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/vue";
import { calendarOutline } from "ionicons/icons";
import { useWeather } from "@/weather/useWeather";

export default defineComponent({
  name: "TabsVue",
  components: {
    IonPage,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
    IonRouterOutlet,
  },
  setup() {
    const { weather, formatTemperature, getWeatherImageUrl } = useWeather();
    return { weather, formatTemperature, getWeatherImageUrl, calendarOutline };
  },
});
</script>

<style scoped>
img {
  height: 26px;
  width: 26px;
  margin-bottom: 0px;
  margin-top: 3px;
  background-color: skyblue;
  border-radius: 100%;
}
</style>