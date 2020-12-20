addSettingButton()

initListener()

function initListener() {
    $('button.zp_extension_filter_women').on('click', (e) => {
        toggleWomenLines()
    })
    $('button.zp_extension_filter_tt').on('click', (e) => {
        toggleTTLines()
    })
}

function addSettingButton() {
    $('#filter_options div.btn-toolbar').first().find('.btn-group').first()
        .append('<button type="button" class="zp_extension_filter_women event_filter_type btn btn-default text-darkgray" title="Excludes women workouts and runs">No Women</button>')
        .append('<button type="button" class="zp_extension_filter_tt event_filter_type btn btn-default text-darkgray" title="Excludes TT">No TT</button>')
}

function toggleWomenLines() {
    $('div.event_race_info i.fa-female').parents('tr').toggle()
    $('.zp_extension_filter_women').toggleClass('active')
}

function toggleTTLines() {
    $('div.event_race_info i.fa-bicycle').parents('tr').toggle()
    $('.zp_extension_filter_tt').toggleClass('active')
}