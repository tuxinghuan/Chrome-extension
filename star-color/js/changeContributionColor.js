dayContribution=document.getElementsByClassName('day');
contributionColor=document.getElementsByClassName('legend');
c=contributionColor[0].getElementsByTagName('li');
c[1].style.backgroundColor="#F2E5FF"
c[2].style.backgroundColor="#E4CCFF"
c[3].style.backgroundColor="#CA99FF"
c[4].style.backgroundColor="#9433FF"

for(var i=0;i<dayContribution.length;i++){
    oldColor=dayContribution[i].getAttribute('fill');
    switch(oldColor){
        case "#c6e48b":
            dayContribution[i].setAttribute('fill','#F2E5FF');
            break;
        case "#7bc96f":
            dayContribution[i].setAttribute('fill','#E4CCFF');
            break;
        case "#239a3b":
            dayContribution[i].setAttribute('fill','#CA99FF');
            break;
        case "#196127":
            dayContribution[i].setAttribute('fill','#9433FF');
            break;
    }
}
