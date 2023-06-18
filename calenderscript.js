$(function () {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        "autoApply": true,
        "showDropdowns": true,
        locale: {
            format: 'MM/DD/YYYY h:mm A',
            "daysOfWeek": ["S", "M", "T", "W", "T", "F", "S"],
            "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        },
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Last 3 Days': [moment().subtract(3, 'days'), moment()],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()]
        },
    }, cb);

    cb(start, end);


    document.querySelector('.daterangepicker').addEventListener('click', () => {
        if (document.querySelector('.daterangepicker').style.display === 'block') {
            document.querySelector('.daterangepicker').style.left === '345px !important'
            document.querySelector('.calendar.left').style.display = 'block'
            document.querySelector('.calendar.right').style.display = 'block'
            document.querySelector('.range_inputs').style.top = '98px'
        }
    })

    document.querySelector('.ranges ul li').insertAdjacentHTML('beforeBegin', '<p id="date-range-text">Date Range: </p><select class="select-day"><option>Today</option></select>')
    document.querySelector('.select-day').addEventListener('click', () => {
        const listItems = document.querySelectorAll('.ranges ul li')
        listItems.forEach(item => {
            item.style.display = "block"
        })
    })
});