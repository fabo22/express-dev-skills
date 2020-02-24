const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    delete: deleteSkill,
    create,
    new: newSkill
};
function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    const skill = req.body;
    skill.level = 1;
    Skill.create(skill);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    const skillId = parseInt(req.params.id)
    Skill.deleteOne(skillId);
    res.redirect('/skills');
}

function index(req, res) {
    const allSkills = Skill.getAll();
    res.render('skills/index', {
        allSkills
    });
}

function show(req, res) {
    const skillId = parseInt(req.params.id);
    const skill = Skill.getOne(skillId);
    res.render('skills/show', {
        skill,
        skillId
    });
}