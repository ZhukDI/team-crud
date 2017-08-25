'use strict';


let programmers = [];
let teamLeaders = [];
let teams = [];

let compileProgrammer = () => {
	let data = programmers;
		
	let source = $("#person-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    let content = $("#programmer-list")[0];
    content.innerHTML = result;
	
}

let addProgrammer = () => {
	event.preventDefault();
	let name = $("#txtName").val();
	let age = $("#txtAge").val();
	let salary = $("#txtSalary").val();
	let skill = $("#txtSkill").val();
	let tmpProgrammer;
		
	$('#add-programmer-click')[0].reset();
	
	tmpProgrammer = new Programmer(name, age, salary, skill, Person.id);
	programmers.push(tmpProgrammer);
	console.log(programmers);
	
	compileProgrammer();
}

let deleteProgrammer = (id) => {
	for(let i = 0; i < programmers.length; i++) {
        if(programmers[i].id == id) {
            programmers.splice(i, 1);
            break;
        }
    }
	
	compileProgrammer();
}

let updateProgrammer = (id) => {
	for(let i = 0; i < programmers.length; i++) {
        if(programmers[i].id == id) {
			$("#txtName").val(programmers[i].name);
			$("#txtAge").val(programmers[i].age);
			$("#txtSalary").val(programmers[i].salary);
			$("#txtSkill").val(programmers[i].skill);
            break;
        }
    }
}

$(document).on("click", ".addProgrammer", function(){
    addProgrammer();
	compileProgrammerName();
});

$(document).on("click", ".deleteProgrammer", function(){
    deleteProgrammer(this.id);
	compileProgrammerName();
	console.log(this.id);
});

$(document).on("click", ".updateProgrammer", function(){
	updateProgrammer(this.id);
	compileProgrammerName();
	deleteProgrammer(this.id);
});





let compileTeamLeader = () => {
	let data = teamLeaders;
		
	let source = $("#teamLeader-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    let content = $("#teamLeader-list")[0];
    content.innerHTML = result;	
}

let addTeamLeader = () => {
	event.preventDefault();
	let name = $("#txtTlName").val();
	let age = $("#txtTlAge").val();
	let salary = $("#txtTlSalary").val();
	let email = $("#txtTlEmail").val();
	let tmpTeamLeader;
		
	$('#add-teamLeader-click')[0].reset();
	
	tmpTeamLeader = new TeamLeader(name, age, salary, email, Person.id);
	teamLeaders.push(tmpTeamLeader);
	console.log(teamLeaders);
	
	compileTeamLeader();
}

let deleteTeamLeader = (id) => {
	for(let i = 0; i < teamLeaders.length; i++) {
        if(teamLeaders[i].id == id) {
            teamLeaders.splice(i, 1);
            break;
        }
    }
	
	compileTeamLeader();
}

let updateTeamLeader = (id) => {
	for(let i = 0; i < teamLeaders.length; i++) {
        if(teamLeaders[i].id == id) {
			$("#txtTlName").val(teamLeaders[i].name);
			$("#txtTlAge").val(teamLeaders[i].age);
			$("#txtTlSalary").val(teamLeaders[i].salary);
			$("#txtTlEmail").val(teamLeaders[i].email);
            break;
        }
    }
}

$(document).on("click", ".addTeamLeader", function(){
    addTeamLeader();
	compileTeamLeaderName();
});

$(document).on("click", ".deleteTeamLeader", function(){
    deleteTeamLeader(this.id);
	compileTeamLeaderName();
	console.log(this.id);
});

$(document).on("click", ".updateTeamLeader", function(){
	updateTeamLeader(this.id);
	compileTeamLeaderName();
	deleteTeamLeader(this.id);
});








let compileTeamLeaderName = () => {
	let data = teamLeaders;
		
	let source = $("#teamLeaderName-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    let content = $("#tlList")[0];
    content.innerHTML = result;	
}

let compileProgrammerName = () => {
	let data = programmers;
		
	let source = $("#programmerName-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    let content = $("#prList")[0];
    content.innerHTML = result;	
}

let searchTeamLeader = (id) => {
	for(let i = 0;  i < teamLeaders.length; i++) {
        if(teamLeaders[i].id == id) {
            return teamLeaders[i];
        }
	}
}

let compileTeam = () => {
	let data = teams;
		
	let source = $("#team-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    let content = $("#team-list")[0];
    content.innerHTML = result;	
}

let addTeam = () => {
	event.preventDefault();
	let name = $("#txtTmName").val();
	let task = $("#txtTmTask").val();
	
	let tmpTeamLeader = searchTeamLeader($("#tlList").val());
	
	let tmpMembers = [];
	for(let i = 0; i < programmers.length; i++){
		if($("#ch"+programmers[i].id).is(':checked')){
			tmpMembers.push(programmers[i]);
		}
	}
	let tmpTeam = new Team(name, task, tmpTeamLeader, tmpMembers, Team.id);
	teams.push(tmpTeam);	
	$('#add-team-click')[0].reset();

	compileTeam();
}

let deleteTeam = (id) => {
	for(let i = 0; i < teams.length; i++) {
        if(teams[i].id == id) {
            teams.splice(i, 1);
            break;
        }
    }	
	compileTeam();
}


$(document).on("click", ".addTeam", function(){
    addTeam();
});

$(document).on("click", ".deleteTeam", function(){
    deleteTeam(this.id);
});