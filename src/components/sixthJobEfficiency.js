//15 cores to lvl lv1 is purposely left out

//change to "solErda if you want to see order based on limited solErda instead of cores"
let choice = "cores";

// this is how much your 4th job skill does in your BA, mine is 9.81%
const skillPercentagesFourth = [0.0905, 0.304]; //names[4] 

// this is how much your 5th job skill does in your BA, follow the order in the names thing below
// in my case, my micro missiles does 17%
// mecha carrier does 12.36% and so on...
// the order matters just make sure its the same order as the names array below
const skillPercentagesFifth = [0.159, 0.1116, 0.0647, 0.0576]; //names[0],names[1],names[2],names[3]

// this is how much your origin skill does in your BA (lv 1 origin skill)
const skillPercentagesSixth = [0.0782]; //names[5]

// this is how much 20 ied gives you (mine gives me 1.42% fd), use the GMS spreadsheet to get or just leave as mine
const twentyIed = 1.0142; //dmg increase percentage

// this is how much 20 boss gives you (mine gives me 1.266% fd), use the GMS spreadsheet to get or just leave as mine
const twentyBoss = 1.0266; //dmg increase percentage

// this is how much 50 boss + 50 ied gives you
// funnily enough the thing actually stacks fully additively
const thirtyIedThirtyBoss = 1.0577;

// this is the total dmg% your fourth job skill does at lv 1 mastery
// just multiply the hit count by the dmg numbers and add them up
// for me my 4th job does 338% x6 dmg and 187% x 3 dmg at lv 1, which is 2589%
const fourthBaseline = [2589, 7810]; //total skill% done

// this is the total dmg% your fourth job skill increases by 1 level
// just multiply the hit count by the dmg numbers and add them up FOR THE INCREASE
// for me my 4th job increases by 8% x6 dmg and 7% x 3 dmg per level, which is 69% (nice)
const fourthDmgIncreasePerLevel = [69, 55]; //total skill% increase per lvl

// fill in fifth job skill names based on the order you keyed in the FD just now for fifth job
// fourth job skill should replace Splash-F
// origin skill is origin obviously
var names = [
  "Micro Missiles",
  "Mecha Carrier",
  "Big Mech",
  "Small Ass Turret",
  "Splash-F",
  "Homing Missiles",
  "Origin",
];

//if you have read until here just press run

const coresRequiredFourth = [
  15, 18, 20, 23, 25, 28, 30, 33, 100, 40, 45, 50, 55, 60, 65, 70, 75, 80, 175,
  85, 90, 95, 100, 105, 110, 115, 120, 125, 250
]
const coresRequiredFifth = [
  75, 23, 27, 30, 34, 38, 42, 45, 49, 150, 60, 68, 75, 83, 90, 98, 105, 113, 120,
  263, 128, 135, 143, 150, 158, 165, 173, 180, 188, 375
]
const coresRequiredSixth = [
  30, 35, 40, 45, 50, 55, 60, 65, 200, 80, 90, 100, 110, 120, 130, 140, 150,
  160, 350, 170, 180, 190, 200, 210, 220, 230, 240, 250, 500
]

const solErdaRequiredFourth = [
  1, 1, 1, 1, 1, 1, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 3, 8, 3, 3, 3, 3, 3, 3, 3, 3, 4, 10
]

const solErdaRequiredFifth = [
  1, 1, 1, 2, 2, 2, 3, 3, 8, 3, 3, 3, 3, 3, 3, 3, 3, 4, 12, 4, 4, 4, 4, 4, 5, 5, 5, 6, 15
]

const solErdaRequiredSixth = [
  1, 1, 1, 2, 2, 2, 3, 3, 10, 3, 3, 4, 4, 4, 4, 4, 4, 5, 15, 5, 5, 5, 5, 5, 6, 6, 6, 7, 20
]

let requiredFourth, requiredFifth, requiredSixth

if (choice === "cores") {
  requiredFourth = coresRequiredFourth
  requiredFifth = coresRequiredFifth
  requiredSixth = coresRequiredSixth
} else {
  requiredFourth = solErdaRequiredFourth
  requiredFifth = solErdaRequiredFifth
  requiredSixth = solErdaRequiredSixth
}


