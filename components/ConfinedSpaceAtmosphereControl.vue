<script setup>
import { reactive } from "vue";

const rows = Array.from({ length: 20 }, () => ({
  time: "",
  o2: "",
  flammable: "",
  co: "",
  h2s: "",
  nh3: "",
  co2: "",
  other: ""
}));

const form = reactive({ rows });
</script>

<template>
  <div class="page">
    <h2>Kontrola atmosfery przestrzeni zamkniętej</h2>

    <table>
      <tr>
        <th>Czas</th>
        <th>Tlen</th>
        <th>Gaz palny</th>
        <th>CO</th>
        <th>H₂S</th>
        <th>NH₃</th>
        <th>CO₂</th>
        <th>Inny</th>
      </tr>

      <tr v-for="(r, i) in form.rows" :key="i">
        <td><input v-model="r.time" /></td>
        <td><input v-model="r.o2" /></td>
        <td><input v-model="r.flammable" /></td>
        <td><input v-model="r.co" /></td>
        <td><input v-model="r.h2s" /></td>
        <td><input v-model="r.nh3" /></td>
        <td><input v-model="r.co2" /></td>
        <td><input v-model="r.other" /></td>
      </tr>
    </table>
  </div>
</template>
