
describe('Проверка авторизации', function () {
    
    it('1. Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); //ввожу логин
        cy.get('#pass').type('iLoveqastudio1'); //ввожу пароль
        cy.get('#loginButton').click(); //нажать войти
        cy.get('#messageHeader').should('be.visible'); //виден текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие крестика
        })

    it('2. Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').click(); //нажать на забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести логин
        cy.get('#restoreEmailButton').click(); //отправить код
        cy.get('#messageHeader').should('be.visible'); //виден текст
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие крестика
        })

 it('3. Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); //ввожу логин
        cy.get('#pass').type('iLoveqastudio123'); //ввожу не верный пароль
        cy.get('#loginButton').click(); //нажать войти
        cy.get('#messageHeader').should('be.visible'); //виден текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие крестика
        })

 it('4. Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germanija@yahoo.com'); //ввожу неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввожу верный пароль
        cy.get('#loginButton').click(); //нажать войти
        cy.get('#messageHeader').should('be.visible'); //виден текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие крестика
        })

it('5. Логин без @, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); //ввожу логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввожу верный пароль
        cy.get('#loginButton').click(); //нажать войти
        cy.get('#messageHeader').should('be.visible'); //виден текст
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //получаем текст с ошибкой
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие крестика
        })

it('6. Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввожу логин
        cy.get('#pass').type('iLoveqastudio1'); //ввожу пароль
        cy.get('#loginButton').click(); //нажать войти
        cy.get('#messageHeader').should('be.visible'); //виден текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие крестика
        })

})



describe('Автотест на покупку нового фото для своего тренера', function () {
    
    it('Покупка фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('violagurckaija@yandex.ru'); //ввожу логин
        cy.get('#password').type('Lilita67!'); //ввожу пароль
        cy.get('.auth__button').click(); //нажать войти
        cy.get('.header__btns > [href="/shop"]').click(); //нажать на магазин
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
        })
})

