<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from "@/store/AppStore"
import WeekSection from "@/components/WeekSection.vue"

const appStore = useAppStore();
const router = useRouter();
const weekList = appStore.weekList;

const startSimulation = () => {
    router.push({name:'simulation'});
}
</script>

<template>
    <div class="container">
        <h1 class="page-title">Generated Fixtures</h1>
        <div class="row">
            <WeekSection v-for="(week,index) in weekList" :week="week" :key="index" :weekNumber="index+1"/>
        </div>

        <button class="button primary" @click="startSimulation">Start Simulation</button>
    </div>
</template>