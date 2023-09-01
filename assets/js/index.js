function app() {
  const submitBtn = document.querySelector("#submit-btn");
  const toDoListArea = document.querySelector("#to-do-area");

  let storageData = [];

  loadData();
  
  function saveData()
  {
    localStorage.setItem('data', storageData);
  }

  function loadData()
  {
    savedData = localStorage.getItem('data', storageData);
    savedData = savedData.split(',');
    
    storageData.push(...savedData);

    storageData.map((data) => {
      
      if (data)
      {
        toDoListArea.innerHTML += `<li>
        <span>${data}</span>
        <input type="button" class="remove-btn" value="Apagar" title="Apagar tarefa">
        </li>`;
      }

    });
  }

  function getInputData() {
    const mainInput = document.querySelector("#input");
    const inputValue = mainInput.value;

    mainInput.value = "";

    return inputValue;
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const data = getInputData();

    toDoListArea.innerHTML += `<li>
        <span>${data}</span>
        <input type="button" class="remove-btn" value="Apagar" title="Apagar tarefa">
        </li>`;
    
    storageData.push(data);
    saveData();

  });

  //Removendo dados
  document.addEventListener("click", (e) => {
    const target = e.target;

    switch (target.classList.value) {
      case "remove-btn":
        const targetParentElement = target.parentElement;

        const siblingElement = target.previousElementSibling.innerHTML;

        
        const indexToRemove = storageData.indexOf(siblingElement);
        storageData.splice(indexToRemove, 1);
        
        saveData();

        targetParentElement.remove();
        break;
    }
  });
}

app();
