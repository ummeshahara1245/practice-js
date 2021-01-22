function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(10);
// console.log(result);

function hotelCost(day){
    var cost = 0;
    if (day<=10){
      cost = day * 100;
    }
    else if(day<=20){
      var first10 = 10 * 100;
      var remaining = day - 10;
      var second20 = remaining * 80;
      cost = first10 + second20;
    }
    else{
      var first10 = 10 * 100;
      var second20 = 10 * 80;
      var remaining = day - 20;
      var third30 = remaining * 50;
      cost = first10 + second20 + third30;
    }
    return cost;
    }
    var count = hotelCost(22);
    // console.log(count);

    var ArrayMax = ["Abdulkalim", "pori", "rahim", "mahiamahimoni", "jeri", "bali", "cali", "kali", "rumi"];
var max = [];

function megaFriend(arr) {
    var tlength = 0;
    for(var i =0; i < ArrayMax.length; i++){
      if(tlength < ArrayMax[i].length){
        tlength = ArrayMax[i].length;
      }
    }
    for(var j =0; j < ArrayMax.length; j++){
      if(ArrayMax[j].length == tlength){
         max.push(ArrayMax[j]);
      }
    }
   if(max.length == 1){
     return max[0]
   }else{
      return max
  }
}


// console.log(megaFriend(ArrayMax));



function add(watch, mobile, laptop){
    var result = watch*2 + mobile*3 + laptop*2;
    return result;
  }
    var sum = add(50, 100, 500);
  // console.log(sum);
  
  