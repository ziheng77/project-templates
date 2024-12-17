<template>
  <div>
    <div>
      <h3>Vue信息:</h3>
      <ul>
        <li v-for="(value, key) in vueInfo" :key="key">
          {{ key }}: {{ value }}
        </li>
      </ul>
    </div>
    <div>
      <h3>项目依赖:</h3>
      <ul>
        <li v-for="(version, name) in pkgInfo.dependencies" :key="name">
          {{ name }}: {{ version.replace(/^[^~]/,'') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// 读取当前template的信息
import { version as vueVersion } from 'vue'
import { getDependencies } from '@utils/package-info'
const vueInfo = {
  version: vueVersion,
  env: process.env.NODE_ENV,
  baseApi: import.meta.env.VITE_APP_BASE_API
}
const pkgInfo = getDependencies()
</script>

<style scoped>
</style>
