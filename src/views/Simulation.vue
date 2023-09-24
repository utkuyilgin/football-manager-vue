<script setup>
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { useAppStore } from "@/store/AppStore"
import WeekSection from "@/components/WeekSection.vue"

const appStore = useAppStore()
const router = useRouter()
const currentWeek = appStore.currentWeek

onMounted(() => {
	refreshData()
})

function refreshData() {
	appStore.getScoreBoards()
	appStore.getChampionshipProdictions()
	appStore.getCurrentWeekMatches()
	appStore.getCurrentWeekNumber()
}

function play(week) {
	if (week) {
		appStore.playThisWeek(week).then((res) => {
			if (res) {
				refreshData()
			}
		})
	} else {
		appStore.playAllWeeks().then((res) => {
			if (res) {
				refreshData()
			}
		})
	}
}

function resetData() {
	appStore.resetAllData().then((res) => {
		if (res) {
			router.push({ name: "tournament-teams" })
		}
	})
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
							<tr v-for="(team, index) in appStore.standings" :key="index">
								<td>{{ team.name }}</td>
								<td>{{ team.point }}</td>
								<td>{{ team.win }}</td>
								<td>{{ team.draw }}</td>
								<td>{{ team.lose }}</td>
								<td>{{ team.total_goal }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<WeekSection
					:week="appStore.currentWeek"
					:weekNumber="appStore.currentWeekNumber"
				/>

				<div class="col-lg-4">
					<table>
						<thead>
							<tr>
								<td>Championship Prodictions</td>
								<td>%</td>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="(prodictions, index) in appStore.championshipProdictions"
								:key="index"
							>
								<td>{{ prodictions.name }}</td>
								<td>{{ Number(prodictions.value.toFixed(2)) }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="col-lg-12">
					<div class="buttons">
						<button class="button primary" @click="play()">
							Play All Weeks
						</button>
						<button
							class="button primary"
							@click="play(appStore.currentWeekNumber)"
						>
							Play This Week
						</button>
						<button class="button danger" @click="resetData()">
							Reset Data
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>