// 1. Find number of characters
/*function stringLength1()
{
    var myString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    console.log('Number of characters:', myString.length)
}
stringLength1()*/

// 1. Find number of characters
function stringLength()
{
    var myString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return myString.length
}
console.log('Number of characters: ', stringLength())

// 2. Find Largest number
function largestNumber(number1, number2)
{
    if(number1 > number2)
    {
        return number1
    }
    else
    {
        return number2
    }
}
console.log('Largest number: ', largestNumber(10, 20))

// 3. Find a number is between 5000 and 9999
function numberisbetween5000and9999(number)
{
    if(number > 5000 && number < 9999)
    {
        return true
    }
    else
    {
        return false
    }
    //return (number > 5000 && number < 9999)
}
console.log('Number is between 5000 and 9999: ', numberisbetween5000and9999(4000))

// 4. Find the cube root
function cubeRoot(number)
{
    return Math.cbrt(number)
}
console.log('Cube Root: ', cubeRoot(64))

// 5. Convert inches to feet
 function ConvertInchesToFeet(inches)
 {
     return inches / 12
 }
 console.log('Convert inches to feet: ', ConvertInchesToFeet(36))

// 6. Convert degrees to Fahrenheit
function toFahrenheit(celsius)
{
    return celsius * 9/5 + 32
}
console.log('Convert degrees to Fahrenheit: ', toFahrenheit(36))

// 7. convert kilograms to pounds and vice vera
function convertWeight(weight, convertTo)
{
    if(convertTo == 'lb')
    {
        // Kilograms to Pounds
        return weight * 2.2046
    }
    else
    {
        // Pounds to Kilograms
        return weight / 2.2046
    }
}
console.log('Convert Kilograms to Pounds: ', convertWeight(10, 'lb'))
console.log('Convert Pounds to Kilograms: ', convertWeight(20, 'kg'))

//8 json file
const usstates ={
    states:{
        Alabama:{
    Name: "alabama",
    Abbreviation:"AL",
    StateNickname: "Yellowhammer State",
    Bird:"Yellowhammer",
    Tree:"Longleaf Pine",
    Region:"South",
    capital:"montgomery",
    population: 200630,
},
    
    
    Alaska:{
        state: "alaska",
        Abbreviation:"AK",
        Nickname:"The Last Frontier",
        Region: "West",
        StateBird:"Willow Ptarmigan",
        StateTree:"SitkaSpruce",  
        capital: "juneau",
        population: 31275,
    },

    Florida:{ 
        state: "florida",
        Abbreviation:"FL",
        StateNickname: "Sunshine State",
        Region: "South",
        Bird: "Mockingbird",
        Tree: "Sabal Palm", 
      capital:"tallahassee",
      population: 196169,
     },

     Hawaii: { 
         state: "hawaii",
         Abbreviation:"AL",
         StateNickname:"Aloha State",
         Region: "West",
         Bird:" Nene",
         Tree:"Candlenut Tree",
      capital:"Honolulu",
      population: 350964,
    },

      Idaho:{ 
          state: "idaho",
          Abbreviation:"ID",
          Statenickname:"The Gem State",
          Region: "West",
          Bird:  "Mountain Bluebird",
          Tree:"Western White Pine",          
      capital:"boise",
      population: 235684},

      Maryland:{
          state: "maryland",
          Abbreviation:"MD",
          StateNickname:  "TheOldLineState",
          Region:  "South",
          Bird: "Baltimore Oriole",
          Tree: "WhiteOak",
      capital:"annapolis",
      population: 38394},

     Minnesota: { state: "minnesota",
     Abbreviation:"MN",
      capital:"saint paul",
      StateNickname: "NorthStarState",
      Region:  " Midwest",
      Bird:  "Common Loon",
      Tree: "Red Pine",
      population: 311527},

}


}

console.log(usstates.states.Maryland)




//9 json nfl

const NFLfootballteam={    

    team:{ 
        atlanta: {
            state:"atlanta",    
            name : "atlanta falcan",
          playagainst: ["bills","Rams","Saints","browns","panthers"],
          Date:09/08 -09/12,
          players:["Patrick Mahomes", "Tom Brady"," Ezekiel Elliott","Saquon Barkley","Aaron Rodgers","etc"]
      },
  
  
      Baltimore:{
          State:"baltimore", 
           name : "baltimore ravens",
          playagainst: ["bills","Rams","Saints","browns","panthers"],
          Date:09/08 -09/12,
          players:["Patrick Mahomes", "Tom Brady"," Ezekiel Elliott","Saquon Barkley","Aaron Rodgers","etc"]
      },
  
  
      newyork:{
          State:"newyork", 
          name : "newyork jets",
          playagainst: ["bills","Rams","Saints","browns","panthers"],
          Date:09/08 -09/12,
          players:["Patrick Mahomes", "Tom Brady"," Ezekiel Elliott","Saquon Barkley","Aaron Rodgers","etc"]
      },
  
      pittsburgh:{
          State:"pittsburgh",
           name : "pittsburgh steelers",
           playagainst: ["bills","Rams","Saints","browns","panthers"],
           Date:09/08 -09/12,
           players:["Patrick Mahomes", "Tom Brady"," Ezekiel Elliott","Saquon Barkley","Aaron Rodgers","etc"]
          },
  }
  }
  
  console.log(NFLfootballteam.team.Baltimore)
  





// 10. Find the longest string
function longestString(string1, string2)
{
    if(string1.length > string2.length)
    {
        return string1
    }
    else
    {
        return string2
    }
}
console.log('Longest string: ', longestString('India', 'America'))

//11.find the shortest

function shortestString(string1, string2)
{
    if(string1.length < string2.length)
    {
        return string1
    }
    else
    {
        return string2
    }
}
console.log('shortest string: ', shortestString('India', 'America'))









