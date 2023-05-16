window.onload = function () {
    let log_in_button = document.getElementById("log-in");

    document.getElementById("tutorial").addEventListener("click", function() {
        $("#tutorial_tab").fadeIn(1000);
    });

    document.getElementById("close_tab").addEventListener("click", function() {
        $("#tutorial_tab").fadeOut(1000);
    });

    t = 4;    
    function Counter() {
        if (t > 0) {
            t -= 1; 
            document.getElementById("counter").innerText = t;
        }
    }
    log_in_button.onclick = function() {
            let username = document.getElementById("username_log").value.replaceAll(" ","");
            if (username != "" && username.length > 3) {
                localStorage.setItem("stored_username", username);
                document.getElementById("result").innerText = "Log-in was successful, redirecting to the game right in: ";
                setInterval(Counter, 1000);
                function igen()
                {
                    window.open("minesweeper.html", "_self");
                    document.getElementById("username_log").value = "";
                }
                setTimeout(igen, 5000);
            }
            else
            {
                document.getElementById("result").innerText = "Log-in was not successful, the username doesn't match the requirements!\n (4-10 characters no whitespace)\nTry again!";
            }   
    }
}





