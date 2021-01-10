<template>
  <Layout>
    <div class="journal-container">
      <div class="journal-header">
        <h1 class="journal-title">{{$page.project.title}}</h1>
        <div class="journal-meta">
          <div class="journal-list">
            <p class="title">Categories</p>
            <p class="desc">{{$page.project.categories[0]}}，{{$page.project.categories[1]}}</p>
          </div>
          <div class="journal-list">
            <p class="title">Year</p>
            <p class="desc">{{$page.project.date}}</p>
          </div>
        </div>
      </div>

      <div class="journal-content" v-html="$page.project.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  project (id: $id) {
    id
    title
    content
    date
    categories
    project_fg_color
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.project.title
    }
  },
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