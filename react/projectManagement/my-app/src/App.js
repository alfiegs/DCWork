import React from 'react';
import uuid from 'uuid'; //lets you get a unique id
import Projects from './Project';
import AddProject from './AddProject';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

componentWillMount(){
  this.setState({
    projects: [
      {
        id: uuid.v4(),
        title: "JavaScript",
        category: "Front-End"
      },
      {
        id: uuid.v4(),
        title: "Node",
        category: "Back-End"
      },
      {
        id: uuid.v4(),
        title: "React",
        category: "Front-End"
      }
    ]
  })
}


handleAddProject = (newProject) => {
let oldProjects = this.state.projects;
oldProjects.push(newProject)

this.setState({
  projects: oldProjects
})
}

handleDeleteProject = (id) => {
  let oldProjects = this.state.projects;
  let index = oldProjects.findIndex(pObject => pObject.id === id)
  oldProjects.splice(index, 1)
  this.setState({
    projects: oldProjects
  }) 
}





  render() {
    return (
      <>
      <Projects projects={this.state.projects} onDelete={(id)=>{this.handleDeleteProject(id)}}/>

      <AddProject addProject={(project)=>{this.handleAddProject(project)}}/>
      </>
    );
  }
}


App.propTypes = {
  
};

export default App
