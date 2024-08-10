const moods = {
    happy: {
        face: '(*^‿^*)',
        color: 'yellow',
    },
    sad: {
        face: '(╥﹏╥)',
        color: 'green',
    },
    angry: {
        face: '(ノಠ痊ಠ)ノ彡┻━┻',
        color: 'red',
    },
    confused: {
        face: 'ↂ_ↂ',
        color: 'orange',
    },
}
let view = $('#view');
let face = $('#h1');

function changeMood(moodChoice) {
    store.dispatch({
        type: 'MOOD_CHANGE', payload: {
            mood: moods[moodChoice].face,
            color: moods[moodChoice].color,
        }
    })
    const state = store.getState();
    face.text(state.mood);
    view.css('background-color', state.color);
}


$('#happy').on('click', function (event) {
    changeMood('happy');
});

$('#sad').on('click', function (event) {
    changeMood('sad');
});

$('#angry').on('click', function (event) {
    changeMood('angry');
});

$('#confused').on('click', function (event) {
    changeMood('confused');
});

$('#random').on('click', function (event) {
    changeMood(Object.keys(moods)[Math.floor(Math.random() * Object.keys(moods).length)]);
})