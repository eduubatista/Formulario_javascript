document.getElementById('contect-form').addEventListener('submit',function(event){
    event.preventDefault();





    const formData = new FormData(event.target)

    emailjs.send().then(response =>
     {
    document.getElementById('response-message').innerText = 'Mensagem enviada com sucesso!';
    this.reset();
     })
     .catch(error => {
    document.getElementById('response-massage').innerText = 'Erro ao enviar a mensagem';
    console.error('Erro ao enviar o e-mail',error)
     });

})