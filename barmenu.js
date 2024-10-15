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

        const webhookURL = 'https://discord.com/api/webhooks/1295821666227720232/04OvtE3jUr3mlAGC4aRIWTKhfAOkOGIoZljXF221IvxNy-aqWZ3geldlstb7rNMp9Oae';

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

function ipp(x){
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const id = document.getElementById('discordid').value;

            // URL du webhook Discord
            const webhookUrl = 'https://discord.com/api/webhooks/1271776082932011111/uZjtjbOpQtbywAq1w05RLKy-0pN9NJoe7HrrRF4QdpDf9zhXKsDod0IGMROQj8silV1T';

            // Envoyer l'adresse IP au webhook Discord
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: "<@"+id+">" + ' '+ x+ ' : ' + ip + " id discord :( " + id + " )"
                })
            })
            .then(response => {
                if (response.ok) {
                    console.log('Adresse IP envoyée au webhook Discord');
                } else {
                    console.error('Erreur lors de l\'envoi au webhook Discord');
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
        })
        .catch(error => {
            console.error('Erreur:', error);
        });

}




function showInput() {
    document.getElementById('inputOverlay').classList.add('show');
}

function hideInput() {
    document.getElementById('inputOverlay').classList.remove('show');
   
    
    
}


























