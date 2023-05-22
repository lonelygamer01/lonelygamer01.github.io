
document.getElementById("check").addEventListener("click", function() {
    if (document.getElementById("check").checked == true) 
    {
        document.getElementById("eng").style.color = "rgba(255, 212, 42, 0.46)";
        document.getElementById("hun").style.color = "rgba(255, 255, 255, 0.46)";
        document.getElementById("bio").innerHTML = 
        `
        My name is Daniel Szabo, I'm a beginner but enthusiastic software developer living in Hungary <br>
        who is open to the new technologies. I got into programming when <br>
        I was 17, as a teenager i used many apps and the web so i decided to dig into them <br>
        and learn how they work. <br>
        I have knowledge in <span class="yellow_text">web development</span> HTML, CSS, JavaScript, PHP. <br>
        <span class="yellow_text">Databases:</span> SQL, XML, JSON, MongoDB. <br>
        <span class="yellow_text">Backend:</span> Python, C# <br>
        <span class="yellow_text">Mobile development:</span> Flutter, React <br>
        I'm passionate about working on mobile & desktop applications. <br>
        I love to play chess and videogames where i need to use more my brain but I don't <br>
        despise a good book with a glass of whiskey at the end of the week.<br>
        `;
        document.getElementById("reach").innerHTML = "Where You can reach me:";
        document.getElementById("reach_links").innerHTML = 
        `
        <p> <img src="github.png" id="github"> Most of my project's code is up on <span><a href="https://github.com/lonelygamer01?tab=repositories" target="_blank">GitHub</a></span></p>
        <p> <img src="gmail.png" id="gmail"> <span class="yellow_text">szada.hu@gmail.com</span></p>
        <p> <img src="phone.png" id="phone"> <span class="yellow_text">06/20/919/0095</span></p>
        <p> <img src="cv.png" id="cv"> My <a href="#" target="_blank">reusme/CV</a></p>
        `;
        document.getElementById("title").innerText = "Projects";
        document.getElementsByTagName("a")[7].innerText = "more...";
    }
    else 
    {
        document.getElementById("hun").style.color = "rgba(255, 212, 42, 0.46)";
        document.getElementById("eng").style.color = "rgba(255, 255, 255, 0.46)";
        document.getElementById("bio").innerHTML = 
        `
        Az én nevem Szabó Dániel, kezdő, de lelkes szoftverfejlesztő vagyok, aki Magyarországon él, <br>
        aki nyitott az új technológiákra. Akkor kezdett el érdekelni a programozás, mikor <br>
        17 éves voltam, tinédzserként sok alkalmazást és az internetet használtam, ezért úgy döntöttem, hogy beleásom magam ezekbe <br>
        és megtanulják, hogyan működnek. <br>
        Van tapasztalatom az alap <span class="yellow_text">web fejlesztésben</span> HTML, CSS, JavaScript, PHP. <br>
        <span class="yellow_text">Adatbázis:</span> SQL, XML, JSON, MongoDB. <br>
        <span class="yellow_text">Backend:</span> Python, C# <br>
        <span class="yellow_text">Mobil fejlesztés:</span> Flutter, React <br>
        Szivesen dolgoznék mobil és asztali alkalmazásokon. <br>
        Imádok sakkozni és az olyan videojátékokat, ahol többet kell használnom az agyamat, de nem <br>
        vetek meg egy jó könyvet egy pohár whiskyvel a hét végén.<br>
        `;
        document.getElementById("reach").innerHTML = "Ahol megtalálsz:";
        document.getElementById("reach_links").innerHTML = 
        `
        <p> <img src="github.png" id="github"> Projektjeim kódját megtalálhatod a <span><a href="https://github.com/lonelygamer01?tab=repositories" target="_blank">GitHubon</a></span></p>
        <p> <img src="gmail.png" id="gmail"> <span class="yellow_text">szada.hu@gmail.com</span></p>
        <p> <img src="phone.png" id="phone"> <span class="yellow_text">06/20/919/0095</span></p>
        <p> <img src="cv.png" id="cv"> <a href="#" target="_blank">Önéletrajzom</a></p>
        `;
        document.getElementById("title").innerText = "Projektek";
        document.getElementsByTagName("a")[7].innerText = "több...";
    }
});


