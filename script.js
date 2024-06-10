// class CalculCoins {
// #myBlock = 0;
// #myBlockCustom = 0;
// #oneBlock = 0;
// #forOneHour = 0;
// #theReward = 0;
// #douzeReward = 0;
// #dayReward = '';
// #weekReward = 0;
// #monthReward = 0;
// #monthReward30 = 0;
// #monthReward31 = 0;
// #monthReward28 = 0;
// #yearReward = 0;

// #formCoins = document.getElementById("form-coins");
// #coinSelect = document.getElementById("coinChoose");


// #boostedReward = document.getElementById("boosted-reward");
// #netPower = document.getElementById("network-power");
// #myPower = document.getElementById("myPower");

// #theReward = 0;
// constructor(coinSelect)
// {
//   // this.#coinSelect.addEventListener("change", handleSelectChange);
//   // if(this.#boostedReward.value) {
//   //   theReward =  myBlock  * Number(this.#boostedReward.value);
//   // }else{
//   //   theReward =  myBlock  * Number(coinSelect.value);
//   // }
//   this.douzeReward =  Number((forOneHour * 12).toFixed(4));
//   this.inputDouze.innerHTML = "The reward is for 12 hours : " +  douzeReward;
//   this.dayReward =  Number((forOneHour * 24).toFixed(4));

//   inputDay.innerHTML = "The reward is for one day : " +  dayReward;

//   weekReward  = Number((dayReward  * 7).toFixed(3));
//   inputWeek.innerHTML = "The reward is for one week : " +  weekReward;
//   monthReward31 = Number((forOneHour * 24 * 31).toFixed(3));
  
//   monthReward30  = Number((forOneHour * 24 * 30).toFixed(3));
//   monthReward28 = Number((forOneHour * 24 * 28).toFixed(3));

//   let months31 = [1,3,5,7,8,10,12];
//   let months30 = [2,4,6,9,11];
//   let fevMonth = 2;
//   let currentMonth = Number(date.getMonth()+1);
//   if(months30.includes(currentMonth )){
//     monthReward = monthReward30;
//   }
//   if(months31.includes(currentMonth )){
//     monthReward = monthReward31;
//   }
//   if(fevMonth == currentMonth){
//     monthReward = monthReward28;
//   }
//   inputMonth.innerHTML = "The reward is for one month : " +  monthReward;
//   yearReward = Number((monthReward31 * 7) + (monthReward30  * 4) +  monthReward28);
//   inputYear.innerHTML = "The reward is for one Year : " +   yearReward;
// }


// }


var myBlock = 0;
var  myBlockCustom = 0;
var  oneBlock = 0;
var forOneHour = 0;
var  theReward = 0;
var  douzeReward = 0;
var   dayReward = '';
var weekReward = 0;
var monthReward = 0;
var  monthReward30 = 0;
var  monthReward31 = 0;
var monthReward28 = 0;
var yearReward = 0;

