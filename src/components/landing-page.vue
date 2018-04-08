<template>
  <div class="landing-page" v-once>
    <el-header class="header"
               :style="{ 'background-color': tenantColorMap['PRIMARY'] }">
      <el-button type="text" class="padding-left padding-right" :style="{ 'color': tenantColorMap['FONT_COLOR']}"
                 v-scroll-to="{el: '#home', offset: -60}">HOME</el-button>
      <el-button type="text" class="padding-left padding-right" :style="{ 'color': tenantColorMap['FONT_COLOR']}"
                 v-scroll-to="{el: '#services', offset: -60}">SERVICES</el-button>
      <el-button type="text" class="padding-left padding-right" :style="{ 'color': tenantColorMap['FONT_COLOR']}"
                 v-scroll-to="{el: '#our-work', offset: -60}">OUR WORK</el-button>
      <el-button type="text" class="padding-left padding-right" :style="{ 'color': tenantColorMap['FONT_COLOR']}"
                 v-scroll-to="{el: '#about-us', offset: -60}">ABOUT US</el-button>
      <el-button type="text" class="padding-left padding-right" :style="{ 'color': tenantColorMap['FONT_COLOR']}"
                 v-scroll-to="'#contact'">CONTACT</el-button>
      <el-button type="text" class="padding-left padding-right" :style="{ 'color': tenantColorMap['FONT_COLOR']}">BOOK ONLINE</el-button>
    </el-header>
    <el-main class="main-container" style="flex: 1;">
      <div id="home" class="parallax-background parallax-background-main centered-information">
        <el-row>
          <el-col :span="16" :offset="4">
            <img src="../assets/logo.png">
          </el-col>
        </el-row>
        <h2 class="header-title" :style="{ 'color': tenantColorMap['FONT_COLOR']}">{{ currentTenant.name | uppercase }}</h2>
      </div>
      <div id="services" class="parallax-background parallax-background-small centered-information">
        <div class="info-title" :style="{ 'color': tenantColorMap['FONT_COLOR']}">SERVICES</div>
        <div class="service-section">
          <div :style="{ 'color': tenantColorMap['FONT_COLOR']}" class="service-section-info">
            <div class="padding text-large">NAILS</div>
            <div class="text-medium">Acrylic, Gel, Solar, Bio Full Sets.</div>
            <div class="text-medium">Manicures and Pedicures.</div>
          </div>
          <div :style="{ 'color': tenantColorMap['FONT_COLOR']}" class="service-section-info">
            <div class="padding text-large">WAX</div>
            <div class="text-medium">Eyebrows, Lips, Chin, Arms and Legs</div>
          </div>
          <div :style="{ 'color': tenantColorMap['FONT_COLOR']}" class="service-section-info">
            <div class="padding text-large">MASSAGE</div>
            <div class="text-medium">Whole body and Relax</div>
          </div>
        </div>
      </div>
      <div class="background-image" :style="{'background': 'url(https://rainbowynails.github.io/assets/images/23584295-2012463925664938-219800790-o-2000x1500.jpg)'}"></div>
      <div id="our-work" class="parallax-background parallax-background-small centered-information">
        <div class="info-title" :style="{ 'color': tenantColorMap['FONT_COLOR']}">Our Work</div>
        <div class="service-section">
          <div :style="{ 'color': tenantColorMap['FONT_COLOR']}" class="service-section-info">
            <div class="padding text-large">Cleanliness</div>
            <div class="text-medium">A clean environment ensures your can feel comfortable relaxing with us while we take care of all your beauty needs, adding to our vision of the best customer experience.</div>
          </div>
          <div :style="{ 'color': tenantColorMap['FONT_COLOR']}" class="service-section-info">
            <div class="padding text-large">Professionalism</div>
            <div class="text-medium">Our well-trained staff offers nothing less than the professional beauty services you deserve.</div>
          </div>
          <div :style="{ 'color': tenantColorMap['FONT_COLOR']}" class="service-section-info">
            <div class="padding text-large">High Quality</div>
            <div class="text-medium">High quality materials and commitment to staying up-to-date with the latest techniques ensures a lasting product that is always
              in style.</div>
          </div>
        </div>
      </div>
      <div class="background-image" :style="{'background': 'url(https://rainbowynails.github.io/assets/images/23584295-2012463925664938-219800790-o-2000x1500.jpg)'}"></div>
      <div id="about-us">
        At Rainbowy Nails, we strive to provide high quality services in a spotless and tranquil salon environment. Our talented artists have great attention1 to detail and can create various designs with multiple colour combinations.

        We actively listen to our customer’s feedback and are always trying to better your store experience. Our management aims to accommodate all customers and to make sure everyone leaves happy and satisfied.
      </div>
      <div id="contact" class="centered-information">
        <div class="padding-top">
          <div v-if="currentTenant.address1">{{ currentTenant.address1 }}</div>
          <div v-if="currentTenant.address2">{{ currentTenant.address2 }}</div>
          <div v-if="currentTenant.phoneNumber">
            <i class="fa fa-phone"></i>
            <a :href="'tel:+' + currentTenant.phoneNumber">
              {{ currentTenant.phoneNumber | toPhoneNumber }}
            </a>
          </div>
          <div v-if="currentTenant.email">
            <i class="fa fa-envelope-o"></i>
            <a :href="'mailto:' + currentTenant.email">
              {{ currentTenant.email }}
            </a>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ElContainer from '../../node_modules/element-ui/packages/container/src/main.vue'

export default {
  components: {ElContainer},
  name: 'LandingPage',
  props: ['tenantPrefix'],
  computed: {
    currentTenant () {
      return this.tenants.find((tenant) => {
        return tenant.prefixUrl === this.tenantPrefix
      })
    },
    ...mapState(['tenants']),
    ...mapGetters(['tenantColorMap'])
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .landing-page {
    display: flex;
    flex-direction: column;
  }

  .main-container {
    padding: 0;
    overflow: inherit;
    margin-top: 60px;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 10000;
  }

  .background-image {
    height: 30%;
    background-position: center !important;
    opacity: .6;
  }

  .parallax-background-main {
    height: 100%;
    background: url(https://wallpaperscraft.com/image/sofa_furniture_chair_cushion_comfort_75483_3840x2160.jpg);
  }

  .parallax-background-main-half {
    height: 30%;
  }

  .parallax-background-small {
    background: url(https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg);
  }

  .parallax-background {
    position: relative;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .service-section {
    display: flex;
    padding: 30px 0;
  }

  .service-section-info {
    flex: 1;
  }

  .header-title {
    font-size: 4em;
  }

  .info-title {
    font-size: 2.5em;
  }

  .centered-information {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 30px 0;
  }
</style>
