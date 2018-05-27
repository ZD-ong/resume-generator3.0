<template>
    <div class=page>
      <header id="topbar">
        <Topbar/>
      </header>
      <main>
        <ResumeEditor id="resumeEditor"/>
        <ResumePreview id="resumePreview"/>
      </main>
    </div>
</template>

<script>
  import 'normalize.css'
  import './assets/reset.scss'
  import store from './store/index'
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'



export default {
  name: 'App',
  store,
  components: {
    Topbar,ResumeEditor,ResumePreview
  }
}
</script>

<style lang="scss">
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
    > main {
      flex-grow: 1;
      min-width: 1024px;
      max-width: 1440px;
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      width: 100%;
      align-self: center;
      #resumeEditor{
        min-width: 35%;
        background: #444;
      }
      #resumePreview{
        flex-grow: 1;
        margin-left: 16px;
        background: #777;
      }
    }
  }
</style>
