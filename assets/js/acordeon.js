const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.parentElement;
        const contentElement = parentElement.querySelector('.content');

              acordeonTriggers.forEach((otherTrigger) => {
            const otherParent = otherTrigger.parentElement;
            if (otherParent !== parentElement) {
                otherParent.classList.remove('open');
            }
        });

                parentElement.classList.toggle('open');
    });
});
