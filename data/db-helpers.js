const db = require('./db_config');

module.exports = {
   getResources,
   getProjects,
   getTasks,
   getProjectById,
   getTasksByProject,
   insertProject,
   insertResource,
   insertTask
}

function getResources() {
   return db('resources');
}

function getProjects() {
   return db('projects');
}

function getTasks() {
   return db('tasks');
}

function getTasksByProject(id) {
   return db('tasks as t')
      .join('projects as p', 'p.id', 't.project_id')
      .where({'p.id': id});
}

function getProjectById(id) {
   return db('projects')
      .where({'id': id})
      .first();
}

function insertProject(data) {
   return db('projects').insert(data, "id");
}

function insertResource(data) {
   return db('resources').insert(data, "id");
}

function insertTask(data) {
   return db('tasks').insert(data, "id");
}