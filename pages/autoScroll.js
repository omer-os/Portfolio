setTimeout(() => {
    if (window.scrollY < 20)
        window.scrollBy({top: window.innerHeight, left: 0, behavior: 'smooth'})
}, 2500); // we scroll the screen down a bit so the user realises theres more 