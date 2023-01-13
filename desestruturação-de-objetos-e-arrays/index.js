const person = {
        name: `luke`,
        job: `Farmer`,
        parents: ["Anakin",`Padne`]
}

const name = person.name
const {job , parents}  = person

console.log(name, job, parents)

const [father , mother] = parents