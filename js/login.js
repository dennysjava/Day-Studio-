document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulação básica de login
        if (email && password) {
            alert(`Bem-vindo à Day Studio! Login realizado com: ${email}`);
            // Redireciona para a home após o login
            window.location.href = "index.html";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});