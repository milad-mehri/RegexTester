function copyRegex() {


    var copyText = document.getElementById("regex").value;
    const copy = document.createElement('textarea');
    copy.value = `/${copyText}/gi`;
    document.body.appendChild(copy);
    copy.select();
    document.execCommand('copy');
    document.body.removeChild(copy);
}


function update() {
    var error = document.getElementById("invalid");
    var text = document.getElementById("invalidText");
    try {
        reg = new RegExp(document.getElementById('regex').innerHTML, document.getElementById('code').innerHTML);
    } catch(e) {
        text.innerHTML= "Error: " + e.message
        error.style.visibility = "visible"
        highlights.innerHTML = ""
        return;
    }
    error.style.visibility = "hidden"
    console.log('err')
    newData = textarea.value.replace(reg, (match) => {
        return `<mark>${match}</mark>`
    });


    highlights.innerHTML = newData;
}
window.onload = update;



