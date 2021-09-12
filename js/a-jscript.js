$(document).ready(function () {

    var optionRangeSmiley = [
        {min:0,max:0,icon:'icon-sad'},
        {min:40,max:40,icon:'icon-frown'},
        {min:50,max:50,icon:'icon-meh'},
        {min:60,max:60,icon:'icon-smiley'},
        {min:100,max:100,icon:'icon-grinning'},
    ],
    theme = 'satisfied';
    $('.statisfied').RangeReviewSmiley(optionRangeSmiley,theme);
    
    optionRangeSmiley = [
        {min:0,max:0,icon:'icon-sad'},
        {min:40,max:40,icon:'icon-frown'},
        {min:50,max:50,icon:'icon-meh'},
        {min:60,max:60,icon:'icon-smiley'},
        {min:100,max:100,icon:'icon-grinning'},
    ];
    var theme = 'satisfied';
    $('.example').RangeReviewSmiley(optionRangeSmiley,theme);
});