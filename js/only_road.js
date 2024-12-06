map = L.map('map', {
    // disable zooming, because we will use double-click to set up marker
    doubleClickZoom: false
}).setView([64.54578, 40.54916], scaleMap);

// add an OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // copyrights
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="http://gurtam.com">Gurtam</a>'
}).addTo(map);

let customLayer = L.geoJson(null, {
    style: function (feature) {
        return {
            color: '#ff0000',
            weight: 3.5,
            opacity: 1
        }
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
});
// this can be any kind of omnivore layer
omnivore.kml('kml/1arh.kml', null, customLayer).addTo(map);



//
let customLayer2 = L.geoJson(null, {
    style: function (feature) {
        return {
            color: '#9c27b0',
            weight: 3.5,
            opacity: 1
        }
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
});
// this can be any kind of omnivore layer
omnivore.kml('kml/2arh.kml', null, customLayer2).addTo(map);


//
let customLayer3 = L.geoJson(null, {
    style: function (feature) {
        return {
            color: '#0000ff',
            weight: 3.5,
            opacity: 1
        }
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
});
// this can be any kind of omnivore layer
omnivore.kml('kml/2_arh.kml', null, customLayer3).addTo(map);


//
let customLayer4 = L.geoJson(null, {
    style: function (feature) {
        return {
            color: '#0f9d58',
            weight: 3.5,
            opacity: 1
        }
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
});
// this can be any kind of omnivore layer
omnivore.kml('kml/3arh.kml', null, customLayer4).addTo(map);


//
let customLayer5 = L.geoJson(null, {
    style: function (feature) {
        return {
            color: '#424242',
            weight: 1.5,
            opacity: 1
        }
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
});

// this can be any kind of omnivore layer
omnivore.kml('kml/trot.kml', null, customLayer5).addTo(map);


$("#showAll").click(function (event) {
    event.preventDefault();

    $("#arh1")[0].checked = true;
    $("#arh2")[0].checked = true;
    $("#arh3")[0].checked = true;
    $("#arh4")[0].checked = true;
    $("#arh5")[0].checked = true;

    $(".check").each(function (i, el) {
        $(el).change(); // Trigger the event.
    })
});

$("#clearAll").click(function (event) {
    event.preventDefault();

    $(".check").each(function (i, el) {
        el.checked = false; // Set new status (unchecked) first.
        $(el).change(); // Trigger the event.
    })
});

$(".check").change(function () {
    var layerClicked = $(this).attr("id");
    switch (layerClicked) {
        case "arh1":
            toggleLayer(this.checked, customLayer);
            break;
        case "arh2":
            toggleLayer(this.checked, customLayer2);
            break;
        case "arh3":
            toggleLayer(this.checked, customLayer3);
            break;
        case "arh4":
            toggleLayer(this.checked, customLayer4);
            break;
        case "arh5":
            toggleLayer(this.checked, customLayer5);
            break;
        // ...and so on...
    }
});

function toggleLayer(checked, layer) {
    if (checked) {
        map.addLayer(layer);
    } else {
        map.removeLayer(layer);
    }
}