document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения из формы
    const book = document.getElementById('book').value;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const address = document.getElementById('address').value;

    // Формируем сообщение
    const message = `${name}, спасибо за заказ. ${quantity} экземпляров "${book}" будет доставлено ${deliveryDate} по адресу ${address}.`;

    // Выводим сообщение на экран
    document.getElementById('confirmationMessage').innerText = message;

    // Очищаем форму
    this.reset();
});