window.onload = function(){


  var formCoins = document.getElementById("form-coins");
  var formPowerMiner = document.getElementById("form-powerminer");
  var powerMiner = document.getElementById("power-miner");
  var percentMiner = document.getElementById("percent-miner");
  var mypowerHashrate = document.getElementById("mypower-hashrate");
 var bonusPercent = document.getElementById("bonus-percent");

  var coinSelect = document.getElementById("coinChoose");
  coinSelect.addEventListener("change", handleSelectChange);

  var supportBtn = document.querySelector('.supportme');
  var helpGroup = document.querySelector('.helpgroup');
  supportBtn.addEventListener("click", show);

  var boostedReward = document.getElementById("boosted-reward");
  var netPower = document.getElementById("network-power");
  var myPower = document.getElementById("myPower");

  // formPowerMiner.addEventListener("submit", (event) => {
  //   event.preventDefault();

  //   console.log(powerMiner.value);
  //   console.log(percentMiner.value);
  //   console.log(mypowerHashrate.value);
  //   if(percentMiner.value != null){
  //    var totalPercent = Number(bonusPercent.value) +  Number(percentMiner.value)

  //   var newPower = Number(mypowerHashrate.value/1000) + Number(powerMiner.value/1000);
  //   var addpower = (Number((powerMiner.value/1000) * totalPercent)/100);
  //   var totalPower = addpower + newPower;
  //   console.log( "total percent" +  totalPercent );
  //   console.log( "addPower" + newPower );
  //   console.log( "addPower" + newPower );
  //   console.log( "Power total" + totalPower);

  //   }
 
  // });

  formCoins.addEventListener("submit", (e) => {
    e.preventDefault();

    myBlock= Math.round((myPower.value / netPower.value) * 100);
    var inputDouze = document.querySelector(".douze");
    var inputDay = document.querySelector(".one-day");
    var inputWeek = document.querySelector('.one-week');
    var inputMonth = document.querySelector('.one-month');
    var inputYear= document.querySelector('.one-year');
  
     
    var theReward = 0;
    if(boostedReward.value) {
      theReward =  myBlock  * Number(boostedReward.value);
    }else{
      theReward =  myBlock  * Number(coinSelect.value);
    }

    var goodReward = theReward / 100000000 ;
    const date = new Date();
   
    forOneHour = goodReward * 6;
    forOneHour.toFixed(10);
    if (coinSelect.value == 20000) {
      var  btctheReward =  myBlock  * Number(coinSelect.value);
      var btcReward = (btctheReward  / 100000000) ;
      var myBtc  = (btcReward/10000000);
      var forOneHourBtc =  myBtc.toFixed(10) * 6;
      var oneDayBTC = ((forOneHourBtc)*24)/10;

      inputDay.innerHTML = "The reward is for one day : " +  oneDayBTC;
      var weekReward  = Number((oneDayBTC * 7).toFixed(8));
      inputWeek.innerHTML = "The reward is for one week : " +  weekReward;

      monthReward31 = Number((forOneHourBtc* 24 * 31).toFixed(3)/10);
      monthReward30  = Number((forOneHourBtc* 24 * 30).toFixed(3)/10);
      monthReward28 = Number((forOneHourBtc* 24 * 28).toFixed(3)/10);

      let months31 = [1,3,5,7,8,10,12];
      let months30 = [2,4,6,9,11];
      let fevMonth = 2;

      let currentMonth = Number(date.getMonth()+1);
      if(months30.includes(currentMonth )){
        monthReward = monthReward30;
      }
      if(months31.includes(currentMonth )){
        monthReward = monthReward31;
      }
      if(fevMonth == currentMonth){
        monthReward = monthReward28;
      }
      inputMonth.innerHTML = "The reward is for one month : " +  monthReward;
      yearReward = Number((monthReward31 * 7) + (monthReward30  * 4) +  monthReward28);
      inputYear.innerHTML = "The reward is for one month : " +   yearReward;
    }
    else{
      douzeReward =  Number((forOneHour * 12).toFixed(4));
      inputDouze.innerHTML = "The reward is for 12 hours : " +  douzeReward;
      dayReward =  Number((forOneHour * 24).toFixed(4));

      inputDay.innerHTML = "The reward is for one day : " +  dayReward;

      weekReward  = Number((dayReward  * 7).toFixed(3));
      inputWeek.innerHTML = "The reward is for one week : " +  weekReward;
      monthReward31 = Number((forOneHour * 24 * 31).toFixed(3));
      
      monthReward30  = Number((forOneHour * 24 * 30).toFixed(3));
      monthReward28 = Number((forOneHour * 24 * 28).toFixed(3));
 
      let months31 = [1,3,5,7,8,10,12];
      let months30 = [2,4,6,9,11];
      let fevMonth = 2;
      let currentMonth = Number(date.getMonth()+1);
      if(months30.includes(currentMonth )){
        monthReward = monthReward30;
      }
      if(months31.includes(currentMonth )){
        monthReward = monthReward31;
      }
      if(fevMonth == currentMonth){
        monthReward = monthReward28;
      }
      inputMonth.innerHTML = "The reward is for one month : " +  monthReward;
      yearReward = Number((monthReward31 * 7) + (monthReward30  * 4) +  monthReward28);
      inputYear.innerHTML = "The reward is for one Year : " +   yearReward;
    }
  });

  function handleSelectChange(event) {
    const currentValue = event.target.value;
    console.log(currentValue);
  }

  function show(event) {
    event.preventDefault();
    helpGroup.classList.toggle('show-me');
  }
}
