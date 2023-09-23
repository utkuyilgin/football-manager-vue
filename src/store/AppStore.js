import { ref,reactive } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { APIService } from '../utils/request'

export const useAppStore = defineStore('AppStore', () => {
  const standings = ref([
    {
      teamName:'Liverpool',
      point:0,
      win:0,
      draw:0,
      lose:0,
      goalScored:0,
      goalConceded:0
    },
    {
      teamName:'Manchester City',
      point:0,
      win:0,
      draw:0,
      lose:0,
      goalScored:0,
      goalConceded:0
    },
    {
      teamName:'Chelsea',
      point:0,
      win:0,
      draw:0,
      lose:0,
      goalScored:0,
      goalConceded:0
    },
    {
      teamName:'Arsenal',
      point:0,
      win:0,
      draw:0,
      lose:0,
      goalScored:0,
      goalConceded:0
    }
  ])
  const tournamentTeams = reactive([
    'Arsenal',
    'Liverpool',
    'Chelsea',
    'Manchester City'
  ]);
  const weekList = ref([
    [
      {
        homeTeamName:'Arsenal',
        awayTeamName:'Liverpool'
      },
      {
        homeTeamName:'Manchester City',
        awayTeamName:'Chelsea'
      },
    ],
    [
      {
        homeTeamName:'Liverpool',
        awayTeamName:'Arsenal'
      },
      {
        homeTeamName:'Chelsea',
        awayTeamName:'Manchester City'
      },
    ]
  ]);
  const currentWeekNumber = ref(1);
  const currentWeek = reactive([
    {
      homeTeamName:'Arsenal',
      awayTeamName:'Liverpool'
    },
    {
      homeTeamName:'Manchester City',
      awayTeamName:'Chelsea'
    }
  ]);
  const championshipProdictions = reactive([
    {
      teamName:'Arsenal',
      value:0
    },
    {
      teamName:'Chelsea',
      value:0
    },
    {
      teamName:'Manchester City',
      value:0
    },
    {
      teamName:'Liverpool',
      value:0
    }
  ]);

  const playAllWeeks = () => {
    APIService.post('todos/1').then((response)=>{
      console.log(response.data);
    })
  };

  const playNextWeek = (week) => {
    APIService.post('todos/1',week).then((response)=>{
      console.log(response.data);
    })
  };

  const resetAllData = () => {
    APIService.post('todos/1').then((response)=>{
      console.log(response.data);
    })
  }
  return {
    weekList,
    tournamentTeams,
    standings,
    currentWeek,
    currentWeekNumber,
    championshipProdictions,
    playAllWeeks,
    playNextWeek,
    resetAllData
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
