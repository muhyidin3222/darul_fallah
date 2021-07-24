function myFunction() {
    document.getElementById("donasi").value = "50000";
}

function myFunction2() {
    document.getElementById("donasi").value = "100000";
}

function myFunction3() {
    document.getElementById("donasi").value = "250000";
}

function myFunction4() {
    document.getElementById("donasi").value = "1000000";
}
function phone() {
    document.getElementById("donasihp").value = "10000";
}

function phone2() {
    document.getElementById("donasihp").value = "50000";
}

function phone3() {
    document.getElementById("donasihp").value = "100000";
}

function phone4() {
    document.getElementById("donasihp").value = "250000";
}

$(function () {
    $('[data-toggle="popover"]').popover()
})

$("#donation_form").submit(function (event) {
    event.preventDefault();

    $.post("{{route('sumary')}}", {
        _method: 'POST',
        _token: '{{ csrf_token() }}',
        donor_name: $('input#nama').val(),
        donor_email: $('input#email').val(),
        donation_type: $('select#donation_type').val(),
        amount: $('input#donasi').val(),
        note: $('textarea#note').val(),
        hp: $('input#hp').val(),
        campaigns_id: $('input#campaigns_id').val(),
        jenis_donasi: $('input#jenis_donasi').val(),
        rekening: $('select#rekening').val(),
    },
        function (data, status) {
            console.log(data);
            snap.pay(data.snap_token, {
                // Optional
                onSuccess: function (result) {
                    location.reload();
                },
                // Optional
                onPending: function (result) {
                    location.reload();
                },
                // Optional
                onError: function (result) {
                    location.reload();
                }
            });
            return false;


        });
})

