// import $ from 'jquery';

function datepicker() {
    console.log("Document ready")
    $('#datepicker').datepicker({
        startDate: new Date(),
        multidate: true,
        format: "dd/mm/yyyy",
        daysOfWeekHighlighted: "5,6",
        datesDisabled: ['31/08/2017'],
        language: 'en'
    }).on('changeDate', function(e) {
        // `e` here contains the extra attributes
        console.log("Arribed")
        $(this).find('.input-group-addon .count').text(' ' + e.dates.length);
    });
}