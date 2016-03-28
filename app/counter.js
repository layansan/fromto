define(function() {
    var count = 0;
    
    return {
    increment: function(){
        count++;
    },
    
    decrement: function(){
        count--;
    },
    
    getValue: function(){
        return count;
    }
};
});