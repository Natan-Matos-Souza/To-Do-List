function app()
{

    const startBtn = document.querySelector("#start-btn");

    const secondCounter = document.querySelector("#second");
    const minuteCounter = document.querySelector("#minute");
    const hourCounter = document.querySelector("#hour");

    const separatorSpan = document.querySelectorAll("#separator");

    const stopBtn = document.querySelector("#stop-btn");

    let isCouting = false;


    function changeTimeHudColor(color)
    {
        secondCounter.style.color = color;
        minuteCounter.style.color = color;
        hourCounter.style.color = color;

        separatorSpan.forEach((span) => {

            span.style.color = color;

        });
    }

    stopBtn.addEventListener('click', () => {

        clearInterval(secondLoop);
        isCouting = false;  

        changeTimeHudColor('#FF0000');

    });

    startBtn.addEventListener('click', () => {


        function countHour()
        {
            const getHour = parseInt(hourCounter.innerHTML);

            if (getHour != 99)
            {
                hourCounter.innerHTML = getHour + 1;

                minuteCounter.innerHTML = 0;
                secondCounter.innerHTML = 0;

            }
        }

        function countMinute()
        {
            const getMinute = parseInt(minuteCounter.innerHTML);

            if (getMinute != 59)
            {
                minuteCounter.innerHTML = getMinute + 1;
                secondCounter.innerHTML = 0;
            } else {

                countHour();

            }

        }

        if (isCouting == false)
        {

            changeTimeHudColor('#000');
            
            isCouting = true;

            secondLoop = setInterval(() => {
            
                const getSecond = parseInt(secondCounter.innerHTML);
                
                (getSecond == 59) ? countMinute() : secondCounter.innerHTML = getSecond + 1;
    
    
            }, 1 * 1000);
        }

    });

}

app();