<template>
  <div class="row">
    <PostCard v-for="p in posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
