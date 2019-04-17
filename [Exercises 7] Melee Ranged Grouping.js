function meleeRangedGrouping (str) {
    if (str === ""){
        return []
    }
    str = str.split(",")
    var arr = [];
    for (var i = 0; i < str.length; i++){
        str[i] = str[i].split("-")
        arr.push(str[i]);
    }
    var hero = [[], []]
    for (var i = 0; i < arr.length; i++){
        if (arr[i][1] === "Ranged"){
            hero[0].push(arr[i][0]);
        } else {
            hero[1].push(arr[i][0]);
        }
    }
    return hero
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []