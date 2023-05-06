let day = document.getElementById("dayOfTheWeek");
            let date = document.getElementById('date');
            let d = new Date();
            let information = d.toLocaleString();
            date.innerText = information;
            let a = d.getDay();
            
            switch(a){
                case 0:
                day.innerText = "Sunday";
                break;
                case 1:
                day.innerText = "Monday";
                break;
                case 2:
                day.innerText = "Tusday";
                break;
                case 3:
                day.innerText = "Wensday";
                break;
                case 4:
                day.innerText = "Tursday";
                break;
                case 5:
                day.innerText = "Friday";
                break;
                case 6:
                day.innerText = "Saterday";
                break;
            }
        