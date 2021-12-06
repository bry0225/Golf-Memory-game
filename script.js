const golf = ['images/golfer1.jpeg', 'images/golfer2.jpeg', 'images/golfer3.jpeg', 'images/golfer4.jpeg'];

const cards = [];
//object that will hold card status. Showing, matched with another card, image of card.

const canvases = document.getElementsByClassName('card')

for (let i = 0; i < canvases.length; i++) {
    const canvas = canvases[i];
    const context = canvas.getContext('2d');
    //context is a var that allows to draw on the canvas
    context.fillStyle = 'blue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    var card = {

    }

    card.show = function() {

    }

    card.hide = function() {

    }

    canvas.addEventListener('click', function(){
        console.log('a card was click')
        //context.fillStyle = 'red';
        //context.fillRect(0, 0, canvas.width, canvas.height);

        const randomGolfer = Math.floor(Math.random() * golf.length);
        var golfingSource = golf[randomGolfer]

        let image = new Image();
        image.src = golfingSource;
        
        image.onload = function(){
            context.drawImage(image, 0, 0, canvas.width, canvas.height)
        }
    });
    //something happens after click
}
