<template>
  <div>
      <Bread/>
      <div class="message">
        <div class="do_comment">
            <form action="">
                <textarea name="" id="" cols="30" rows="10" placeholder="随便说点什么吧..."></textarea>
                <button id="comment">发布</button>
            </form>
        </div>
        <Comment/>
      </div>
  </div>
</template>

<script>

import Bread from '../components/bread'
import Comment from './comment'
export default {
  name: 'Message',
  data() {
    return {
      sort: ''
    };
  },
  components: {
    Bread,
    Comment
  }
}
</script>