<?php 

function coronalaw_decision_tree_render( $attributes, $content ) {
    return '
        <div class="coronalaw__decision-tree">
            '. $content .'
        </div>';
}

function coronalaw_question_render( $attributes, $content ) {
    return '
        <div class="coronalaw__question coronalaw__node">
            <h1>'.$attributes['question'].'</h1>
            '. $content .'
        </div>';
}

function coronalaw_choice_render( $attributes, $content ) {
    return '
        <div class="coronalaw__choice">
            <button>'.$attributes['choice'].'</button>
            '. $content .'
        </div>';;
}

function coronalaw_answer_render( $attributes, $content ) {
    return '
        <div class="coronalaw__answer coronalaw__node">
            '. $content .'
        </div>';;
}