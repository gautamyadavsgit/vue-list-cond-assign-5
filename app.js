const App = Vue.createApp({
data(){
 return{
    enteredGoal:'',
    goals:[],
    toggle:true,
    text:'Hide List',
 }
},
methods:{
 addGoal(){
    this.goals.push(this.enteredGoal);
 },clicktoggle(){
    this.toggle = !this.toggle;

    if(this.toggle == true){
        this.text = "Hide List";
    }else{
        this.text = "Show List";
    }
 }

},
});

App.mount('#assignment');