
alp.component({
  props:{
    premium: {
      type: Boolean,
      required: true
    }
  },
    methods: {
    AddtoCart(){
      this.$emit('add-to-cart')
    },
    removeFromCart() {
      this.$emit('remove-from-cart')
    },
  },
  computed:{
    delivery(){
      if (this.premium) {
        return 'Free'
      }
      else{
        return 50.00
      }
       
    }
    }
  }
)
