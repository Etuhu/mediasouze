//Карта 2GIS на главной
let map = document.getElementById("map");
let addressCardWrapper = document.querySelector(".offer-list-wrapper");
let adressCards = document.querySelectorAll(".offer-list-wrapper .accordion-item");
let offerList = document.querySelector(".offer-list");

if (map) {
    DG.then(function () {
        map = DG.map("map", {
            center: [55.344563, 86.097347],
            zoom: 15,
			zoomControl: false,
			fullscreenControl: false
        });
		mapicon = DG.divIcon({
			className: 'map-icon',
			html: '<svg width="51" height="71" viewBox="0 0 51 71" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.8258 26.1453C50.8326 25.9037 50.836 25.6613 50.836 25.418C50.836 11.38 39.456 0 25.418 0C11.38 0 0 11.38 0 25.418C0 25.66 0.00338205 25.9012 0.0101015 26.1416C0.00338965 26.3054 0 26.4699 0 26.6351C0 32.4287 2.39041 38.0636 8.68515 46.635C18.4858 60.0477 20.7169 64.0159 23.5057 71H27.2506C29.8801 64.4127 32.2705 60.2064 42.1508 46.7144C48.844 37.5874 50.836 32.27 50.836 26.6351C50.836 26.4711 50.8326 26.3079 50.8258 26.1453Z" fill="#F20988"/></svg>',
			iconSize: [51, 71] /* Размер иконки */,
			iconAnchor: [25, 71],
		});
		trIcon = DG.divIcon({
			className: 'map-icon',
			html: '<svg width="51" height="71" viewBox="0 0 51 71" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.8258 26.1453C50.8326 25.9037 50.836 25.6613 50.836 25.418C50.836 11.38 39.456 0 25.418 0C11.38 0 0 11.38 0 25.418C0 25.66 0.00338205 25.9012 0.0101015 26.1416C0.00338965 26.3054 0 26.4699 0 26.6351C0 32.4287 2.39041 38.0636 8.68515 46.635C18.4858 60.0477 20.7169 64.0159 23.5057 71H27.2506C29.8801 64.4127 32.2705 60.2064 42.1508 46.7144C48.844 37.5874 50.836 32.27 50.836 26.6351C50.836 26.4711 50.8326 26.3079 50.8258 26.1453Z" fill="#F20988"/></svg><img src="img/triangle.png" width="25" class="icon-type">',
			iconSize: [51, 71] /* Размер иконки */,
			iconAnchor: [25, 71],
		});
		sqrIcon = DG.divIcon({
			className: 'map-icon',
			html: '<svg width="51" height="71" viewBox="0 0 51 71" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.8258 26.1453C50.8326 25.9037 50.836 25.6613 50.836 25.418C50.836 11.38 39.456 0 25.418 0C11.38 0 0 11.38 0 25.418C0 25.66 0.00338205 25.9012 0.0101015 26.1416C0.00338965 26.3054 0 26.4699 0 26.6351C0 32.4287 2.39041 38.0636 8.68515 46.635C18.4858 60.0477 20.7169 64.0159 23.5057 71H27.2506C29.8801 64.4127 32.2705 60.2064 42.1508 46.7144C48.844 37.5874 50.836 32.27 50.836 26.6351C50.836 26.4711 50.8326 26.3079 50.8258 26.1453Z" fill="#F20988"/></svg><img src="img/sqr.png" width="25" class="icon-type">',
			iconSize: [51, 71] /* Размер иконки */,
			iconAnchor: [25, 71],
		});
		xIcon = DG.divIcon({
			className: 'map-icon',
			html: '<svg width="51" height="71" viewBox="0 0 51 71" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.8258 26.1453C50.8326 25.9037 50.836 25.6613 50.836 25.418C50.836 11.38 39.456 0 25.418 0C11.38 0 0 11.38 0 25.418C0 25.66 0.00338205 25.9012 0.0101015 26.1416C0.00338965 26.3054 0 26.4699 0 26.6351C0 32.4287 2.39041 38.0636 8.68515 46.635C18.4858 60.0477 20.7169 64.0159 23.5057 71H27.2506C29.8801 64.4127 32.2705 60.2064 42.1508 46.7144C48.844 37.5874 50.836 32.27 50.836 26.6351C50.836 26.4711 50.8326 26.3079 50.8258 26.1453Z" fill="#F20988"/></svg><img src="img/x.png" width="25" class="icon-type">',
			iconSize: [51, 71] /* Размер иконки */,
			iconAnchor: [25, 71],
		});

        //Создаем путой массив, в который будут добавляться маркеры
        let addressArray = [];

        //Создаем переменные под каждый маркер и добавляем их в созданный ранее массив addressArray
        var address1 = DG.marker([55.359104, 86.133663], {icon: sqrIcon}).addTo(map);
        addressArray.push(address1);
        var address2 = DG.marker([55.344563, 86.097347], {icon: trIcon}).addTo(map);
        addressArray.push(address2);
        var address3 = DG.marker([55.342519, 86.061912], {icon: xIcon}).addTo(map);
        addressArray.push(address3);
        var address4 = DG.marker([55.364916, 86.072899], {icon: mapicon}).addTo(map);
        addressArray.push(address4);

        console.log(addressArray);

		// DG.marker([55.359104, 86.133663], {icon: sqrIcon}).addTo(map);
		// DG.marker([55.344563, 86.097347], {icon: trIcon}).addTo(map);
		// DG.marker([55.344563, 86.097347], {icon: xIcon}).addTo(map);
        // DG.marker([55.344563, 86.097347], {icon: mapicon}).addTo(map);

        //Создаем группу с маркерами и размещаем их на карте
        let group = DG.featureGroup(addressArray);
        group.addTo(map);
        group.on('click', function(e) {
            map.setView([e.latlng.lat, e.latlng.lng], 17);
        });

        //Функция удаления активного класса у элемента
        let removeActiveClass = function (el, className) {
            el.classList.remove(className);
        };
        //Функция добавления активного класса элементу
        let addActiveClass = function (el, className) {
            el.classList.add(className);
        };
        //Функция активации пина на карте
        let pinActivator = function (currentPin) {
            addressArray.forEach(function(addressArrayItem) {
                removeActiveClass(addressArrayItem._icon, "active");
            });
            addActiveClass(currentPin._icon, "active");
        };


        //Взаимосвязанная активация соответствующих контактных блоков и пинов при клике
        let showAddressItem = function(currentItem) {
            adressCards.forEach(function(addressCardItem) {
                if (addressCardItem.classList.contains("active")) {
                    addressCardItem.classList.remove("active");
                }

                let collapseModes = addressCardItem.querySelector(".accordion-collapse");
                if (collapseModes.classList.contains("show")) {
                    new bootstrap.Collapse(collapseModes).hide();
                }

            });
            currentItem.classList.add("active");
        }

        // Активация пина на карте при клике на кнопку в соответствующей карточке контаков
        adressCards.forEach(function(addressCardItem, i) {
            let addressCardItemButton = addressCardItem.querySelector(".accordion-button");
            addressCardItemButton.addEventListener("click", function() {
                pinActivator(addressArray[i]);
                map.setView(addressArray[i].getLatLng(), 17);
                showAddressItem(addressCardItem);

                let addressCardParent = addressCardItemButton.closest("accordion-item");
                if (addressCardParent) {
                    let collapseModes = addressCardParent.querySelector(".accordion-collapse");
                    new bootstrap.Collapse(collapseModes).toggle();
                }
            });
        });


        //Активация соответствующей карточки контаков клике на пин
        addressArray.forEach(function(addressArrayItem, i) {
            addressArrayItem.on('click', function() {
                pinActivator(addressArrayItem);
                showAddressItem(adressCards[i]);
                let collapseModes = adressCards[i].querySelector(".accordion-collapse");
                if (!collapseModes.classList.contains("show")) {
                    new bootstrap.Collapse(collapseModes).show();
                }
            });
        });
        //Фильтры
        const markersBase = document.querySelector(".leaflet-marker-pane").innerHTML;
        let markers = document.querySelectorAll(".map-icon");
        let markersCollection = document.getElementsByClassName("map-icon");
        const offersBase = document.querySelectorAll(".offer-list-wrapper .accordion-item");
        let offersCollection = document.getElementsByClassName("offer-list-wrapper .accordion-item");
        let locations = document.querySelectorAll(".map .locations .location-button");
        let types = document.querySelectorAll(".type-filters .type-button");
        let resetButtonLocations = document.querySelector(".reset-button--locations");

        //Присваиваем меткам на карте data-атрибуты, по аналогии с карточками размещений
        markers.forEach(function(marker, i) {
            marker.dataset.location = adressCards[i].querySelector(".accordion-collapse").dataset.location;
            marker.dataset.type = adressCards[i].querySelector(".accordion-collapse").dataset.type;
        });

        //Показываем кнопку сброса, если есь хоть одна активная кнопка филтра по местоположению
        let resetButtonToggler = function () {
            let resetButtonLocationsCounter = 0;
            locations.forEach(function(locationButton) {
                if (locationButton.classList.contains("active")) {
                    resetButtonLocationsCounter += 1;
                };
                return resetButtonLocationsCounter;
            });
            if (resetButtonLocationsCounter > 0) {
                resetButtonLocations.classList.add("show");
            } else {
                resetButtonLocations.classList.remove("show");
            };
        };

        // let resetLocations = function () {
        //     resetButtonLocations.addEventListener("click", function() {

        //     });
        // };


        let locationFitering = function () {
            locations.forEach(function(locationButton) {
                locationButton.addEventListener("click", function() {
                    if (!locationButton.classList.contains("active")) {
                        locationButton.classList.remove("inactive");
                        locationButton.classList.add("active");
                        offersBase.forEach(function(offer) {
                            if (offer.querySelector(".accordion-collapse").dataset.location !== locationButton.dataset.location) {
                                offer.classList.add("d-none");
                            }
                        });
                        markers.forEach(function(marker) {
                            if (marker.dataset.location !== locationButton.dataset.location) {
                                marker.classList.add("d-none");
                            }
                        });
                    } else {
                        locationButton.classList.remove("active");
                        locationButton.classList.add("inactive");
                        let inActiveLocationButtons = document.querySelectorAll(".map .locations .location-button.inactive");
                        inActiveLocationButtons.forEach(function(inActiveLocationButton) {
                            offersBase.forEach(function(offer) {
                                if (offer.querySelector(".accordion-collapse").dataset.location == inActiveLocationButton.dataset.location) {
                                    offer.classList.add("d-none");
                                } else {
                                    offer.classList.remove("d-none");
                                }
                            });
                            markers.forEach(function(marker) {
                                if (marker.dataset.location == inActiveLocationButton.dataset.location) {
                                    marker.classList.add("d-none");
                                } else {
                                    marker.classList.remove("d-none");
                                }
                            });
                        });

                    };
                    // locationButton.classList.toggle("active");
                    resetButtonToggler();
                });
            });
        }
        locationFitering();
    });
}