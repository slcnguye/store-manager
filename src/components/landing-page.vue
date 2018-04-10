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
      <div id="home" class="parallax-background parallax-background-main centered-information" :style="{'background': 'url(' + nail3Image + ')'}">
        <el-row>
          <el-col :span="16" :offset="4">
            <img src="../assets/logo.png">
          </el-col>
        </el-row>
        <h2 class="header-title" :style="{ 'color': tenantColorMap['FONT_COLOR']}">{{ currentTenant.name | uppercase }}</h2>
      </div>
      <div id="services" class="centered-information" :style="{ 'background-color': tenantColorMap['SECONDARY']}">
        <div class="info-title" :style="{ 'color': tenantColorMap['FONT_COLOR']}">SERVICES</div>
        <div class="service-section">
          <el-card :style="{ 'color': tenantColorMap['FONT_COLOR'], 'background-color': tenantColorMap['SECONDARY']}" class="service-section-info" shadow="always">
            <div class="padding text-large">NAILS</div>
            <div class="text-medium">Acrylic, Gel, Solar, Bio Full Sets.</div>
            <div class="text-medium">Manicures and Pedicures.</div>
          </el-card>
          <el-card :style="{ 'color': tenantColorMap['FONT_COLOR'], 'background-color': tenantColorMap['SECONDARY']}" class="service-section-info" shadow="always">
            <div class="padding text-large">WAX</div>
            <div class="text-medium">Eyebrows, Lips, Chin, Arms and Legs</div>
          </el-card>
          <el-card :style="{ 'color': tenantColorMap['FONT_COLOR'], 'background-color': tenantColorMap['SECONDARY']}" class="service-section-info" shadow="always">
            <div class="padding text-large">MASSAGE</div>
            <div class="text-medium">Whole body and Relax</div>
          </el-card>
        </div>
      </div>
      <div class="background-image parallax-background" :style="{'background': 'url(' + nailImage + ')'}"></div>
      <div id="our-work" class="centered-information" :style="{ 'background-color': tenantColorMap['SECONDARY']}">
        <div class="info-title" :style="{ 'color': tenantColorMap['FONT_COLOR']}">Our Work</div>
        <div class="service-section">
          <el-card :style="{ 'color': tenantColorMap['FONT_COLOR'], 'background-color': tenantColorMap['SECONDARY']}" class="service-section-info" shadow="always">
            <div class="padding text-large">Cleanliness</div>
            <div class="text-medium">A clean environment ensures your can feel comfortable relaxing with us while we take care of all your beauty needs, adding to our vision of the best customer experience.</div>
          </el-card>
          <el-card :style="{ 'color': tenantColorMap['FONT_COLOR'], 'background-color': tenantColorMap['SECONDARY']}" class="service-section-info" shadow="always">
            <div class="padding text-large">Professionalism</div>
            <div class="text-medium">Our well-trained staff offers nothing less than the professional beauty services you deserve.</div>
          </el-card>
          <el-card :style="{ 'color': tenantColorMap['FONT_COLOR'], 'background-color': tenantColorMap['SECONDARY']}" class="service-section-info" shadow="always">
            <div class="padding text-large">High Quality</div>
            <div class="text-medium">High quality materials and commitment to staying up-to-date with the latest techniques ensures a lasting product that is always
              in style.</div>
          </el-card>
        </div>
      </div>
      <div class="background-image parallax-background" :style="{'background': 'url(' + nailImage + ')'}"></div>
      <div id="about-us" class="centered-information" :style="{ 'background-color': tenantColorMap['SECONDARY']}">
        <div class="info-title" :style="{ 'color': tenantColorMap['FONT_COLOR']}">About Us</div>
        <div class="service-section">
          <el-card :style="{ 'color': tenantColorMap['FONT_COLOR'], 'background-color': tenantColorMap['SECONDARY']}" class="service-section-info" shadow="always">
            <div class="text-medium">At Rainbowy Nails, we strive to provide high quality services in a spotless and tranquil salon environment.
              Our talented artists have great attention1 to detail and can create various designs with multiple colour combinations.</div>
            <div class="text-medium">We actively listen to our customer’s feedback and are always trying to better your store experience.
              Our management aims to accommodate all customers and to make sure everyone leaves happy and satisfied.</div>
          </el-card>
        </div>
      </div>
      <div id="contact" class="centered-information" :style="{ 'color': tenantColorMap['FONT_COLOR'], 'background-color': tenantColorMap['PRIMARY']}">
        <el-row>
          <el-col :span="8">
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
          </el-col>
          <el-col :span="8" :offset="8">
            <div>Our Hours</div>
            <div>Mon-Fri : 9:30 am - 8:00 pm</div>
            <div>Saturday : 9:30 am - 5:00 pm</div>
            <div>Sunday : 11:00 am - 5:00 pm</div>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ElContainer from '../../node_modules/element-ui/packages/container/src/main.vue'
import nailImage from '../assets/nail2.jpg'
import nail3Image from '../assets/nail3.jpg'
import ElCol from 'element-ui/packages/col/src/col'

export default {
  components: {
    ElCol,
    ElContainer},
  name: 'LandingPage',
  props: ['tenantPrefix'],
  computed: {
    currentTenant () {
      return this.tenants.find((tenant) => {
        return tenant.prefixUrl === this.tenantPrefix
      })
    },
    nailImage () {
      return nailImage
    },
    nail3Image () {
      return nail3Image
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
    height: 20%;
    background-position: center !important;
    background-size: cover !important;
    opacity: .6;
  }

  .parallax-background-main {
    height: 100%;
    background: url(https://wallpaperscraft.com/image/sofa_furniture_chair_cushion_comfort_75483_3840x2160.jpg);
  }

  .parallax-background {
    position: relative;
    background-attachment: fixed !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  .service-section {
    display: flex;
    padding: 30px 0;
  }

  .service-section-info {
    flex: 1;
    margin: 0 25px
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
