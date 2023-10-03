//15 cores to lvl lv1 is purposely left out
const coresRequiredFourth = [
  15, 18, 20, 23, 25, 28, 30, 33, 100, 40, 45, 50, 55, 60, 65, 70, 75, 80, 175,
  85, 90, 95, 100, 105, 110, 115, 120, 125, 250,
];
const coresRequiredSixth = [
  30, 35, 40, 45, 50, 55, 60, 65, 200, 80, 90, 100, 110, 120, 130, 140, 150,
  160, 350, 170, 180, 190, 200, 210, 220, 230, 240, 250, 500,
];
const baselineFourth = [[]];
const baselineSixth = [
  1.04, 1.03846153846154, 1.03703703703704, 1.03571428571429, 1.03448275862069,
  1.03333333333333, 1.03225806451613, 1.03125, 1.03030303030303,
  1.02941176470588, 1.02857142857143, 1.02777777777778, 1.02702702702703,
  1.02631578947368, 1.02564102564103, 1.025, 1.02439024390244, 1.02380952380952,
  1.02325581395349, 1.02272727272727, 1.02222222222222, 1.02173913043478,
  1.02127659574468, 1.02083333333333, 1.02040816326531,
];
const dmgIncreaseFourth = [[]];
const dmgIncreaseFifth = [
  0.0148, 0.0438699569134352, 0.0373677248677249, 0.0336283185840708,
  0.0296697626418989, 0.0265446224256293, 0.0240147783251232,
  0.0224121557454891, 0.0205811138014528, 0.00700280112044818, 0.0168,
  0.0148225957049486, 0.0134383202099738, 0.0121423192771084,
  0.0111899133175729, 0.0102759413624605, 0.00959040959040959,
  0.0089110127826942, 0.00839080459770115, 0.00382832439189541,
  0.0078656462585034, 0.00745745745745746, 0.00704721634954193,
  0.00671794871794872, 0.00637742777079911, 0.00610651974288338,
  0.00582380807510105, 0.00580431177446103, 0.00535714285714286,
  0.00286353467561521,
];
const dmgIncreaseSixth = [
  0.0344086021505376, 0.0294642857142857, 0.0257575757575758,
  0.0228758169934641, 0.0205714285714286, 0.0186868686868687,
  0.0171171171171171, 0.0157894736842105, 0.00512820512820513, 0.0128125,
  0.0113821138211382, 0.0102380952380952, 0.00930232558139535,
  0.00852272727272727, 0.00786324786324786, 0.00729813664596273,
  0.00680851063829787, 0.00638020833333333, 0.00291545189504373, 0.006,
  0.00566448801742919, 0.00536437246963563, 0.00509433962264151,
  0.00485008818342152, 0.00462809917355372, 0.00442546583850932,
  0.00423976608187135, 0.00406896551724138, 0.00203389830508475,
];
const fullArray = [[], [], [], [], [], []];
const skillPercentagesFourth = [0.0981];
const skillPercentagesFifth = [0.17, 0.1236, 0.083, 0.0728];
const skillPercentagesSixth = [0.073];

//Fifth Job Calcs

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

for (let i = 0; i < coresRequiredFourth.length; i++) {
  for (let j = 0; j < baselineFourth.length; j++) {
    dmgIncreaseFourth[j].push(
      (baselineFourth[j][i + 1] /
        baselineFourth[j][i] /
        coresRequiredFourth[i]) *
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
var names = [
  "Micro Missiles",
  "Mecha Carrier",
  "Big Mech",
  "Small Ass Turret",
  "Splash-F",
  "Origin",
];
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
    outputArray.push(names[position] + " : " + pointers[position]);
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
