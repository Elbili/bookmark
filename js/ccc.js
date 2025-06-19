function AddBookmark() {
    var nameregex = /^(\w){3}[a-zA-z\d]*$/;
    var urlregex = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/){1}(\w){2,}\.(\w){2,}(\/)?((\w){0,}(\/){1}(\w){1,})*)$/;
    
    var myname = InputName.value;
    var myurl = inputUrl.value;

    if (urlregex.test(myurl) && nameregex.test(myname)) {
        var bookMarks = {
            name: myname,
            url: myurl
        };
        BookmarkContainer.push(bookMarks);
        localStorage.setItem("Items", JSON.stringify(BookmarkContainer));
        display();
        clear();
    } else {
        alert("يرجى إدخال بيانات صحيحة");
    }
}