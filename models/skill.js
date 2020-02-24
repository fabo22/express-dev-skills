module.exports = {
    getAll,
    getOne,
    deleteOne,
    create
};

let skills = [
    {title: 'JavaScript', level: 2},
    {title: 'HTML', level: 3},
    {title: 'CSS', level: 2},
    {title: 'Python', level: 0},
];
function deleteOne(id) {
    skills.splice(id, 1);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}

function create(skill) {
    skills.push(skill);
}

// perform testing here

// const results = getOne(3);
// console.log(results);