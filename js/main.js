var InputName = document.getElementById("inputName");
var inputUrl = document.getElementById("inputUrl");
var BookmarkContainer = [];

if (localStorage.getItem('Items') != null) {
    BookmarkContainer = JSON.parse(localStorage.getItem('Items'));
    display();
}

function AddBookmark() {
    // Define the URL validation regex
    var urlRegex = /^(https:\/\/|http:\/\/){1}[\w]*$/;
    var nameregex = /^(\w){3}[a-zA-z\d]*$/;
    var myname = InputName.value;
    var urlValue = inputUrl.value;

    if (!urlRegex.test(urlValue)&&!nameregex.test(myname)) {
        alert(" ----لازم موقع له اسم من 3 حروف علي الاقل  -----او يرجي منك إدخال رابط صحيح يبدأ بـ http:// أو https:// ");
        return;
    }

    var bookMarks = {
        name: InputName.value,
        url: urlValue
    };
    BookmarkContainer.push(bookMarks);
    localStorage.setItem("Items", JSON.stringify(BookmarkContainer));
    display();
    clear();
}

function clear() {
    InputName.value = "";
    inputUrl.value = "";
}

function display() {
    var Cartona = '';
    for (var i = 0; i < BookmarkContainer.length; i++) {
        Cartona += `
        <tr class="bg-light border border-top">
            <td class="p-2">${i + 1}</td>
            <td class="p-2">${BookmarkContainer[i].name}</td>
            <td class="p-2">
                <a href="${BookmarkContainer[i].url}" target="_blank">
                    <button class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i>Visit</button>
                </a>
            </td>
            <td class="p-2">
                <button onclick="deletebookmark(${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button>
            </td>
        </tr>`;
    }
    document.getElementById("tablebodycontent").innerHTML = Cartona;
}

function deletebookmark(item) {
    BookmarkContainer.splice(item, 1);
    localStorage.setItem('Items', JSON.stringify(BookmarkContainer));
    display();
}
