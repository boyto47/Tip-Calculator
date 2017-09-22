$(document).ready(function() {
    function tipCalculator() {

        var amount = $("#amount").val();
        var percentage = $("#percentage").val();

        var tip = amount * (percentage / 100);


        var total = +amount + tip;

        $("#tip").text(tip.toFixed(2));
        $("#total").text(total.toFixed(2));
    };

    $("#calculate").click(tipCalculator);
});