
const pupils = document.querySelectorAll('.pupil');
const movingEyes = document.querySelectorAll('.moving-eye');
const movingMouths = document.querySelectorAll('.moving-mouth');

const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

let eyeState = 'normal';

function setPupilsToLeft() {
    pupils.forEach(pupil => {
        pupil.style.transition = 'transform 0.3s ease';
        pupil.style.transform = 'translate(calc(-50% - 8px), calc(-50%))';
    });
    
    movingEyes.forEach(eye => {
        eye.style.transition = 'transform 0.3s ease';
        eye.style.transform = 'translate(-8px, 0)';
    });
}

function setPupilsToNormal() {
    pupils.forEach(pupil => {
        pupil.style.transition = 'transform 0.3s ease';
        pupil.style.transform = 'translate(-50%, -50%)';
    });
    
    movingEyes.forEach(eye => {
        eye.style.transition = 'transform 0.3s ease';
        eye.style.transform = 'translate(0, 0)';
    });
}

document.addEventListener('mousemove', (e) => {
    if (eyeState !== 'normal') return;
    
    pupils.forEach(pupil => {
        const eye = pupil.parentElement;
        const eyeRect = eye.getBoundingClientRect();
        
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        
        const distance = Math.min(
            eyeRect.width / 4,
            Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 10
        );
        
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        
        pupil.style.transition = 'transform 0.1s ease';
        pupil.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
    
    movingEyes.forEach(eye => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = Math.min(eyeRect.width / 3, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 15);
        
        eye.style.transition = 'transform 0.1s ease';
        eye.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
    
    movingMouths.forEach(mouth => {
        const mouthRect = mouth.getBoundingClientRect();
        const mouthCenterX = mouthRect.left + mouthRect.width / 2;
        const mouthCenterY = mouthRect.top + mouthRect.height / 2;
        
        const angle = Math.atan2(e.clientY - mouthCenterY, e.clientX - mouthCenterX);
        const distance = Math.min(mouthRect.width / 4, Math.hypot(e.clientX - mouthCenterX, e.clientY - mouthCenterY) / 20);
        
        mouth.style.transition = 'transform 0.1s ease';
        mouth.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
});

passwordInput.addEventListener('focus', () => {
    eyeState = 'left';
    setPupilsToLeft();
});

passwordInput.addEventListener('blur', () => {
    eyeState = 'normal';
    setPupilsToNormal();
});

togglePassword.addEventListener('click', () => {
    const icon = togglePassword.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});
