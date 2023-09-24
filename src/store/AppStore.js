import { ref, reactive } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { APIService } from '../utils/request'

export const useAppStore = defineStore('AppStore', () => {
  const standings = ref([]);
  const tournamentTeams = ref([]);
  const weekList = ref({});
  const currentWeekNumber = ref(1);
  const currentWeek = ref([]);
  const championshipProdictions = ref([]);

  async function getTournamentTeams() {
    await APIService.get('teams')
      .then((response) => {
        tournamentTeams.value = { ...response.data.data };
      }).catch((error) => {
        console.log(error);
      });
  }

  async function getCurrentWeekNumber() {
    await APIService.get('current-week')
      .then((response) => {
        currentWeekNumber.value = response.data.week;
      }).catch((error) => {
        console.log(error);
      });
  }

  async function getCurrentWeekMatches() {
    await APIService.get('current-week-matches')
      .then((response) => {
        currentWeek.value = { ...response.data };
      }).catch((error) => {
        console.log(error);
      });
  }

  async function generateFixtures() {
    await APIService.get('generate-fixtures')
      .then((response) => {
        weekList.value = { ...response.data };
      }).catch((error) => {
        console.log(error);
      });
  }

  async function getScoreBoards() {
    await APIService.get('scoreboard')
      .then((response) => {
        standings.value = { ...response.data };
      }).catch((error) => {
        console.log(error);
      });
  }

  async function getChampionshipProdictions() {
    await APIService.get('championship-prodictions')
      .then((response) => {
        championshipProdictions.value = { ...response.data };
      }).catch((error) => {
        console.log(error);
      });
  }

  async function playAllWeeks() {
    const res = await APIService.post('play')
      .then((response) => {
        return response.data.success;
      }).catch((error) => {
        console.log(error);
        return response.data.success;
      });
    return res;
  }

  async function playThisWeek(week) {
    const res = await APIService.post('play', { week })
      .then((response) => {
        return response.data.success;
      }).catch((error) => {
        console.log(error);
        return response.data.success;
      });
    return res;
  }

  async function resetAllData() {
    const res = await APIService.get('reset')
      .then((response) => {
        return response.data.success;
      }).catch((error) => {
        console.log(error);
        return false;
      });
    return res;
  }

  return {
    weekList,
    tournamentTeams,
    standings,
    currentWeek,
    currentWeekNumber,
    championshipProdictions,
    getTournamentTeams,
    getCurrentWeekNumber,
    getCurrentWeekMatches,
    playAllWeeks,
    playThisWeek,
    resetAllData,
    generateFixtures,
    getScoreBoards,
    getChampionshipProdictions
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
