<template>
  <Layout>
    <div class="contact-header">
      <h1 class="contact-title">Say hi!</h1>
      <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
    </div>

    <form class="contact-form">
      <div class="sender-info">
        <div class="ipt-box">
          <p>Your name</p>
          <input type="text">
        </div>
        <div class="ipt-box">
          <p>Your email</p>
          <input type="email">
        </div>
      </div>
      <div class="message-box">
        <p>Message</p>
        <textarea></textarea>
      </div>
      <button class="button">Submit form</button>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'contact'
  },
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
}
</script>

<style scoped>
.contact-header{
  padding: 32px 0 64px;
}
.contact-title{
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 64px;
}
.contact-header p{
  font-size: 16px;
  color: #333;
}
.sender-info{
  display: flex;
  margin-bottom: 30px;
}
.sender-info .ipt-box{
  flex: 1;
  margin-right: 40px;
}
.sender-info .ipt-box p {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin: 0 0 10px;
}
.sender-info .ipt-box input {
  width: 80%;
  height: 40px;
  font-size: 16px;
  color: #333;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0 15px;
  box-sizing: border-box;
}
.message-box{
  margin-bottom: 30px;
}
.message-box p {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin: 0 0 10px;
}
.message-box textarea {
  width: 85%;
  height: 140px;
  font-size: 16px;
  color: #333;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px 15px;
  resize: none;
}
.contact-form .button{
  cursor: pointer;
  width: 125px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #333;
}
</style>