<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from "@/store/AppStore"

const router = useRouter();
const appStore = useAppStore();
const tournamentTeams = appStore.tournamentTeams;

const generateFixtures = () => {
    router.push({name:'generated-fixtures'});
}
</script>

<template>
    <div class="home-main">
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h1>Tournament Teams</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(team,index) in tournamentTeams" :key="index">
                            <td>{{ team }}</td>
                        </tr>
                    </tbody>
                </table>

                <button class="button primary" @click="generateFixtures">Generate Fixtures</button>
            </div>
        </div>
    </div>
    </div>
</template>