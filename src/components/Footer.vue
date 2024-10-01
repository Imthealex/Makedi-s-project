<template>
  <v-footer class="d-flex flex-column" style="background-color: rgb(30,30,30);">
    
    <div class="foot" >
      <div class="state">
       
      <strong class="to">Get in touch __________________</strong><br>
     <br>
      
<strong class="lo"><m>Ole-Sangale Link Road</m> <br>
  <v-icon class="mark">mdi-map-marker </v-icon> <l>Opposite Strathmore university</l><br>
      <m>Madaraka, Nairobi</m></strong>
      
    
    <br><br>
    <v-icon class="p">mdi-phone</v-icon>
    
      <strong style="margin-left: 8px;">+254 743 946 228.</strong>
</div>
      <br>
      <div class="right">
        <strong>Follow Us___________</strong><br>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="m-4"
        :icon="icon"
        variant="plain"
        size="large"
      ></v-btn></div>
<v-spacer></v-spacer>
      
    </div>

    <div class="copyright">
      <v-icon>mdi-copyright</v-icon> <strong>Makedi's Shop | All right reserved.</strong>
    </div>
  </v-footer>
</template>
<style>
 .foot{
 background-color: black;
 opacity: 60%;
 padding:80px;
 }
 .state{
float:left;
color: azure;
padding: 0;
margin-right:500px;
 }
 .to{
  font-size: 40px;
  font-family: "Imprima", sans-serif;
  font-weight: 100;
 }
 .lo{
  font-size: 20px;
  font-family: "Imprima", sans-serif;
  font-weight: 100;
 }
 m{
margin-left: 30px;
 }
 l{
  margin-left: 8px;
 }
 .right{
  float: right;
  color: azure;
  margin-left:500px;
  font-size: 20px;
  font-family: "Imprima", sans-serif;
  font-weight: 100;
 }
 .mark{
float: left;
 }
 .p{
float: left;
 }
 .m-4{
  color: azure;
 }
 .copyright{
color:aliceblue;
background-color: black;
opacity:70%;
padding: 20px;
margin:5px;
 }
</style>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>