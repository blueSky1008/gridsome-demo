<template>
  <Layout>
    <div class="hero">
      <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
      <h2 class="hero-subtitle">
        Hi there, I'm an independent Digital Designer &amp; Art Director focused
        on digital design for brands that like to have fun.
      </h2>
    </div>

    <!--  -->
    <div 
      class="project-list"
      v-for="edge in $page.project.edges" 
      :key="edge.node.id"
    >
      <g-link class="project-link" :to="'/projects/' + edge.node.id">
        <img class="project-img" :src="edge.node.image" />
        <h3 class="project-title">{{edge.node.title}}</h3>
        <div class="categories">
          <span>{{edge.node.categories[0]}}</span>
          <span>{{edge.node.categories[1]}}</span>
        </div>
      </g-link>
    </div>
    <!--  -->
    <div>
      <div class="latest-journals-heading">LATEST AND GREATEST</div>
      <div class="latest-journals">
        <g-link
          class="journal"
          v-for="edge in $page.journal.edges" 
          :key="edge.node.id"
          :to="'/journal/' + edge.node.id"
        >
          {{ edge.node.title }}
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  project: allProject {
    edges {
      node {
        id
        title
        image
        categories
      }
    }
  }

  journal: allJournal {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "home",
  },
};
</script>

<style scoped>
.hero{
  width: 480px;
  margin: 0 auto;
  text-align: center;
  padding: 64px 0 128px;
}
.hero-title{
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
}
.hero-subtitle{
  font-size: 18px;
  font-weight: 400;
  opacity: .6;
}
.project-list{
  margin-bottom: 60px;
}
.project-link{
  display: block;
  text-decoration: none;
}
.project-img{
  width: 100%;
  height: 676px;
}
.project-title{
  font-size: 16px;
  color: #333;
  margin: 32px 0 16px;
  text-align: center;
}
.categories{
  text-align: center;
}
.categories span{
  font-size: 14px;
  color: #666;
  margin-right: 12px;
  text-align: center;
}
.latest-journals-heading{
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin: 96px 0 16px;
}
.latest-journals{
  display: flex;
  padding: 0 96px;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
}
.latest-journals .journal{
  display: block;
  flex: 1;
  font-size: 16px;
  color: #333;
  font-weight: bold;
  text-decoration: none;
  padding: 32px;
  border-right: 1px solid #f3f3f3;
}
.latest-journals .journal:last-of-type{
  border: none;
}
.latest-journals .journal:hover{
  background-color: #f3f3f3;
}
</style>
