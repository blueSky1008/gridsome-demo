<template>
  <Layout>
    <div class="journal-container">
      <div class="journal-header">
        <h1 class="journal-title">{{$page.journal.title}}</h1>
        <div class="journal-meta">
          <div class="journal-list">
            <p class="title">Author</p>
            <p class="desc">{{$page.journal.author}}</p>
          </div>
          <div class="journal-list">
            <p class="title">Date</p>
            <p class="desc">{{$page.journal.date}}</p>
          </div>
        </div>
      </div>

      <div class="journal-content" v-html="$page.journal.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  journal (id: $id) {
    id
    title
    content
    author
    date
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.journal.title
    }
  }
}
</script>

<style scoped>

.journal-container{
  width: 840px;
  margin: 0 auto;
}
.journal-header{
  padding: 32px 0 64px;
}
.journal-title{
  width: 600px;
  font-size: 50px;
  color: #333;
  font-weight: bold;
  margin-bottom: 64px;
}
.journal-meta{
  display: flex;
  flex-wrap: wrap;
}
.journal-list {
  margin-right: 64px;
}
.journal-list .title{
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0 0 5px;
}
.journal-list .desc{
  font-size: 16px;
  color: #666;
   margin: 0;
}
</style>