<script setup>
import { reactive } from "vue";

const form = reactive({
  startDate: "",
  endDate: "",
  breaks: "",
  workDescription: "",
  coordinator: "",
  approver: "",
  teamLeader: "",
  workplace: "",
  scope: "",
  safetyRequirements: "",
  workers: Array(8).fill({ name: "", signature: "" }),
  checklist: {
    instructionProvided: null,
    workersTrained: null,
    qualifications: null,
    exploitationInstruction: null,
    ppeProvided: null,
    areaMarked: null,
    departmentsInformed: null,
    workDivision: null,
    coordinatorAssigned: null
  }
});
</script>

<template>
  <div class="page">
    <h2>Polecenie / Pozwolenie prac szczególnie niebezpiecznych</h2>

    <table>
      <tr>
        <th colspan="2">Data przeprowadzenia prac</th>
        <th colspan="2">Poleceniodawca</th>
      </tr>
      <tr>
        <td>Rozpoczęcie</td>
        <td><input type="date" v-model="form.startDate" /></td>
        <td colspan="2"><input type="text" placeholder="Imię i nazwisko" /></td>
      </tr>
      <tr>
        <td>Zakończenie</td>
        <td><input type="date" v-model="form.endDate" /></td>
        <td colspan="2"></td>
      </tr>
      <tr>
        <td>Przerwy</td>
        <td><input type="text" v-model="form.breaks" /></td>
        <td>podpis</td>
        <td><input type="text" /></td>
      </tr>
    </table>

    <table>
      <tr><td colspan="4">Określenie pracy</td></tr>
      <tr><td colspan="4"><textarea v-model="form.workDescription" /></td></tr>

      <tr>
        <td colspan="2">Koordynujący</td>
        <td><input v-model="form.coordinator" /></td>
        <td>podpis</td>
      </tr>

      <tr>
        <td colspan="2">Dopuszczający do pracy</td>
        <td><input v-model="form.approver" /></td>
        <td>podpis</td>
      </tr>

      <tr>
        <td colspan="2">Kierujący zespołem</td>
        <td><input v-model="form.teamLeader" /></td>
        <td>podpis</td>
      </tr>

      <tr>
        <td>Miejsce pracy</td>
        <td colspan="3"><input v-model="form.workplace" /></td>
      </tr>

      <tr>
        <td>Zakres prac</td>
        <td colspan="3"><textarea v-model="form.scope" /></td>
      </tr>

      <tr>
        <td>Wymagania BHP</td>
        <td colspan="3"><textarea v-model="form.safetyRequirements" /></td>
      </tr>

      <tr>
        <td rowspan="9">Osoby wykonujące pracę</td>
        <td>Imię i nazwisko</td>
        <td>Podpis</td>
      </tr>

      <tr v-for="(w, i) in form.workers" :key="i">
        <td><input v-model="w.name" /></td>
        <td><input v-model="w.signature" /></td>
      </tr>
    </table>

    <h3>Lista kontrolna środków bezpieczeństwa</h3>

    <table>
      <tr>
        <th>Zagadnienie</th><th>Tak</th><th>Nie</th><th>N/D</th>
      </tr>

      <tr>
        <td>Czy zapewniona jest szczegółowa instrukcja stanowiskowa?</td>
        <td><input type="radio" value="yes" v-model="form.checklist.instructionProvided" /></td>
        <td><input type="radio" value="no" v-model="form.checklist.instructionProvided" /></td>
        <td><input type="radio" value="na" v-model="form.checklist.instructionProvided" /></td>
      </tr>

      <tr>
        <td>Czy pracownicy zostali zapoznani z instrukcją?</td>
        <td><input type="radio" value="yes" v-model="form.checklist.workersTrained" /></td>
        <td><input type="radio" value="no" v-model="form.checklist.workersTrained" /></td>
        <td><input type="radio" value="na" v-model="form.checklist.workersTrained" /></td>
      </tr>

      <tr>
        <td>Czy posiadają wymagane kwalifikacje?</td>
        <td><input type="radio" value="yes" v-model="form.checklist.qualifications" /></td>
        <td><input type="radio" value="no" v-model="form.checklist.qualifications" /></td>
        <td><input type="radio" value="na" v-model="form.checklist.qualifications" /></td>
      </tr>

      <!-- analogicznie pozostałe pola -->
    </table>
  </div>
</template>
