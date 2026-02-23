<script setup>
import { reactive } from "vue";

const form = reactive({
  entryDate: "",
  startHour: "",
  duration: "",
  location: "",
  reason: "",
  supervisor: "",
  assistant: "",
  checklist: {
    familiarized: null,
    instructions: null,
    powerOff: null,
    pipelines: null,
    chemicals: null,
    ppe: null,
    emergency: null,
    rescueEquipment: null,
    ventilation: null,
    communication: null
  },
  oxygen: "",
  measurementPerson: "",
  measurementSignature: ""
});
</script>

<template>
  <div class="page">
    <h2>Zezwolenie na pracę w przestrzeni zamkniętej</h2>

    <table>
      <tr><td>Data wejścia</td><td><input type="date" v-model="form.entryDate" /></td></tr>
      <tr><td>Godzina rozpoczęcia</td><td><input v-model="form.startHour" /></td></tr>
      <tr><td>Szacowany czas</td><td><input v-model="form.duration" /></td></tr>
      <tr><td>Lokalizacja</td><td><input v-model="form.location" /></td></tr>
    </table>

    <h3>Powód wejścia</h3>
    <textarea v-model="form.reason" />

    <h3>Lista kontrolna</h3>

    <table>
      <tr><th>Pytanie</th><th>Tak</th><th>Nie</th><th>N/D</th></tr>

      <tr>
        <td>Czy zespół został zapoznany z zagrożeniami?</td>
        <td><input type="radio" value="yes" v-model="form.checklist.familiarized" /></td>
        <td><input type="radio" value="no" v-model="form.checklist.familiarized" /></td>
        <td><input type="radio" value="na" v-model="form.checklist.familiarized" /></td>
      </tr>

      <!-- analogicznie pozostałe pola -->
    </table>

    <h3>Pomiary atmosfery</h3>

    <table>
      <tr><td>Tlen (O₂)</td><td><input v-model="form.oxygen" /></td></tr>
      <tr><td>Osoba wykonująca pomiar</td><td><input v-model="form.measurementPerson" /></td></tr>
      <tr><td>Podpis</td><td><input v-model="form.measurementSignature" /></td></tr>
    </table>
  </div>
</template>
