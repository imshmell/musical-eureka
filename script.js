
                            const items = document.querySelectorAll('.process__item');

                            items.forEach(item => {
                                item.addEventListener('click', () => {
                                    if(item.classList.contains('show')) {
                                    item.style.height = '';
                                    item.classList.remove('show');
                                } else {
                                    item.style.height = item.scrollHeight + 'px';
                                    item.classList.add('show');
                                }
                            });
                            });



                            // <!-- Вызываем календарь по иконке и передаем значение input in label + правильный формат записи, на массив разбиваем и праивльно собираем -->
                            window.addEventListener('DOMContentLoaded', () => {

                            const input = document.querySelector('input[type="date"]');

                            const icon = document.querySelector('.form__field-icon');

                            const label = document.querySelector('label[for="date"]');

                            icon.addEventListener('click', () => {
                            
                                input.showPicker();  
                            });

                            input.addEventListener('input', updateLabel);

                            function updateLabel() {

                                let inputValue = input.value.split('-');

                                label.textContent = `${inputValue[1]}/${inputValue[2]}/${inputValue[0]}`;

                            };

                            });



                                    // <!-- Нужно вообще убрать видимость знаечния поля + передавать значение из option в label -->

                                        const select = document.querySelector('select');
                                        select.selectedIndex = -1;

                                
                                        // Получаем все input
                                        const inputs = document.querySelectorAll('.form__field');
            
                                        // Перебираем все input
                                        for (let i = 0; i < inputs.length; i++) {
            
                                            // Вешаем обработчик события focus
                                            inputs[i].addEventListener('focus', function() {
            
                                                // Проверяем, что элемент в фокусе
                                                if (document.activeElement === this) {
                                                console.log(this);
            
                
                                                    // Записываем атрибут for
                                                    const attributeFor = this.getAttribute('id');
                                                    console.log(attributeFor);
                  
                                                    // Получаем все label
                                                    const labels = document.querySelectorAll('.form__field-label');
                  
                                                    // Перебираем все label
                                                    for (let j = 0; j < labels.length; j++) {
                  
                                                        // Если атрибут for совпадает
                                                        if (labels[j].getAttribute('for') === attributeFor) {
                    
                                                        // Меняем стиль 
                                                        labels[j].style.top = '0px';
            
                                                        }
                                                    }
                                                }
                                            });
                                        }
