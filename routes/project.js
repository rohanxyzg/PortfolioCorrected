const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/',(req,res)=>{
    const numProjects = projects.length;
    const projectId = Math.floor(Math.random()*numProjects);
    res.redirect(`/projects/${projectId}`);
});
router.get('/:id',(req,res)=>{
    const projectId = req.params.id;
    const project = projects.find(({ id })=> id === +projectId);
    if(project){
        const str = project.description.split('\n');
        res.render('project',{ project,str });
    }
    else{
        res.sendStatus(404);
    }
});
module.exports = router;
