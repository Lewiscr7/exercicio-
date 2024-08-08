// Função para carregar os contatos salvos no localStorage
function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const tbody = document.querySelector('#contactTable tbody');
    tbody.innerHTML = ''; // Limpar a tabela antes de carregar

    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${contact.name}</td><td>${contact.phone}</td>`;
        tbody.appendChild(row);
    });
}

// Função para adicionar um novo contato à tabela e salvar no localStorage
function addContact(name, phone) {
    const tbody = document.querySelector('#contactTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${name}</td><td>${phone}</td>`;
    tbody.appendChild(row);

    // Salvar no localStorage
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push({ name, phone });
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Carregar os contatos ao iniciar a página
window.onload = loadContacts;

// Manipular o envio do formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        addContact(name, phone);
        document.getElementById('contactForm').reset(); // Limpar o formulário após o envio
    }
});
