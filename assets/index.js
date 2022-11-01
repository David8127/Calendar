var container = document.querySelector(".container");
var blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var date = new Date();

function pastPresentOrFuture(hour) {
    if (date.getHours() === hour) {
        return "present";
    }   else if (date.getHours() > hour) {
        return "past"
    }   else {
        return "future"
    }
}

localStorage.setItem(blocks, container); //change once save button is made

for (var i = 0; i < blocks.length; i++) {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "row timeBlock");
    wrapper.classList.add(pastPresentOrFuture(blocks[i]));
    var block = document.createElement("div");
    var textbox = document.createElement("textarea");
    textbox.setAttribute("class", "description col-md-10");
    block.setAttribute("class", "hour");
    block.textContent = moment(blocks[i], 'HH').format('h a');

    wrapper.appendChild(block);
    wrapper.appendChild(textbox);
    container.appendChild(wrapper);

    let btn = document.createElement("button");
    btn.innerHTML = "Save";
    document.body.time-block.append(btn);
    btn.setAttribute("class", "saveBtn saveBtn-i:hover");
    
}

