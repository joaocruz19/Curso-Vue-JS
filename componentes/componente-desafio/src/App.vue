<template>
	<v-app>
		<custom-aside />

		<custom-toolbar />

		<custom-content />

		<custom-footer />		
	</v-app>
</template>

<script>
import Aside from "./Aside.vue";
import ToolBar from "./Toolbar.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";

export default {
	components: {
		"custom-aside": Aside,
		"custom-toolbar": ToolBar,
		"custom-content": Content,
		"custom-footer": Footer
	}
}
</script>
