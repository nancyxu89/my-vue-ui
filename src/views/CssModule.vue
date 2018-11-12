<!-- @format -->

<template>
    <div>
        <p :class="{ [$style.red]: isRed, [$style.bold]: !isRed }">
            Am I red?
        </p>
        <p :class="[$style.red, $style.bold]">
            Red and bold
        </p>
    </div>
</template>
<script>
export default {
	data() {
		return {
			isRed: true
		}
	},
	created() {
		console.log(this.$style)
		// -> "red_1VyoJ-uZ"
		// an identifier generated based on filename and className.
	}
}
</script>
<style lang="stylus" module>
    .red {
        color: red;
    }
    .bold {
        font-weight: bold;
    }
</style>
<style lang="stylus" module="b">
    .bg {
        background-color: red;
    }
</style>
