module.exports=function StatsAlerter(maxThreshold,alerters){

    this.checkAndAlert = function(numbers){
        let max = Math.max(...numbers);
        if(max > maxThreshold){           
           alerters[0].emailSent = true;
           alerters[1].ledGlows = true;

           console.log(alerters[0].emailSent);
           console.log(alerters[1].ledGlows);
        }
    }
}
