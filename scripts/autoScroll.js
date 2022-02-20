setTimeout(() => {
    if (window.scrollY < 20)
        window.scrollBy({top: window.innerHeight - 70, left: 0, behavior: 'smooth'})
}, 1800); // we scroll the screen down a bit so the user realises theres more 