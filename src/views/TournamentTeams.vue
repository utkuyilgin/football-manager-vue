<script setup>
import { useRouter } from "vue-router"
import { useAppStore } from "@/store/AppStore"
import { onMounted } from "vue"

const router = useRouter()
const appStore = useAppStore()

onMounted(() => {
	appStore.getTournamentTeams()
})

const generateFixtures = () => {
	appStore.generateFixtures()
	router.push({ name: "generated-fixtures" })
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
							<tr v-for="team in appStore.tournamentTeams" :key="team.id">
								<td>{{ team.name }}</td>
							</tr>
						</tbody>
					</table>

					<button class="button primary" @click="generateFixtures">
						Generate Fixtures
					</button>
				</div>
			</div>
		</div>
	</div>
</template>