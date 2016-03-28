define([
    'dojo/dom'], function (dom) {
    var old = {};
        return {
            setText: function (id, text) {
                var node = dom.byId(id);
                old[id] = node.innerHTML;
                node.innerHTML = text;
            }
        };
    });