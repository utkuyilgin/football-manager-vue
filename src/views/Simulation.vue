<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from "@/store/AppStore"
import WeekSection from "@/components/WeekSection.vue"

const appStore = useAppStore();
const router = useRouter();
const standings = appStore.standings;
const championshipProdictions = appStore.championshipProdictions;
const currentWeekNumber = appStore.currentWeekNumber;
const currentWeek = appStore.currentWeek;


const startSimulation = () => {
    router.push({name:'simulation'});
}
</script>

<template>
    <div class="simulation">
        <div class="container">
            <h1 class="page-title">Simulation</h1>

            <div class="row">
                <div class="col-lg-4">
                    <table>
                        <thead>
                            <tr>
                                <td>Team Name</td>
                                <td>P</td>
                                <td>W</td>
                                <td>D</td>
                                <td>L</td>
                                <td>GD</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(team,index) in standings" :key="index">
                                <td>{{ team.teamName }}</td>
                                <td>{{ team.point }}</td>
                                <td>{{ team.win }}</td>
                                <td>{{ team.draw }}</td>
                                <td>{{ team.lose }}</td>
                                <td>{{ parseInt(team.goalScored - team.goalConceded) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <WeekSection :week="currentWeek" :weekNumber="currentWeekNumber"/>

                
        
                <div class="col-lg-4">
                    <table>
                        <thead>
                            <tr>
                                <td>Championship Prodictions</td>
                                <td>%</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(prodictions,index) in championshipProdictions" :key="index">
                                <td>{{ prodictions.teamName }}</td>
                                <td>{{ prodictions.value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-lg-12">
                    <div class="buttons">
                        <button class="button primary" @click="appStore.playAllWeeks">Play All Weeks</button>
                        <button class="button primary" @click="appStore.playNextWeek">Play Next Week</button>
                        <button class="button danger" @click="appStore.resetAllData">Reset Data</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>