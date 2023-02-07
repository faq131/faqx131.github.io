(function(){
    const externalMetricUrl = 'https://daks01.github.io/FAQx81/heatmapdata-external-clicks.json';
    const heatmapInstance = h337.create({
        container: document.querySelector('[data-externsl-heatmap]'),
        radius: 20
    });
    const heatMapData = {
        max: 10,
        min: 1,
        data: []
    };

    document.querySelector('[data-show-heatmap]').addEventListener("click", handler);

    function handler(e) {
        e.preventDefault();
        e.target.removeEventListener(e.type, arguments.callee);
        getYandexData(externalMetricUrl);
    }
    
    //ToDO пересчитывать координаты точек
    // window.onresize = function(event) {
    //     heatmapInstance.repaint()
    // };

    //get heatmapdata.json (YandexMetrics stat)
    function getYandexData(url){
        fetch(url)
        .then(function(response) {
            if (response.status !== 200) {
                console.log('Status Code: ' +  response.status);
                return;
            }
            response.json().then(function(data) {
                setMapData(data);
                paintMap();
            });
        })
        .catch(function(err) {
            console.log('Error :-S', err);
        });
    }
    
    //set MapData obj
    function setMapData(metricsData){
        let arr = [];

        for(let data of metricsData) {
            arr.push(data.value);
            setMapPoints(data);
        }
        
        heatMapData.max = getMaxValue(arr);
    }
    
    //paint click map
    function paintMap(){
        console.log(heatMapData)
        heatmapInstance.setData(heatMapData);
    }
    
    //set MapData['max'] by finding biggest value
    function getMaxValue(arr){
        let max = Math.max(...arr);
        maxi = arr.indexOf(max);
        arr[maxi] = -Infinity;
        let secondMax = Math.max(...arr);
        arr[maxi] = max;

        return heatMapData.max = max - (max - secondMax) * 0.9;    //компенсируем разрыв между самой кликабельной и всеми остальными
    }

    //set heatMapData['data'] coords
    function setMapPoints(data){
        let anchors = data.url.includes('github.io');
        let url = anchors ? '#'+data.url.split('#')[1] : data.url;
        let link = document.querySelector(`a[href="${url}"]`);

        if (link) {
            let coords = link.getBoundingClientRect();
            let points = {
                x: coords.left + (coords.right - coords.left) / 2,
                y: coords.top + (coords.top - coords.bottom) / 2,
                value: data.value
            };

            heatMapData.data.push(points);
        }
    }
}());