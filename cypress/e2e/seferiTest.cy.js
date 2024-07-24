describe('Seferi Test', () => {

    const cities = {
        'Adana': ['Aladağ', 'Ceyhan', 'Çukurova', 'Feke', 'İmamoğlu'],
        'Adıyaman': ['Besni', 'Çelikhan', 'Gerger', 'Gölbaşı', 'Kahta'],
        'Afyonkarahisar': ['Başmakçı', 'Bayat', 'Bolvadin', 'Çay', 'Çobanlar'],
        'Ağrı': ['Diyadin', 'Doğubayazıt', 'Eleşkirt', 'Hamur', 'Merkez'],
        'Amasya': ['Göynücek', 'Gümüşhacıköy', 'Hamamözü', 'Merkez', 'Merzifon'],
        'Ankara': ['Altındağ', 'Ayaş', 'Bala', 'Beypazarı', 'Çamlıdere'],
        'Antalya': ['Akseki', 'Aksu', 'Alanya', 'Demre', 'Döşemealtı'],
        'Artvin': ['Ardanuç', 'Arhavi', 'Borçka', 'Hopa', 'Kemalpaşa'],
        'Aydın': ['Bozdoğan', 'Buharkent', 'Çine', 'Didim', 'Efeler'],
        'Balıkesir': ['Altıeylül', 'Ayvalık', 'Balya', 'Bandırma', 'Bigadiç'],
        'Bilecik': ['Bozüyük', 'Gölpazarı', 'İnhisar', 'Merkez', 'Osmaneli'],
        'Bingöl': ['Adaklı', 'Genç', 'Karlıova', 'Kiğı', 'Merkez'],
        'Bitlis': ['Adilcevaz', 'Ahlat', 'Güroymak', 'Hizan', 'Merkez'],
        'Bolu': ['Dörtdivan', 'Gerede', 'Göynük', 'Kıbrıscık', 'Mengen'],
        'Burdur': ['Ağlasun', 'Altınyayla', 'Bucak', 'Çavdır', 'Çeltikçi'],
        'Bursa': ['Büyükorhan', 'Gemlik', 'Gürsu', 'Harmancık', 'İnegöl'],
        'Çanakkale': ['Ayvacık', 'Bayramiç', 'Biga', 'Bozcaada', 'Çan'],
        'Çankırı': ['Atkaracalar', 'Bayramören', 'Çerkeş', 'Eldivan', 'Ilgaz'],
        'Çorum': ['Alaca', 'Bayat', 'Boğazkale', 'Dodurga', 'İskilip'],
        'Denizli': ['Acıpayam', 'Babadağ', 'Baklan', 'Bekilli', 'Beyağaç'],
        'Diyarbakır': ['Bağlar', 'Bismil', 'Çermik', 'Çınar', 'Çüngüş'],
        'Edirne': ['Enez', 'Havsa', 'İpsala', 'Keşan', 'Lalapaşa'],
        'Elazığ': ['Ağın', 'Alacakaya', 'Arıcak', 'Baskil', 'Karakoçan'],
        'Erzincan': ['Çayırlı', 'İliç', 'Kemah', 'Kemaliye', 'Otlukbeli'],
        'Erzurum': ['Aşkale', 'Çat', 'Hınıs', 'Horasan', 'İspir'],
        'Eskişehir': ['Alpu', 'Beylikova', 'Çifteler', 'Günyüzü', 'Han'],
        'Gaziantep': ['Araban', 'İslahiye', 'Karkamış', 'Nizip', 'Oğuzeli'],
        'Giresun': ['Alucra', 'Bulancak', 'Çamoluk', 'Çanakçı', 'Dereli'],
        'Gümüşhane': ['Kelkit', 'Köse', 'Kürtün', 'Şiran', 'Torul'],
        'Hakkari': ['Çukurca', 'Şemdinli', 'Yüksekova', 'Derecik', 'Merkez'],
        'Hatay': ['Altınözü', 'Arsuz', 'Defne', 'Dörtyol', 'Erzin'],
        'Isparta': ['Aksu', 'Atabey', 'Eğirdir', 'Gelendost', 'Gönen'],
        'Mersin': ['Akdeniz', 'Anamur', 'Aydıncık', 'Bozyazı', 'Çamlıyayla'],
        'İstanbul': ['Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar'],
        'İzmir': ['Aliağa', 'Balçova', 'Bayındır', 'Bayraklı', 'Bergama'],
        'Kars': ['Akyaka', 'Arpaçay', 'Digor', 'Kağızman', 'Sarıkamış'],
        'Kastamonu': ['Abana', 'Ağlı', 'Araç', 'Azdavay', 'Bozkurt'],
        'Kayseri': ['Akkışla', 'Bünyan', 'Develi', 'Felahiye', 'Hacılar'],
        'Kırklareli': ['Babaeski', 'Demirköy', 'Kofçaz', 'Lüleburgaz', 'Pehlivanköy'],
        'Kırşehir': ['Akçakent', 'Akpınar', 'Boztepe', 'Çiçekdağı', 'Kaman'],
        'Kocaeli': ['Başiskele', 'Çayırova', 'Darıca', 'Derince', 'Dilovası'],
        'Konya': ['Ahırlı', 'Akören', 'Akşehir', 'Altınekin', 'Beyşehir'],
        'Kütahya': ['Altıntaş', 'Aslanapa', 'Çavdarhisar', 'Domaniç', 'Dumlupınar'],
        'Malatya': ['Akçadağ', 'Arapgir', 'Arguvan', 'Battalgazi', 'Darende'],
        'Manisa': ['Ahmetli', 'Akhisar', 'Alaşehir', 'Demirci', 'Gölmarmara'],
        'Kahramanmaraş': ['Afşin', 'Andırın', 'Çağlayancerit', 'Dulkadiroğlu', 'Ekinözü'],
        'Mardin': ['Artuklu', 'Dargeçit', 'Derik', 'Kızıltepe', 'Mazıdağı'],
        'Muğla': ['Bodrum', 'Dalaman', 'Datça', 'Fethiye', 'Kavaklıdere'],
        'Muş': ['Bulanık', 'Hasköy', 'Korkut', 'Malazgirt', 'Merkez'],
        'Nevşehir': ['Avanos', 'Derinkuyu', 'Gülşehir', 'Hacıbektaş', 'Kozaklı'],
        'Niğde': ['Altunhisar', 'Bor', 'Çamardı', 'Çiftlik', 'Ulukışla'],
        'Ordu': ['Akkuş', 'Altınordu', 'Aybastı', 'Çamaş', 'Çatalpınar'],
        'Rize': ['Ardeşen', 'Çamlıhemşin', 'Çayeli', 'Derepazarı', 'Fındıklı'],
        'Sakarya': ['Adapazarı', 'Akyazı', 'Arifiye', 'Erenler', 'Ferizli'],
        'Samsun': ['Alaçam', 'Asarcık', 'Atakum', 'Ayvacık', 'Bafra'],
        'Siirt': ['Baykan', 'Eruh', 'Kurtalan', 'Pervari', 'Şirvan'],
        'Sinop': ['Ayancık', 'Boyabat', 'Dikmen', 'Durağan', 'Erfelek'],
        'Sivas': ['Akıncılar', 'Altınyayla', 'Divriği', 'Doğanşar', 'Gemerek'],
        'Tekirdağ': ['Çerkezköy', 'Çorlu', 'Ergene', 'Hayrabolu', 'Kapaklı'],
        'Tokat': ['Almus', 'Artova', 'Başçiftlik', 'Erbaa', 'Niksar'],
        'Trabzon': ['Akçaabat', 'Araklı', 'Arsin', 'Beşikdüzü', 'Çarşıbaşı'],
        'Tunceli': ['Çemişgezek', 'Hozat', 'Mazgirt', 'Nazımiye', 'Ovacık'],
        'Şanlıurfa': ['Akçakale', 'Birecik', 'Bozova', 'Ceylanpınar', 'Eyyübiye'],
        'Uşak': ['Banaz', 'Eşme', 'Karahallı', 'Sivaslı', 'Ulubey'],
        'Van': ['Bahçesaray', 'Başkale', 'Çaldıran', 'Çatak', 'Edremit'],
        'Yozgat': ['Akdağmadeni', 'Aydıncık', 'Boğazlıyan', 'Çandır', 'Çayıralan'],
        'Zonguldak': ['Alaplı', 'Çaycuma', 'Devrek', 'Gökçebey', 'Kilimli'],
        'Aksaray': ['Ağaçören', 'Eskil', 'Gülağaç', 'Güzelyurt', 'Ortaköy'],
        'Bayburt': ['Aydıntepe', 'Demirözü', 'Merkez'],
        'Karaman': ['Ayrancı', 'Başyayla', 'Ermenek', 'Kazımkarabekir', 'Sarıveliler'],
        'Kırıkkale': ['Bahşili', 'Balışeyh', 'Çelebi', 'Delice', 'Karakeçili'],
        'Batman': ['Beşiri', 'Gercüş', 'Hasankeyf', 'Kozluk', 'Sason'],
        'Şırnak': ['Beytüşşebap', 'Cizre', 'Güçlükonak', 'İdil', 'Silopi'],
        'Bartın': ['Amasra', 'Kurucaşile', 'Ulus', 'Merkez'],
        'Ardahan': ['Çıldır', 'Damal', 'Göle', 'Hanak', 'Posof'],
        'Iğdır': ['Aralık', 'Karakoyunlu', 'Tuzluca', 'Merkez'],
        'Yalova': ['Altınova', 'Armutlu', 'Çınarcık', 'Çiftlikköy', 'Termal'],
        'Karabük': ['Eflani', 'Eskipazar', 'Ovacık', 'Safranbolu', 'Yenice'],
        'Kilis': ['Elbeyli', 'Musabeyli', 'Polateli', 'Merkez'],
        'Osmaniye': ['Bahçe', 'Düziçi', 'Hasanbeyli', 'Kadirli', 'Sumbas'],
        'Düzce': ['Akçakoca', 'Cumayeri', 'Çilimli', 'Gölyaka', 'Gümüşova']
    };

    const vehicleTypes = ["Tır", "Kamyon / Kırkayak", "Kamyonet", "Minivan"];
    const routeTypes = ["EN HIZLI", "EN KISA"];
    it('Rota hesapla', () => {

        

        cy.visit("http://router.siriusaitech.com/?routeId=20e5b8b3-9447-4cae-a474-48b8d4ad84a2&accessKey=us-GJ8VOG5H753KGC821QEMEEJJOMJOPAOR");

        cy.viewport('macbook-15')
        cy.wait(500);
        for (let k = 0; k < 10; k++) {
            cy.get('div#app button[type="button"]:nth-child(1) > button').click();

            // random starting city
            const selectedFromCity = Cypress._.sample(Object.keys(cities));
            const selectedFromDistrict = Cypress._.sample(cities[selectedFromCity]);
            cy.get('input#from').click().clear().type(`${selectedFromCity}, ${selectedFromDistrict}`);
            cy.wait(500);
            cy.get('.pac-item', { timeout: 2000 })
                .should('be.visible')
                .first()
                .click();


            // clearing intermediate cities
            cy.get('body').then($body => {
                if ($body.find('.text-base').length > 0) {

                    cy.get('.text-base').each(($el) => {
                        cy.wrap($el).click();
                    });
                }
            });

            // random search city number
            const numberOfCities = Cypress._.random(1, 5);

            for (let i = 0; i < numberOfCities - 1; i++) {
                cy.get('.max-h-max > .inline-flex').click();
                const selectedIntermediateCity = Cypress._.sample(Object.keys(cities));
                const selectedIntermediateDistrict = Cypress._.sample(cities[selectedIntermediateCity]);
                cy.get('.w-full > #to').last().click().type(`${selectedIntermediateCity}, ${selectedIntermediateDistrict}`);
                cy.get('.pac-item', { timeout: 2000 })
                    .should('be.visible')
                    .first()
                    .click();
                cy.wait(500);

            }

            // random last city
            const selectedToCity = Cypress._.sample(Object.keys(cities));
            const selectedToDistrict = Cypress._.sample(cities[selectedToCity]);
            cy.get('input[placeholder="Varış Noktası"]').click().clear().type(`${selectedToCity}, ${selectedToDistrict}`);
            cy.wait(500);

            cy.get('.pac-item', { timeout: 2000 })
                .should('be.visible')
                .first()
                .click();
            cy.get('.mt-auto').click();
            cy.intercept('POST', '**/generate', (req) => {
                req.reply((res) => {
                    expect(res.statusCode).to.equal(200);
                });
            }).as('calculate');
            cy.wait('@calculate');
            cy.wait(1000);
            // vehicle type
            if (k === 0) {
                cy.get('.inline-flex:nth-child(2) path').click();
            }

            vehicleTypes.forEach(type => {
                cy.get(`button[role='combobox'][type='button'][aria-controls='radix-vue-select-content-18']`)
                    .should('be.visible')
                    .click();


                cy.get('div[role="group"]').contains(type).click();
                cy.wait(500);

                cy.get('.gap-3 > .justify-center').should('be.visible').click();
                cy.wait('@calculate');
                routeTypes.forEach(routeType=>{
                    cy.get(`button[role='combobox'][type='button'][aria-controls='radix-vue-select-content-17']`).should('be.visible').click();
                    cy.get('div[role="group"]').contains(routeType).click();
                cy.wait(500);
                 cy.get('.gap-3 > .justify-center').should('be.visible').click();
                cy.wait('@calculate');
                });       
            });

             routeTypes.forEach(routeType=>{
                    cy.get(`button[role='combobox'][type='button'][aria-controls='radix-vue-select-content-17']`).should('be.visible').click();
                    cy.get('div[role="group"]').contains(routeType).click();
                cy.wait(500);
                 cy.get('.gap-3 > .justify-center').should('be.visible').click();
                cy.wait('@calculate');
                }); 
        }

    });
});