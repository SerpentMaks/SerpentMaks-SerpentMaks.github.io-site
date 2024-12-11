// Функция для создания снежинок
function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    
    // Указываем количество снежинок
    const totalSnowflakes = 100;

    for (let i = 0; i < totalSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';

        // Случайный размер снежинки
        const size = Math.random() * 1.5 + 0.5; // Размер от 0.5em до 2em
        snowflake.style.fontSize = `${size}em`;

        // Случайная длительность падения
        const fallDuration = Math.random() * 5 + 5; // От 5 до 10 секунд
        snowflake.style.animationDuration = `${fallDuration}s, 3s`;

        // Случайная позиция
        const startPosition = Math.random() * 100; // От 0% до 100% ширины экрана
        snowflake.style.left = `${startPosition}%`;

        // Случайная задержка для эффекта рандомности
        const delay = Math.random() * 5; // Задержка от 0 до 5 секунд
        snowflake.style.animationDelay = `${delay}s, 0s`;

        // Добавление снежинки на страницу
        snowflakesContainer.appendChild(snowflake);
    }
}

// Запуск генерации снежинок при загрузке страницы
window.onload = function() {
    createSnowflakes();
};
