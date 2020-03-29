<template>
  <v-navigation-drawer app>
			<v-toolbar flat>
				<v-list>
					<v-list-tile>
						<v-list-tile-title class="title">
							Menu
						</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-toolbar>

			<v-divider></v-divider>

			<menu-items />
		</v-navigation-drawer>
</template>

<script>
import MenuItems from "./MenuItems.vue";

export default {
    components: {
        "menu-items": MenuItems
    }
}
</script>

<style>

</style>