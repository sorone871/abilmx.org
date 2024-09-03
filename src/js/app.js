function cambiarFondo(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    banner.style.background = `url("./build/img/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    //http://127.0.0.1:5500/build/img/movies/bg-little-mermaid.jpg
    contents.forEach(content =>{
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
