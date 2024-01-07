var agora = new Date()
var diasem = agora.getDay()

/*
dom seg ter qua qui sex sáb 
0   1    2    3  4   5     6

*/
switch (diasem){
    case 0:
        console.log('hoje é dom')
        break

    case 1:
        console.log('hoje é seg')
        break

    case 2:
        console.log('hoje é ter')
        break

    case 3:
        console.log('hoje é qua')
        break

    case 4:
        console.log('hoje é qui')
        break

    case 5:
        console.log('hoje é sex')
        break
    case 6:
        console.log('hoje é sab')
        break
    default:
        console.log('erro')
        break
   
}