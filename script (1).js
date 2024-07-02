function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.912946674468188, lng: -49.06915109636858, titulo: 'Evento 1', descricao: 'Descrição do Evento 1' },
        { lat: -26.920217247964043, lng: -49.05893724469228, titulo: 'Evento 2', descricao: 'Descrição do Evento 2' },
        { lat:-26.915380643776363, lng: -49.0847154184122 , titulo: 'Evento 3', descricao: 'Descrição do Evento 3' }
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function(evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}