<template>
  <div>
    <ion-card v-if="weather?.current">
      <div class="weatherBackground">
        <img
          :src="getWeatherImageUrl(weather.current?.weather[0].icon, '4x')"
          alt=""
        />
      </div>
      <ion-card-header>
        <ion-card-subtitle>{{
          weather.current.weather[0].description
        }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-header>{{
        formatTemperature(weather.current.temp, "C")
      }}</ion-card-header>

      <ion-card-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              Hissedilen Sıcaklık:
              {{ formatTemperature(weather.current.feels_like, "C") }}
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              Rüzgar Hızı: {{ parseInt(weather.current.wind_speed) }} mph
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              Güneş Doğumu:
              {{
                new Date(weather.current.sunrise * 1000).toLocaleTimeString(
                  [],
                  { timeStyle: "short" }
                )
              }}
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              Güneş Batımı:
              {{
                new Date(weather.current.sunset * 1000).toLocaleTimeString([], {
                  timeStyle: "short",
                })
              }}
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>
  </div>
</template>




<script lang="ts">
import {
  IonHeader,
  IonCard,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/vue";
import { defineComponent, onMounted } from "vue";
import { useWeather } from "./useWeather";

export default defineComponent({
  components: {
    IonCard,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonRow,
    IonCol,
    IonGrid,
  },
  setup() {
    const { weather, fetchWeather, formatTemperature, getWeatherImageUrl } =
      useWeather();

    onMounted(fetchWeather);
    console.log(weather);
    return { weather, formatTemperature, getWeatherImageUrl };
  },
});
</script>

<style scoped>
ion-card {
  max-width: 350px;
}

ion-card img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.weatherBackground {
  background-color: skyblue;
}
</style>