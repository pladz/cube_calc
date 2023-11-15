//15 cores to lvl lv1 is purposely left out

let choice = "cores";

const coresRequiredFourth = [
  15, 18, 20, 23, 25, 28, 30, 33, 100, 40, 45, 50, 55, 60, 65, 70, 75, 80, 175,
  85, 90, 95, 100, 105, 110, 115, 120, 125, 250
]
const coresRequiredFifth = [
  23, 27, 30, 34, 38, 42, 45, 49, 150, 60, 68, 75, 83, 90, 98, 105, 113, 120, 263, 128, 135, 143, 150, 158, 165, 173, 180, 188, 375
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


const baselineFourth = [[]];
const baselineFifth = [
  1.11, 1.00900900900901, 1.00892857142857, 1.00884955752212, 1.00877192982456,
  1.00869565217391, 1.00862068965517, 1.00854700854701, 1.00847457627119,
  1.05042016806723, 1.008, 1.00793650793651, 1.00787401574803, 1.0078125,
  1.00709219858156, 1.00704225352113, 1.00699300699301, 1.00694444444444,
  1.00689655172414, 1.00684931506849, 1.00680272108844, 1.00675675675676,
  1.0077519379845, 1.00769230769231, 1.00763358778626, 1.00757575757576,
  1.00751879699248, 1.04477611940298, 1.00714285714286, 1.0738255033557
];
const baselineSixth = [
  1.03333333333333, 1.03225806451613, 1.03125, 1.03030303030303, 1.02941176470588,
  1.02857142857143, 1.02777777777778, 1.02702702702703, 1.02631578947368,
  1.02564102564103, 1.025, 1.02439024390244, 1.02380952380952, 1.02325581395349,
  1.02272727272727, 1.02222222222222, 1.02173913043478, 1.02127659574468,
  1.02083333333333, 1.02040816326531, 1.02, 1.01960784313725, 1.01923076923077,
  1.0188679245283, 1.01851851851852, 1.01818181818182, 1.01785714285714, 
  1.01754385964912, 1.01724137931034, 1.01694915254237
];
const dmgIncreaseFourth = [[]];
const dmgIncreaseFifth = [];
const dmgIncreaseSixth = [];
var names = [
  "Micro Missiles",
  "Mecha Carrier",
  "Big Mech",
  "Small Ass Turret",
  "Splash-F",
  "Origin",
];
const fullArray = [[], [], [], [], [], []];
const skillPercentagesFourth = [0.0981]; //names[4]
const skillPercentagesFifth = [0.17, 0.1236, 0.083, 0.0728]; //names[0],names[1],names[2],names[3]
const skillPercentagesSixth = [0.08]; //names[5]
const twentyIed = 1.0142; //dmg increase percentage
const twentyBoss = 1.0266; //dmg increase percentage
const thirtyIedThirtyBoss = 1.0577; //dmg increase percentage after first two are applied

//Fifth Job Calcs

for (let i = 0; i < requiredFifth.length; i++) {
    dmgIncreaseFifth.push(
      (baselineFifth[i + 1] /
        baselineFifth[i] /
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

const fourthBaseline = [2589]; //total skill% done
const fourthDmgIncreasePerLevel = [69]; //total skill% increase per lvl

//Fourth Job Calcs

for (let i = 0; i < 30; i++) {
  for (let j = 0; j < fourthBaseline.length; j++) {
    baselineFourth[0].push(
      fourthBaseline[j] + fourthDmgIncreasePerLevel[j] * i
    );
  }
}

for (let i = 0; i < requiredFourth.length; i++) {
  for (let j = 0; j < baselineFourth.length; j++) {
    dmgIncreaseFourth[j].push(
      (baselineFourth[j][i + 1] /
        baselineFourth[j][i] /
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
      (baselineSixth[i + 1] /
        baselineSixth[i] /
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



var sum = 0;
var pointers = [0, 0, 0, 0, 0, 0];
var curValue = [
  fullArray[0][0],
  fullArray[1][0],
  fullArray[2][0],
  fullArray[3][0],
  fullArray[4][0],
  fullArray[5][0],
];
var outputArray = [];
var finalArray = [];

var totalRuns = 0;
for (let i = 0; i < fullArray.length; i++) {
  totalRuns += fullArray[i].length;
}

totalRuns += fullArray.length;
const checkPosition = [0, 0, 0, 0, 0, 0];

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
  if (position == 4) {
    outputArray.push(names[position] + " : " + (pointers[position] + 1));
  } else if (position == 5) {
    outputArray.push(names[position] + " : " + (pointers[position] + 1));
  } else {
    outputArray.push(names[position] + " : " + (pointers[position] + 1));
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
