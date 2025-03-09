document.addEventListener('DOMContentLoaded', function() {
    const loveButton = document.getElementById('loveButton');
    const loveCounter = document.getElementById('loveCounter');
    const floatingHearts = document.getElementById('floatingHearts');
    const musicControl = document.getElementById('musicControl');
    const musicIcon = musicControl.querySelector('.music-icon');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    let count = 0;
    let musicPlaying = false;
    
    
    if (localStorage.getItem('loveCount')) {
        count = parseInt(localStorage.getItem('loveCount'));
        loveCounter.textContent = `Número de vezes que eu te amo: ${count}`;
    }
    
    
    function playMusic() {
        backgroundMusic.volume = 0.5; 
        backgroundMusic.play().then(() => {
            musicPlaying = true;
            musicIcon.textContent = '⏸️';
        }).catch(error => {
            console.log('Reprodução automática bloqueada pelo navegador:', error);
        });
    }
    
    
    playMusic();
    
    
    musicControl.addEventListener('click', function() {
        if (musicPlaying) {
            backgroundMusic.pause();
            musicIcon.textContent = '▶️';
            musicPlaying = false;
        } else {
            backgroundMusic.play();
            musicIcon.textContent = '⏸️';
            musicPlaying = true;
        }
    });
    
    loveButton.addEventListener('click', function() {
        count++;
        localStorage.setItem('loveCount', count);
        loveCounter.textContent = `Número de vezes que eu te amo: ${count}`;
        
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 100);
        }
        
        
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 200);
    });
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        
        
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight;
        
        heart.style.left = `${x}px`;
        heart.style.bottom = '0';
        
        floatingHearts.appendChild(heart);
        
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
    
    
    const startDate = new Date('2023-01-15');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    
    const relationshipCounter = document.createElement('p');
    relationshipCounter.textContent = `Estamos juntos há ${diffDays} dias ❤️`;
    relationshipCounter.style.marginTop = '20px';
    relationshipCounter.style.fontWeight = 'bold';
    relationshipCounter.style.color = '#f5576c';
    loveCounter.parentNode.appendChild(relationshipCounter);
    
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createHeart();
        }, 1000 + i * 300);
    }
});
