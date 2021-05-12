const homeRef = document.getElementById('home-page');
const identityButton = document.getElementById('custom-login');
// console.log({identityButton});

if (homeRef && window.netlifyIdentity) {
    console.log('home page ok for netlify indentity')
        window.netlifyIdentity.on('init', user => {
            if (!user) {
                window.netlifyIdentity.on('login', () => {
                    document.location.href = '/admin/';
                });
            }
        });
        identityButton.addEventListener('click', () => window.netlifyIdentity.open('login'));
}