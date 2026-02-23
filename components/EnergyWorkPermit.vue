<script setup>
import { reactive } from "vue";

const form = reactive({
  voltage: "",
  dl: "",
  dv: "",
  ergonomicDistance: "",
  collectiveProtection: "",
  tools: "",
  ppe: "",
  accessControl: "",
  additionalMeasures: "",
  technology: "",
  approved: null
});
</script>

<template>
  <div class="page">
    <h2>Zezwolenie na pracę przy urządzeniach energetycznych</h2>

    <table>
      <tr><td>Napięcie</td><td><input v-model="form.voltage" /></td></tr>
      <tr><td>Granica DL</td><td><input v-model="form.dl" /></td></tr>
      <tr><td>Granica DV</td><td><input v-model="form.dv" /></td></tr>
      <tr><td>Odległość ergonomiczna</td><td><input v-model="form.ergonomicDistance" /></td></tr>
      <tr><td>Środki ochrony zbiorowej</td><td><textarea v-model="form.collectiveProtection" /></td></tr>
      <tr><td>Narzędzia</td><td><textarea v-model="form.tools" /></td></tr>
      <tr><td>ŚOI</td><td><textarea v-model="form.ppe" /></td></tr>
      <tr><td>Ograniczenie dostępu</td><td><textarea v-model="form.accessControl" /></td></tr>
      <tr><td>Dodatkowe środki</td><td><textarea v-model="form.additionalMeasures" /></td></tr>
    </table>

    <h3>Technologia wykonania</h3>

    <label><input type="radio" value="bez_napiecia" v-model="form.technology" /> Bez napięcia</label>
    <label><input type="radio" value="w_poblizu" v-model="form.technology" /> W pobliżu napięcia</label>
    <label><input type="radio" value="pod_napieciem" v-model="form.technology" /> Pod napięciem</label>

    <h3>Zatwierdzenie</h3>

    <label><input type="radio" value="yes" v-model="form.approved" /> TAK</label>
    <label><input type="radio" value="no" v-model="form.approved" /> NIE</label>
  </div>
</template>
