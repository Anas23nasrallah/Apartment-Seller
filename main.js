const source = $('#apt-template').html();
const template = Handlebars.compile(source)

const renderApts = function (apartments) {
    $("#results").empty()
    let aptHTML = template({data: apartments})
    $("#results").append(aptHTML)
}

$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    if(relevantApts.length === 0){
        alert('Nothing Found')
        return;
    }
    renderApts(relevantApts)
})






