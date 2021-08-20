window.onload = function() {
    var ln = window.navigator.language||navigator.browserLanguage;

    if(ln.startsWith('zh')) {
        window.location.href = './zh-CN/';
    } else if(ln == 'de'){
        window.location.href = './de/'; 
    } else if (ln == 'es') {
        window.location.href = './es/'; 
    } else if (ln == 'fr') {
        window.location.href = './fr/'; 
    } else if (ln == 'it') {
        window.location.href = './it/'; 
    } else if (ln == 'ja') {
        window.location.href = './ja/'; 
    } else {
        window.location.href = './en/'; 
    }
}