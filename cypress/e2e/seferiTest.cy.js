describe('Seferi Test', () => {
    
    const cities = [
        'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı Merkez', 'Amasya', 'Ankara', 'Antalya', 'Artvin', 'Aydın', 'Balıkesir',
        'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli',
        'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari',
        'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir',
        'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş Merkez', 'Nevşehir',
        'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat',
        'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman',
        'Kırıkkale', 'Batman', 'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
    ];
     it('Rota hesapla', () => {

        cy.visit("http://router.siriusaitech.com/?routeId=20e5b8b3-9447-4cae-a474-48b8d4ad84a2&accessKey=us-GJ8VOG5H753KGC821QEMEEJJOMJOPAOR");
        
        cy.viewport('macbook-15')
        
        cy.get('div#app button[type="button"]:nth-child(1) > button').click();

       // random starting city
       const fromCity = Cypress._.sample(cities);
       cy.get('input#from').click().clear().type(fromCity);
       cy.wait(500);  
       cy.get('.pac-item').first().click();
       

      // clearing intermediate stops
       cy.get('body').then($body => {
        if ($body.find('.text-base').length > 0) {
            
            cy.get('.text-base').each(($el) => {
                cy.wrap($el).click();
            });
        }
    });   

       // random search city number
       const numberOfCities = Cypress._.random(1,5);
  
       for (let i = 0; i < numberOfCities-1; i++) {
        cy.get('.max-h-max > .inline-flex').click();
           const toCity = Cypress._.sample(cities);
           cy.get('.w-full > #to').last().click().type(toCity);
           cy.get('.pac-item').first().click();
           cy.wait(500);

       }

       // random last city
       const toCity = Cypress._.sample(cities);
       cy.get('input[placeholder="Varış Noktası"]').click().clear().type(toCity);  
       cy.wait(500); 
       
       cy.get('.pac-item').first().click();
       cy.get('.mt-auto').click();
    
    });
});