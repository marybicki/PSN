<template>
  <div id="app">
    <nav class="menu">
      <router-link to="/hazardous-work">Prace szczególnie niebezpieczne</router-link>
      <router-link to="/hot-work">Prace pożarowo niebezpieczne</router-link>
      <router-link to="/energy-work">Urządzenia energetyczne</router-link>
      <router-link to="/confined-space">Przestrzeń zamknięta</router-link>
      <router-link to="/confined-space-atmosphere">Kontrola atmosfery</router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
.menu {
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #f0f0f0;
  border-bottom: 1px solid #ccc;
}

.menu a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

.menu a.router-link-active {
  color: #007bff;
}
</style>
