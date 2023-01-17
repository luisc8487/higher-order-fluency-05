const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]


const averageAge  = (arr) =>{
    console.log(Math.floor(arr.reduce((acc, arr) => acc + arr.age, 0)/alumni.length));
}
averageAge(alumni) // 22


const orderedAlumni = (arr) => {
    console.log(arr.sort((a,b) => b.age-a.age));
}
orderedAlumni(alumni) // returns [
//   { name: 'Devonte', job: 'WW', language: 'JavaScript', age: 23 },
//   {
//     name: 'Shemar',
//     job: 'SquareSpace',
//     language: 'JavaScript',
//     age: 23
//   },
//   { name: 'Jarrit', job: 'TPT', language: 'JavaScript', age: 22 },
//   {
//     name: 'Stephanie',
//     job: 'JPMorgan',
//     language: 'JavaScript',
//     age: 21
//   },
//   { name: 'Enmanuel', job: 'Asana', language: 'JavaScript', age: 21 },
//   { name: 'Cielo', job: 'NYT', language: 'JavaScript', age: 21 }
// ]


const allUseJavaScript = (arr) => {
    console.log(arr.some(e => e.language === "JavaScript"));
}
 allUseJavaScript(alumni) // returns true