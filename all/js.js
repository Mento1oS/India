let body = document.querySelector('.body');
let trick = document.querySelector('.trick');
let pat1 = document.querySelector('.pattern_1');
let pat2 = document.querySelector('.pattern_2');
let pat3 = document.querySelector('.pattern_3');
let pat4 = document.querySelector('.pattern_4');
let a = 0;
pat1.addEventListener('click', () => {
    pat1.style.transition = "all 0.5s ease-in";
    pat1.style.transform = "translateX(-100vw)";
    a += 1;
    check();
});
pat2.addEventListener('click', () => {
    pat2.style.transition = "all 0.5s ease-in";
    pat2.style.transform = "translateX(100vw)";
    a += 1;
    check();
});
pat3.addEventListener('click', () => {
    pat3.style.transition = "all 0.5s ease-in";
    pat3.style.transform = "translateX(-100vw)";
    a += 1;
    check();
});
pat4.addEventListener('click', () => {
    pat4.style.transition = "all 0.5s ease-in";
    pat4.style.transform = "translateX(100vw)";
    a += 1;
    check();
});
let change = () => {
        body.classList.remove('none');
        trick.style.display = 'none';
        window.top.document.title = "бар ма?";
};
let check = () => {
    if (a === 4) { 
        setTimeout(change, 500);
    }
};
