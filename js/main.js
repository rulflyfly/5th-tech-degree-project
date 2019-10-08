const captions = [
    {
        name: 'Hay Bales',
        caption: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
    },
    {
        name: 'Lake',
        caption: 'The lake was so calm today. We had a great view of the snow on the mountains from here.'
    },
    {
        name: 'Canyon',
        caption: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
    },
    {
        name: 'Iceberg',
        caption: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.'
    },
    {
        name: 'Desert',
        caption: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'
    },
    {
        name: 'Fall',
        caption: 'Fall is coming, I love when the leaves on the trees start to change color.'
    },
    {
        name: 'Plantation',
        caption: 'I drove past this plantation yesterday, everything is so green!'
    },
    {
        name: 'Dunes',
        caption: 'My summer vacation to the Oregon Coast. I love the sandy dunes!'
    },
    {
        name: 'Countryside Lane',
        caption: 'We enjoyed a quiet stroll down this countryside lane.'
    },
    {
        name: 'Sunset',
        caption: 'Sunset at the coast! The sky turned a lovely shade of orange.'
    },
    {
        name: 'Cave',
        caption: 'I did a tour of a cave today and the view of the landscape below was breathtaking.'
    },
    {
        name: 'Bluebells',
        caption: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
    }
]

lightbox.option({
    'showImageNumberLabel': false
  })



$('.photos a').each(function(i) {
    $(this).attr('data-lightbox', 'roadtrip');
    $(this).attr('data-title', `${captions[i].name}. ${captions[i].caption}`);
 })

 $('.photos img').each(function(i){
    $(this).attr('alt', `${captions[i].name}. ${captions[i].caption}`);
 })

$('input').on('keyup', function(){
    const value = $(this).val().toLowerCase();
    $('.photos a').filter(function() {
        const $cap = $(this).attr('data-title').toLowerCase();
        $(this).toggle($cap.indexOf(value) !== -1);
    })
})


 