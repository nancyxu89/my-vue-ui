<!-- @format -->

<template>
  <div id="app">
    <div id="nav" :class="$style['theme-'+theme]">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/drag">Drag</router-link>|
      <router-link to="/cssModule">CssModule</router-link>
      <button @click="toggleTheme">toggle theme</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
	data() {
		return {
			theme: 'red'
		}
	},
	methods: {
		toggleTheme() {
			this.theme = this.theme === 'red' ? 'blue' : 'red'
		}
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
<style lang="stylus" module>
.theme-red
   background red
.theme-blue
   background blue
</style>
