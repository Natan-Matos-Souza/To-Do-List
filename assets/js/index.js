function app()
{
    const submitBtn = document.querySelector('#submit-btn');
    const toDoListArea = document.querySelector('#to-do-area');

    function getInputData()
    {
        const mainInput = document.querySelector('#input');
        const inputValue = mainInput.value;

        mainInput.value = "";

        return inputValue;
    }


    submitBtn.addEventListener('click', (e) => {

        e.preventDefault();

        const data = getInputData();

        toDoListArea.innerHTML += `<li>
        <span>${data}</span>
        <input type="button" id="remove-btn" value="Apagar">
        </li>`;

    });


    //Removendo dados
    document.addEventListener('click', (e) => {
        
        const target = e.target;

        switch (target.id)
        {
            case 'remove-btn':
                const targetParentElement = target.parentElement;
                targetParentElement.remove();
                break;
        }

    });

}

app();