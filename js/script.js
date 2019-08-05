images = document.getElementsByClassName('image');
imagesLength = document.querySelectorAll('.image').length;
for (let i = 0; i < imagesLength; i++) {
        images[i].addEventListener('click', function () {
                if (images[i].classList[1] != 'success') {
                        checkCard = document.getElementsByClassName('checkCard').length;
                        if (checkCard < 2) {
                                images[i].classList.toggle('checkCard');
                        }
                        if (checkCard == 1) {
                                imageMatch = document.getElementsByClassName('checkCard')
                                if (imageMatch[0].getAttribute('code') == imageMatch[1].getAttribute('code')) {
                                        imageMatch[0].classList.add('success');
                                        imageMatch[1].classList.add('success');
                                        imageMatch[1].classList.remove('checkCard');
                                        imageMatch[0].classList.remove('checkCard');
                                } else {
                                        if (document.getElementsByClassName('fa-heart').length > 0) {
                                                document.getElementsByClassName('fa-heart')[0].remove()
                                        }
                                        if (document.getElementsByClassName('fa-heart').length == 1) {
                                                document.querySelector('.fa-heart').classList.add('lastLife')
                                        }
                                        imageMatch[0].classList.add('fail');
                                        imageMatch[1].classList.add('fail');
                                        imageMatch[1].classList.remove('checkCard');
                                        imageMatch[0].classList.remove('checkCard');
                                        if (document.getElementsByClassName('fa-heart').length == 0) {
                                                document.querySelector('#gameOver').classList.remove('none');
                                                document.querySelector('.gameImages').classList.add('gameOver');
                                        }
                                }
                                if (document.getElementsByClassName('fail').length > 0) {
                                        imageNotMatch = document.getElementsByClassName('fail');
                                        setTimeout(function () {
                                                imageNotMatch[0].classList.remove('fail');
                                                imageNotMatch[0].classList.remove('fail');
                                        }, 1500)
                                }
                        }
                }
                if (document.getElementsByClassName('success').length == 16) {
                        // Win The MemoGame
                }
        })
}
const tryAgain = document.getElementById('tryAgain');
tryAgain.addEventListener('click', function () {
        let gameOver = document.getElementById('gameOver');
        let gameOverImages = document.querySelector('.gameImages');
        gameOver.classList.add('none');
        gameOverImages.classList.remove('gameOver');
        for (i = 0; i < 3; i++) {
                let lifeReset = document.querySelector('.life');
                let lifeHeart = document.createElement('span')
                lifeHeart.classList.add('fas', 'fa-heart');
                lifeReset.appendChild(lifeHeart)
        }

})