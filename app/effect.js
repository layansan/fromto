require([
    'dojo/dom',
    'dojo/fx',
    'dojo/domReady!'], function(dom, fx){
    
        
        var docNode= dom.byId('changetext');
        docNode.innerHTML += " : Added by dojo";
        
        fx.slideTo({
            node: docNode,
            top: 100,
            left: 200
        }).play();
    });