const baselineFourth = [[],[]];
const baselineFifth = [
  0.11, 0.00900900900901, 0.00892857142857, 0.00884955752212, 0.00877192982456,
  0.00869565217391, 0.00862068965517, 0.00854700854701, 0.00847457627119,
  0.05042016806723, 0.008, 0.00793650793651, 0.00787401574803, 0.0078125,
  0.0077519379845, 0.00769230769231, 0.00763358778626, 0.00757575757576,
  0.00751879699248, 0.04477611940298, 0.00714285714286, 0.00709219858156,
  0.00704225352113, 0.00699300699301, 0.00694444444444, 0.00689655172414,
  0.00684931506849, 0.00680272108844, 0.00675675675676, 0.0738255033557
];
const baselineSixth = [
  0.03333333333333, 0.03225806451613, 0.03125, 0.03030303030303, 0.02941176470588,
  0.02857142857143, 0.02777777777778, 0.02702702702703, 0.02631578947368,
  0.02564102564103, 0.025, 0.02439024390244, 0.02380952380952, 0.02325581395349,
  0.02272727272727, 0.02222222222222, 0.02173913043478, 0.02127659574468,
  0.02083333333333, 0.02040816326531, 0.02, 0.01960784313725, 0.01923076923077,
  0.0188679245283, 0.01851851851852, 0.01818181818182, 0.01785714285714, 
  0.01754385964912, 0.01724137931034, 0.01694915254237
];
const dmgIncreaseFourth = [[], []];
const dmgIncreaseFifth = [];
const dmgIncreaseSixth = [];
const fullArray = [[], [], [], [], [], [], []];

//Fifth Job Calcs

for (let i = 0; i < requiredFifth.length; i++) {
    dmgIncreaseFifth.push(
      ( baselineFifth[i] /
        requiredFifth[i])
    );
}

for (let i = 0; i < skillPercentagesFifth.length; i++) {
  var tempArr = [];
  for (let j = 0; j < dmgIncreaseFifth.length; j++) {
    const var1 = dmgIncreaseFifth[j] * skillPercentagesFifth[i];
    tempArr.push(var1);
  }
  fullArray[i] = tempArr;
}

//Fourth Job Calcs

for (let i = 0; i < 30; i++) {
  for (let j = 0; j < fourthBaseline.length; j++) {
    baselineFourth[j].push(
      fourthBaseline[j] + fourthDmgIncreasePerLevel[j] * i
    );
  }
}

for (let i = 0; i < requiredFourth.length; i++) {
  for (let j = 0; j < baselineFourth.length; j++) {
    dmgIncreaseFourth[j].push(
      (((baselineFourth[j][i + 1] /
        baselineFourth[j][i]) - 1) /
        requiredFourth[i]) *
        skillPercentagesFourth[j]
    );
  }
}

for (
  let i = skillPercentagesFifth.length;
  i < fullArray.length - skillPercentagesSixth.length;
  i++
) {
  for (let j = 0; j < dmgIncreaseFourth.length; j++) {
    for (let k = 0; k < dmgIncreaseFourth[j].length; k++) {
      const var1 = dmgIncreaseFourth[j][k] * skillPercentagesFourth[j];
      fullArray[i].push(var1);
    }
  }
}

//Sixth Job Calcs

for (let i = 0; i < requiredSixth.length; i++) {
    dmgIncreaseSixth.push(
      (baselineSixth[i+1] /
        requiredSixth[i])
    );
}

//Sixth job 10/20/30 correction
dmgIncreaseSixth[8] = dmgIncreaseSixth[8] * twentyIed
dmgIncreaseSixth[18] = dmgIncreaseSixth[18] * twentyBoss
dmgIncreaseSixth[28] = dmgIncreaseSixth[28] * thirtyIedThirtyBoss

for (
  let i = skillPercentagesFourth.length + skillPercentagesFifth.length;
  i < fullArray.length;
  i++
) {
  for (let j = 0; j < skillPercentagesSixth.length; j++) {
    for (let k = 0; k < dmgIncreaseSixth.length; k++) {
      const var1 = dmgIncreaseSixth[k] * skillPercentagesSixth[j];
      fullArray[i].push(var1);
    }
  }
}

//Made by Pladz

var sum = 0;
var pointers = [0, 0, 0, 0, 0, 0, 0];
var curValue = [
  fullArray[0][0],
  fullArray[1][0],
  fullArray[2][0],
  fullArray[3][0],
  fullArray[4][0],
  fullArray[5][0],
  fullArray[6][0],
];
var outputArray = [];
var finalArray = [];

var totalRuns = 0;
for (let i = 0; i < fullArray.length; i++) {
  totalRuns += fullArray[i].length;
}

totalRuns += fullArray.length;
const checkPosition = [0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < totalRuns; i++) {
  var max = 0;
  var position = 0;

  for (let j = 0; j < pointers.length; j++) {
    if (checkPosition[j] === 0) {
      if (curValue[j] > max) {
        max = curValue[j];
        position = j;
      }
    }
  }

  if (pointers[position] === 29) {
    checkPosition[position] = 1;
  }
  pointers[position] = pointers[position] + 1;
  if (position == 4 || position == 5 ) {
    outputArray.push(names[position] + " : " + (pointers[position] + 1));
  } else if (position == 6) {
    outputArray.push(names[position] + " : " + (pointers[position] + 1));
  } else {
    outputArray.push(names[position] + " : " + (pointers[position]));
  }
  curValue[position] = fullArray[position][pointers[position]];
}

for (let i = 0; i < outputArray.length - 1; i++) {
  nextWord = outputArray[i + 1].split(" : ")[0];
  if (!outputArray[i].includes(nextWord)) {
    finalArray.push(outputArray[i]);
  }
}
console.log(JSON.stringify(finalArray));
