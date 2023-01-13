const person = {
        name: `luke`,
        job: `Farmer`,
        parents: ["Anakin",`Padne`]
}

const name = person.name
const {job , parents}  = person

console.log(name, job, parents)

const [father , mother] = parents


const creatUser = ({name,job,parents}) =>{
        const id = Math.floor(Math.random()*9999)
        return{
                id,
                name,
                job,
                parents
        }
}
const felipe = creatUser(person)
console.log(felipe)