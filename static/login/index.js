
const pupils = document.querySelectorAll('.pupil');
const movingEyes = document.querySelectorAll('.moving-eye');
const movingMouths = document.querySelectorAll('.moving-mouth');

document.addEventListener('mousemove', (e) => {
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
        
        pupil.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
    
    movingEyes.forEach(eye => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = Math.min(eyeRect.width / 3, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 15);
        
        eye.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
    
    movingMouths.forEach(mouth => {
        const mouthRect = mouth.getBoundingClientRect();
        const mouthCenterX = mouthRect.left + mouthRect.width / 2;
        const mouthCenterY = mouthRect.top + mouthRect.height / 2;
        
        const angle = Math.atan2(e.clientY - mouthCenterY, e.clientX - mouthCenterX);
        const distance = Math.min(mouthRect.width / 4, Math.hypot(e.clientX - mouthCenterX, e.clientY - mouthCenterY) / 20);
        
        mouth.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
});
