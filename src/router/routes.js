import TournamentTeams from '@/views/TournamentTeams.vue'
import GeneratedFixtures from '@/views/GeneratedFixtures.vue'
import Simulation from '@/views/Simulation.vue'

const routes = [
  { path: '/', name: 'tournament-teams', component: TournamentTeams },
  { path: '/generated-fixtures', name: 'generated-fixtures', component: GeneratedFixtures },
  { path: '/simulation', name: 'simulation', component: Simulation }
]

export default routes