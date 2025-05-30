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
        reg = new RegExp(document.getElementById('regex').value, document.getElementById('code').value);
    } catch (e) {
        text.innerHTML = "Error: " + e.message
        error.style.visibility = "visible"
        document.getElementById('highlights').innerHTML = ""; // Corrected this line
        return;
    }
    error.style.visibility = "hidden"
    console.log('err')

    let textarea = document.getElementById('textarea');
    let highlights = document.getElementById('highlights');

    newData = textarea.value.replace(reg, (match) => {
        return `<mark>${match}</mark>`
    });


    highlights.innerHTML = newData;
    syncScroll();
}

function syncScroll() {
    let highlights = document.getElementById('highlights');
    let textarea = document.getElementById('textarea');
    highlights.scrollTop = textarea.scrollTop;
    highlights.scrollLeft = textarea.scrollLeft;
}

window.onload = function() {
    update(); // Initial update
    document.getElementById('textarea').addEventListener('input', update);
    document.getElementById('textarea').addEventListener('scroll', syncScroll);
    document.getElementById('regex').addEventListener('keyup', update);
    document.getElementById('code').addEventListener('keyup', update);
};



