const dmgIncrease = [0.0148, 0.0438699569134352, 0.0373677248677249, 0.0336283185840708, 0.0296697626418989, 0.0265446224256293, 0.0240147783251232, 0.0224121557454891, 0.0205811138014528, 0.00700280112044818, 0.0168, 0.0148225957049486, 0.0134383202099738, 0.0121423192771084, 0.0111899133175729, 0.0102759413624605, 0.00959040959040959, 0.0089110127826942, 0.00839080459770115, 0.00382832439189541, 0.0078656462585034, 0.00745745745745746, 0.00704721634954193, 0.00671794871794872, 0.00637742777079911, 0.00610651974288338, 0.00582380807510105, 0.00580431177446103, 0.00535714285714286, 0.00286353467561521]

const fullArray = [null, null, null, null]
const skillPercentages = [0.17, 12.36, 8.3, 7.28]
for (let i = 0; i < fullArray.length; i++) {
    var tempArr = []
   for (let a = 0; a < dmgIncrease.length; a++) {
        const var1 = dmgIncrease[a]*skillPercentages[0]
        tempArr.push(var1)
    } 
    fullArray[i] = tempArr;
}

var sum = 0
var pointers = [1, 1, 1, 1]
var curValue = [fullArray[0][0], fullArray[1][0], fullArray[2][0], fullArray[3][0]]
var outputArray = []
var finalArray = []

for (let i = 0; i <= 115; i++) {
    var max = 0
    var position = 0
    var name = null
    
    for (let j = 0; j < pointers.length; j++) {
        if (curValue[j] > max) {
            max = curValue[j];
            position = j;
        }

    }
    switch (position) {
        case 0:
            name = "Micro Missiles"
            break
        case 1:
            name = "Mecha Carrier"
            break
        case 2:
            name = "Big Mech"
            break
        case 3:
            name = "Small Ass Turret"
    }
    pointers[position] = pointers[position] + 1
    outputArray.push(name + " : " + pointers[position])
    curValue[position] = fullArray[position][pointers[position]]   
}

for (let i = 0; i < outputArray.length-1; i++) {
    nextWord = outputArray[i+1].split(" : ")[0]
    if (!outputArray[i].includes(nextWord)){
        finalArray.push(outputArray[i])
    }
}

console.log(JSON.stringify(finalArray))