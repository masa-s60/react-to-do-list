const addTask = (inputTask) => {
  tasks.push({comment : inputTask, status : '作業中'});
  displayTargetTaskList();
  newTask.value = '';
}

export default addTask;
