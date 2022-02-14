<template>
  <section
    v-animate
    class="container animate"
  >
    <img
      class="decoration-bag"
      src="@/assets/img/intro/3@2x.png"
      alt="插圖"
    >
    <img
      class="decoration-pot"
      src="@/assets/img/intro/pot@2x.png"
      alt="插圖"
    >
    <div class="title-wrapper">
      <h2
        v-animate
        class="title"
      >
        <img
          :src="titleImgSrc"
          alt="Join us 歡迎入座"
        >
      </h2>
      <p
        v-animate
        class="paragraph"
      >
        打造美好饗宴，邀你並行！<br>傳遞最溫暖的服務、與最美味的佳餚！
      </p>
    </div>
    <div class="show-desktop-md">
      <div class="job-wrapper">
        <ul
          v-animate
          class="job-list"
        >
          <JobListItem
            v-for="job in jobLists"
            :key="job.id"
            :job="job"
          ></JobListItem>
        </ul>
      </div>
    </div>
    <div class="show-at-md">
      <Slider
        v-animate
        class="custom-slider"
        :contents="jobLists"
      ></Slider>
    </div>
  </section>
</template>

<script>
import Slider from '@/components/Slider'
import JobListItem from '@/components/Cards/jobListItem'
export default {
  components: {
    JobListItem,
    Slider
  },
  data () {
    return {
      vw: window.innerWidth,
      mbWidth: 768,
      jobLists: [
        {
          id: 0,
          title: '內/外場正職',
          hot: true,
          salaryImgSrc: require('@/assets/img/intro/s1@2x.png'),
          bgImgSrc: require('@/assets/img/intro/s1-bg@2x.png'),
          qualifications: [
            '高中職以上',
            '無經驗可',
            '具1年以上經驗佳'
          ]
        },
        {
          id: 1,
          title: '內/外場兼職',
          hot: true,
          salaryImgSrc: require('@/assets/img/intro/s2@2x.png'),
          bgImgSrc: require('@/assets/img/intro/s2-bg@2x.png'),
          qualifications: [
            '高中職以上',
            '無經驗可',
            '可長期配合者佳'
          ]
        },
        {
          id: 2,
          title: '組長(內/外場)',
          hot: false,
          salaryImgSrc: require('@/assets/img/intro/s3@2x.png'),
          bgImgSrc: require('@/assets/img/intro/s3-bg@2x.png'),
          qualifications: [
            '高中職以上',
            '3年以上工作經驗佳'
          ]
        },
        {
          id: 3,
          title: '店長',
          hot: false,
          salaryImgSrc: require('@/assets/img/intro/s4@2x.png'),
          bgImgSrc: require('@/assets/img/intro/s4-bg@2x.png'),
          qualifications: [
            '高中職以上',
            '3年以上工作經驗，熟悉店務、營運、人員訓練者'
          ]
        },
        {
          id: 4,
          title: '副店長',
          hot: false,
          salaryImgSrc: require('@/assets/img/intro/s5@2x.png'),
          bgImgSrc: require('@/assets/img/intro/s5-bg@2x.png'),
          qualifications: [
            '高中職以上',
            '3年以上工作經驗並有管理經驗佳'
          ]
        },
        {
          id: 5,
          title: '主廚',
          hot: false,
          salaryImgSrc: require('@/assets/img/intro/s6@2x.png'),
          bgImgSrc: require('@/assets/img/intro/s6-bg@2x.png'),
          qualifications: [
            '高中職以上',
            '3年以上工作經驗，熟悉內場管理、人員訓練者'
          ]
        },
        {
          id: 6,
          title: '副主廚',
          hot: false,
          salaryImgSrc: require('@/assets/img/intro/s7@2x.png'),
          bgImgSrc: require('@/assets/img/intro/s7-bg@2x.png'),
          qualifications: [
            '高中職以上',
            '3年以上工作經驗並有管理經驗佳'
          ]
        }
      ]
    }
  },
  computed: {
    isMobile () {
      if (this.vw <= this.mbWidth) {
        return true
      } else {
        return false
      }
    },
    titleImgSrc () {
      if (this.isMobile) {
        return require('@/assets/img/intro/part-2-tit@2x_mb.png')
      } else {
        return require('@/assets/img/intro/part-2-tit@2x.png')
      }
    }

  },
  mounted () {
    window.addEventListener('resize', () => {
      this.vw = window.innerWidth
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 0 auto;
  padding-top: 40px;

  @include screen(md) {
    padding-top: 60px;
  }
}

.decoration-bag {
  position: absolute;
  top: 16px;
  left: 50%;
  width: 175px;
  transform: translateX(calc(-50% - 532px));
}

.decoration-pot {
  position: absolute;
  bottom: 224px;
  left: 50%;
  width: 227px;
  transform: translateX(calc(-50% + 615px));
}

.title-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;

  @include screen(lg) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @include screen(md) {
    margin-bottom: 25px;
  }
}

.title {
  position: relative;
  width: 265px;
  margin-right: 25px;
  @include screen(lg) {
    margin-right: 0;
  }
  @include screen(md) {
    width: 220px;
  }

  &::after {
    @include screen(lg) {
      content: '';
      position: absolute;
      top: -23px;
      right: -49px;
      z-index: 1;
      width: 118px;
      height: 58px;
      background-image: url('~@/assets/img/intro/welcome@2x.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      @include screen(extrasm) {
        top: -6px;
        right: -45px;
        width: 90px;
        height: 45px;
      }
    }

    @include screen(md) {
      top: -11px;
      right: -52px;
      width: 96px;
      height: 50px;
    }
  }
}

.paragraph {
  position: relative;
  @extend %source-han-seriftc-bold;
  padding-top: 40px;
  font-size: 20px;
  color: color(gray, 600);

  @include screen(lg) {
    padding-top: 9px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -98px;
    width: 137px;
    height: 71px;
    background-image: url('~@/assets/img/intro/welcome@2x.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    @include screen(lg) {
      content: none;
    }
  }
}

.job-wrapper {
  position: relative;
  max-width: 1116px;
  margin: 0 auto;

  @include screen(xl) {
    max-width: 1100px;
    padding: 0 $container-padding-pad;
  }

  @include screen(md) {
    padding: 0;
    transform: translateX(-305px);
  }
}

.job-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  @include screen(md) {
    flex-wrap: nowrap;
    justify-content: center;
  }
}

// 動畫
.container.animate {
  .title {
    opacity: 0;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 300, 0, 0, 1);
    animation: title-slide-in 1400ms linear both;
    animation-play-state: paused;

    &.activated {
      animation-play-state: running;
    }
  }

  .paragraph {
    opacity: 0;
    transform: translateX(20px);
    animation: paragraph-slide-in 500ms ease-out 0s 1 normal forwards;
    animation-play-state: paused;
    animation-delay: 800ms;

    @include screen(md) {
      animation-delay: 500ms;
    }

    &::after {
      transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      transform-origin: left bottom;
      animation: animate-scale-bounce 1000ms linear both;
      animation-play-state: paused;
      animation-delay: 1200ms;
    }

    &.activated {
      animation-play-state: running;

      &::after {
        animation-play-state: running;
      }
    }
  }

  .job-list {
    @for $i from 1 through 7 {

      & > li:nth-child(#{$i}) {
        opacity: 0;
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -150, 0, 0, 1);
        animation: animate-swoosh-in 2000ms (#{$i * .2s}) linear forwards;
        animation-play-state: paused;
      }
    }

    &.activated {
      & > li {
        animation-play-state: running;
      }
    }
  }

  .custom-slider {
    opacity: 0;
    transform: translateX(100px);
    animation: animate-slide-up 500ms cubic-bezier(.34, 1.56, .64, 1) 0s normal forwards;
    animation-play-state: paused;

    &.activated {
      animation-play-state: running;
    }
  }
}

.container.animate.activated {
  @media screen and (max-width: 480px) {
    .title {
      animation-play-state: running;
    }
  }
}
</style>

<style scoped>
.job-list >>> .job-list-item:nth-child(1),
.job-list >>> .job-list-item:nth-child(2),
.job-list >>> .job-list-item:nth-child(3) {
  margin: 0 14px;
  margin-bottom: 28px;
}

@media screen and (max-width: 1366px) {
  .job-list >>> .job-list-item:nth-child(1),
  .job-list >>> .job-list-item:nth-child(2),
  .job-list >>> .job-list-item:nth-child(3) {
    margin: 0 6px;
    margin-bottom: 41px;
  }
}

.custom-slider >>> .job-list-item:nth-child(1),
.custom-slider >>> .job-list-item:nth-child(2),
.custom-slider >>> .job-list-item:nth-child(3) {
  margin: 0 6px 0;
}
</style>
