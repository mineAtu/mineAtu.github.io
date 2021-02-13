var h = 900;
var w = 500;
var left = (screen.width / 2) - ( w / 2);
var top = (screen.height / 2) - (h / 2);
function cmds() {
    window.open('comandos','_blank','modal =yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left)
window.close()
}
function meadd() {
// https://discordapp.com/oauth2/authorize?=&client_id=756616827236253797&scope=bot&permissions=8
window.open('https://discordapp.com/oauth2/authorize?=&client_id=${client.user.id}&scope=bot&permissions=8','_blank','modal =yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left)
}
