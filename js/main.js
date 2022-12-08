let topBarLink = document.querySelectorAll('.top-bar-link');

for (let i = 0; i < topBarLink.length; i++) {
    topBarLink[i].addEventListener('mouseover', () => {
        topBarLink[i].style.color = 'black';
    }) 
    topBarLink[i].addEventListener('mouseout', () => {
        topBarLink[i].style.color = '#7A7A7A';
    })
}