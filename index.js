//write your code here
const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}]


const averageAge = array => {
    const totalage = array.reduce((pre,cur,index,array) => pre + cur.age,0)
    return Math.floor(totalage / array.length)
}

const bananaBread = array => {
    return array.map(obj => {
        return {...obj, bananaBread :`${obj.name} got banana bread at ${obj.job}`}
        
    })
    
}

const ninetiesBabies = array => {
    return array.filter(person => person.age > 21);
}







console.log(averageAge(alumni))