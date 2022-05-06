module.exports=function getStatistics(numbers){
    
    //implement the computation of statistics here
    this.min = 0;
    this.max = 0;
    this.average = 0;
    
    if(numbers.length === 0){        
        this.min = NaN;
        this.max = NaN;
        this.average = NaN;
    } 
    else {        
        this.min = Math.min(...numbers);        
        this.max = Math.max(...numbers);        
        this.average = numbers.reduce((a, b) => { return a + b; }) / numbers.length;       
    }
}

