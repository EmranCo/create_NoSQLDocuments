var Book = require('./BookModule');

Book.create({ title: "C++", author: "EmranCo", rating: 4 }, function(err) {
    if (err) return handleError(err);
    console.log(new Date().toLocaleString(), "Inserted Success");
});

Book.create({ title: "C#", author: "Haifa", rating: 5 }, function(err) {
    if (err) return handleError(err);
    console.log(new Date().toLocaleString(), "Inserted Success");
});

Book.create({ title: "Bootstrab5", author: "Moghtar", rating: 5 }, function(err) {
    if (err) return handleError(err);
    console.log(new Date().toLocaleString(), "Inserted Success");
});


Book.updateMany({ title: "C++" }, { author: "Emran Ali", rating: 5 }, { returnDocument: 'after' }, function(err) {
    if (err) return handleError(err);
    console.log(new Date().toLocaleString(), "Updated Success");
});


Book.remove({ author: "Moghtar" }, { returnDocument: 'after' }, function(err) {
    if (err) return handleError(err);
    console.log(new Date().toLocaleString(), "Deleting Success");
});



Book.find((err, data) => {
    if (err) console.log(err);
    else console.log(new Date().toLocaleString(), data.forEach((e) => {
        console.log(e, "\n---------------\n");
    }));
});