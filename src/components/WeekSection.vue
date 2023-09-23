<script setup>
import { defineProps } from "vue"

defineProps({
	week: {
		type: Array,
		required: true,
	},
	weekNumber:{
		type:Number,
		required:true
	}
})
</script>

<template>
	<div class="week-section col-lg-4">
			<table>
				<thead>
					<tr>
						<th colspan="3">Week {{ weekNumber }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(match,index) in week" :key="index">
						<td width="45%">
							{{ match.homeTeamName }}
						</td>
						<td width="10%">-</td>
						<td width="45%">
							{{ match.awayTeamName }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
</template>