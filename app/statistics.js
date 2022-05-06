module.exports=function getStatistics(numbers){
    
    //implement the computation of statistics here
    var min = 0;      
    var max = 0;
    var average = 0;  

   
    if(numbers.size === 0){
        min = NaN;
        max = NaN;
        average = NaN;
    } 
    else {
        min = Math.min.apply(null, numbers);
        max = Math.max.apply(null, numbers);
        average = numbers.reduce((a, b) => { return a + b; }) / numbers.length;
    }
}

