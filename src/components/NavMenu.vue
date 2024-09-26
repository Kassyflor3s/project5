<template>
  <nav class="bg-slate-500 h-20 items-center text-white flex justify-center space-x-4">
    <RouterLink :to="{name: 'Home'}">Home</RouterLink>
    <RouterLink :to="{name: 'AboutMe'}">About Me</RouterLink>
    <RouterLink :to="{name: 'Contact'}">Contact</RouterLink>
    <RouterLink :to="{name: 'SettingsPage'}">Settings</RouterLink>
  </nav>
</template>


<!-- <style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style> -->

