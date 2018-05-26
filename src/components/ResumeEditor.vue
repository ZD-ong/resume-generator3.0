<template>
    <div id="resumeEditor">
      <nav>
        <ol>
          <li v-for="(item,index) in resume.config"
              :class="{active: item.field === selected}"
              @click="selected = item.field">
            <svg class="icon">
              <use :xlink:href="`#icon-${item.icon}`"></use>
            </svg>
          </li>
        </ol>
      </nav>
        <ol class="panels">
          <li v-for="item in resume.config"
              v-show="item.field === selected">
            <div v-if="resume[item.field] instanceof Array">
              <div class="subitem" v-for="subitem in resume[item.field]">
                <div class="resumeField" v-for="(value,key) in subitem">
                  <label> {{key}} </label>
                  <input type="text" :value="value">
                </div>
                <hr>
              </div>
            </div>
              <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
              <label> {{key}} </label>
              <input type="text" v-model="resume[item.field][key]">
            </div>
          </li>
        </ol>
    </div>
  </template>

<script>
  export default {
    name: 'ResumeEditor',
    data(){
      return {
        selected: 'profile',
          resume: {
            config: [
              { field: 'profile', icon: 'profile' },
              { field: 'education', icon: 'study' },
              { field: 'experience', icon: 'work' },
              { field: 'skills', icon: 'tool' },
              { field: 'projects', icon: 'project' },
              { field: 'awards', icon: 'prize' },
              { field: 'social', icon: 'twitter' }
            ],
            profile: {
              name: '',
              city: '',
              title: ''
            },
            education: [
              { school: 'AL', content: '文字' },
              { school: 'TX', content: '文字' }
            ],
            experience: [
              { company: 'AL', content: '我的第一份工作是' },
              { company: 'TX', content: '我的第二份工作是' }
            ],
            skills: [],
            projects: [],
            awards: [
              { name: 'awards A', content: '文字' },
              { name: 'awards A', content: '文字' }
            ],
            social: []
          }
      }
    }
  }
  </script>

<style lang="scss" scoped>
  #resumeEditor{
    background:#ffffff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    > nav{
      width: 80px;
      background: black;
      color: white;
      > ol {
        > li{
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
          .icon {
            width: 24px;
            height: 24px;
            fill: #fff;
          }
          &.active{
            background: white;
            color: black;
            > .icon {
              fill: #ccc;
            }
          }
        }
      }
    }
  }
  </style>
