<template>
    <div id="resumePreview">
      <section data-name="profile" v-show="resume.profile">
        <h1>
          {{resume.profile.name}}
        </h1>
        <p>城市：{{resume.profile.city}} | 年龄：{{resume.profile.age}} | 电话：{{resume.profile.phone}} | 邮箱：{{resume.profile.email}}</p>
      </section>

    <section data-name="education" v-show="resume.education">
      <h2>教育经历</h2>
      <ol>
        <li v-for="item in resume.education">
          <span>{{item.school}}</span>
          <span>{{item.duration}}</span>
          <span>{{item.degree}}</span>
        </li>
      </ol>
    </section>

    <section data-name="experience" v-show="resume.experience">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.experience">
          <h3>{{item.company}}</h3>
          <span>{{item.position}}</span>
          <article>{{item.content}}</article>
        </li>
      </ol>
    </section>
    <section data-name="skills" v-show="resume.skills">
      <h2>技能</h2>
      <ol>
        <li v-for="item in resume.skills">
          <span>{{item.name}}</span>
          <span>{{item.description}}</span>
        </li>
      </ol>
    </section>
    <section data-name="projects" v-show="resume.projects">
      <h2>项目经验</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <a :href="item.link">{{item.link}}</a>
          <article>{{item.description}}</article>
          <article>{{item.keywords}}</article>
        </li>
      </ol>
    </section>
    <section data-name="awards" v-show="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <span>{{item.name}}</span>
          <span>{{item.time}}</span>
        </li>
      </ol>
    </section>
    <section data-name="social" v-show="resume.social">
      <h2>社交</h2>
      <ol>
        <li v-for="item in resume.social">
          <span>{{item.name}}</span>
          <a :href="item.link">{{item.link}}</a>
        </li>
      </ol>
    </section>
    </div>
  </template>

<script>
  export default {
    name: 'ResumePreview',
    computed: {
      resume(){
        return this.$store.state.resume
      }
    },
    created(){
      console.log(this.resume)
    }
  }
  </script>

<style>
  #resumePreview{
    color: blue;
    background:#ffffff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  }
  </style>
