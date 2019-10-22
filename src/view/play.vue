<template>
  <div>
      <Bread/>
      <Article/>
  </div>
</template>

<script>

import Bread from '../components/bread'
import Article from './article'
export default {
  name: 'Play',
  components: {
    Bread,
    Article
  }
}
</script>