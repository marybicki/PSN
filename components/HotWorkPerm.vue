<script setup>
import { reactive } from "vue";

const form = reactive({
  date: "",
  worker: "",
  assistant: "",
  company: "",
  locationType: "",
  workType: "",
  fireRisk: false,
  inspections: {
    end: "",
    plus30: "",
    plus60: "",
    plus120: ""
  }
});
</script>

<template>
  <div class="page">
    <h2>Zezwolenie na pracę pożarowo niebezpieczną</h2>

    <table>
      <tr>
        <td>Data</td>
        <td><input type="date" v-model="form.date" /></td>
      </tr>
      <tr>
        <td>Osoba wykonująca pracę</td>
        <td><input v-model="form.worker" /></td>
      </tr>
      <tr>
        <td>Osoba asekurująca</td>
        <td><input v-model="form.assistant" /></td>
      </tr>
      <tr>
        <td>Firma wykonawcy</td>
        <td><input v-model="form.company" /></td>
      </tr>
      <tr>
        <td>Rodzaj lokalizacji</td>
        <td><input v-model="form.locationType" /></td>
      </tr>
      <tr>
        <td>Rodzaj prac</td>
        <td><input v-model="form.workType" /></td>
      </tr>
    </table>

    <h3>Oględziny po zakończeniu pracy</h3>

    <table>
      <tr><th>Rodzaj</th><th>Godzina</th></tr>
      <tr>
        <td>W chwili zakończenia</td>
        <td><input v-model="form.inspections.end" /></td>
      </tr>
      <tr>
        <td>Po 30 minutach</td>
        <td><input v-model="form.inspections.plus30" /></td>
      </tr>
      <tr>
        <td>Po 1 godzinie</td>
        <td><input v-model="form.inspections.plus60" /></td>
      </tr>
      <tr>
        <td>Po 2 godzinach</td>
        <td><input v-model="form.inspections.plus120" /></td>
      </tr>
    </table>
  </div>
</template>
