function menuToggle() {
    var nav = document.getElementById("nav");
    var toggle = document.getElementById("toggle");
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
}


function showNewContent() {
    document.getElementById('fullpage').style.display = 'none'; // Cache l'ancien contenu
    document.getElementById('newContent').style.display = 'block'; // Affiche le nouveau contenu
    
    
    menuToggle()
}
function showNewContent2() {
    document.getElementById('newContent').style.display = 'none'; // Cache l'ancien contenu
    document.getElementById('fullpage').style.display = 'none'; // Cache l'ancien contenu
    document.getElementById('newContent2').style.display = 'block'; // Affiche le nouveau contenu
  
    menuToggle()
}


function showNewContent3() {
    document.getElementById('newContent3').style.display = 'block'; // Cache l'ancien contenu
    document.getElementById('fullpage').style.display = 'none'; // Cache l'ancien contenu
    document.getElementById('newContent2').style.display = 'none'; // Affiche le nouveau contenu
    document.getElementById('newContent').style.display = 'none'; // Affiche le nouveau contenu
    
    menuToggle()
}

function showNewContent4() {
    document.getElementById('newContent3').style.display = 'none'; // Cache l'ancien contenu
    document.getElementById('modal').style.display = 'block'; // Cache l'ancien contenu
    document.getElementById('fullpage').style.display = 'none'; // Cache l'ancien contenu
    document.getElementById('newContent2').style.display = 'none'; // Affiche le nouveau contenu
    document.getElementById('newContent').style.display = 'none'; // Affiche le nouveau contenu
    
    menuToggle()
}





function hideContent() {
    document.getElementById('newContent').style.display = 'none'; // Cache l'ancien contenu
    document.getElementById('fullpage').style.display = 'block'; // Cache l'ancien contenu
   
   
    
}

function hideContent2() {
    document.getElementById('newContent').style.display = 'block'; // Cache l'ancien contenu
    document.getElementById('fullpage').style.display = 'block'; // Cache l'ancien contenu
    document.getElementById('newContent2').style.display = 'none'; // Affiche le nouveau contenu
    document.getElementById('success').style.display = 'none'; // Affiche le nouveau contenu
 
    menuToggle()
}
function hideContent3() {
    document.getElementById('newContent3').style.display = 'none'; // Cache l'ancien contenu
    document.getElementById('fullpage').style.display = 'block'; // Cache l'ancien contenu
    document.getElementById('newContent2').style.display = 'block'; // Affiche le nouveau contenu
    document.getElementById('newContent').style.display = 'block'; // Affiche le nouveau contenu
    document.getElementById('success').style.display = 'none'; // Affiche le nouveau contenu
    menuToggle()
}
function hideContent4() {
    document.getElementById('newContent3').style.display = 'block'; // Cache l'ancien contenu
    document.getElementById('modal').style.display = 'none'; // Cache l'ancien contenu
    document.getElementById('fullpage').style.display = 'block'; // Cache l'ancien contenu
    document.getElementById('newContent2').style.display = 'block'; // Affiche le nouveau contenu
    document.getElementById('newContent').style.display = 'block'; // Affiche le nouveau contenu
    menuToggle()
}



function proghome(){
    hideContent()
    menuToggle()

}





function submitapp4(){
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('name').value;
        const usernameid = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;
        const message = comment;

        const webhookURL = 'https://discord.com/api/webhooks/1272149137474715718/2retYC2T447hGbhgsFzd59kFfuRpiAIrE__zn3dp_qNg1jw8y1KSdwLyfnVttB8UQMyk';

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "Contact Us Form !" ,
                content: "username : "+ username +"\n" + "ID disocrd: " + usernameid + "\n" + "\n"  +  "Comment details : " + "\n" + "\n" + message +  "\n" + "<@"+usernameid+">"
            })
        }).then(response => {
            if (response.ok) {
                alert('votre message a été envoyé avec succès ! ');
               
            } else {
                alert('Erreur lors de l\'envoi du message.');
            }
        }).catch(error => {
            alert('Erreur: ' + error.message);
        });
    });

}


function connectToFiveM() {
                   
    window.location.href = "fivem://connect/5.252.101.189";
}
















