describe('Login Test', () => {
  const user = {
      username: 'test',
      password: 'test123'
  };
  it('Kayit Ol ve Giris Yap', () => {
      // Giriş sayfasına git
      cy.visit("https://todopurposeless.netlify.app/");

      // //kayıt ol
      cy.get('div#auth span').click();
      cy.get('input#register-username').type(user.username);
      cy.get('input#register-password').type(user.password);
      cy.get('div#register > button').click();

      //giriş yap
      cy.get('input#login-username').type(user.username);
      cy.get('input#login-password').type(user.password);
      cy.get('div#auth > button').click();

      // to-do ekle
      const newTodoText1 = 'Yeni Görev 1';
      const updatedTodoText1 = 'Güncellenmiş Görev 1';

      const newTodoText2 = 'Yeni Görev 2';

      const newTodoText3 = 'Yeni Görev 3';

      const newTodoText4 = 'Yeni Görev 4';

      cy.get("input#new-todo").type(newTodoText1);
      cy.get("div#todo-app div.todo-input.todo-item > button > i").click();

      cy.get("input#new-todo").type(newTodoText2);
      cy.get("div#todo-app div.todo-input.todo-item > button > i").click();

      cy.get("input#new-todo").type(newTodoText3);
      cy.get("div#todo-app div.todo-input.todo-item > button > i").click();

      cy.get("input#new-todo").type(newTodoText4);
      cy.get("div#todo-app div.todo-input.todo-item > button > i").click();
      
      //to-do statü değiştirme kısmı
      cy.contains(newTodoText1).should('exist');
      cy.contains(newTodoText1).parent().find('.status-select').select('Devam Ediyor');
      cy.contains(newTodoText1).parent().find('.status-select').should('have.value', 'Devam Ediyor');

      cy.contains(newTodoText1).parent().find('.status-select').select('Tamamlandı');
      cy.contains(newTodoText1).parent().find('.status-select').should('have.value', 'Tamamlandı');
      
      cy.contains(newTodoText2).should('exist');
      cy.contains(newTodoText2).parent().find('.status-select').select('Devam Ediyor');       
      cy.contains(newTodoText2).parent().find('.status-select').should('have.value', 'Devam Ediyor');
 


      //to-do güncelleme
      cy.get('#todo-list').contains(newTodoText1).parent().find('.update-btn').click();

      cy.get('#todo-list').find('input[type="text"]').click().should('have.value', newTodoText1).clear().type(updatedTodoText1).blur();  

      cy.get('#todo-list').contains(updatedTodoText1).should('exist');

      cy.get('#todo-list').contains(newTodoText1).should('not.exist');


      //to-do silme
      cy.get('#todo-list').contains(newTodoText4).parent().find('.delete-btn').click();

      cy.get('#todo-list').contains(newTodoText4).should('not.exist');
      
  });


});