<template>
  <Layout>
    <div class="journal-hero">
      <h1 class="journal-header">a wise person once said...</h1>
    </div>
    <g-link 
     v-for="edge in $page.journal.edges" 
     :key="edge.node.id"
     :to="'/journal/' + edge.node.id"
     class="journal-post"
    >
      <div class="journal">
        <h2 class="journal-title">{{ edge.node.title }}</h2>
        <p class="journal-excerpt">{{ edge.node.desc }}</p>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query {
  journal: allJournal {
    edges {
      node {
        id
        title
        desc
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'journal'
  },
}
</script>

<style scoped>
.journal-hero{
  width: 810px;
  margin: 0 auto;
}
.journal-header{
  font-size: 48px;
  color: #f3f3f3;
  text-align: center;
}
.journal-post{
  display: block;
  padding: 80px 0;
  text-decoration: none;
}
.journal-post:hover{
  background-color: #f1f1f1;
}
.journal{
  width: 520px;
  margin: 0 auto;
  transition: transform .5s ease;
}
.journal:hover{
  transform: translateX(50px);
}
.journal-title{
  font-size: 30px;
  color: #333;
  font-weight: bold;
}
.journal-excerpt{
  font-size: 20px;
  color: #333;
}
</style>