// HOW TO GET URL PARAMETERS
function getParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if(results){
        return results[1];
    }else{
        return undefined;
    }
}