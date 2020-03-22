jQuery(document).ready(function(){

    // Dynamically show decision tree
    jQuery('.coronalaw__choice').each(function(index, choice) {

        let bindEventHandler = function(element) {
            jQuery('button', element).click(function(event) {
                // Wrap element in jQuery object
                element = jQuery(element);

                // Set display classes
                element.removeClass('coronalaw__choice--not-selected').addClass('coronalaw__choice--selected');
                element.siblings().addClass('coronalaw__choice--not-selected')

                // Remove nodes from subtree
                element.parent().nextAll().remove();

                let nextNode = jQuery('.coronalaw__node', element).first();
                // Clone node from hidden tree structure
                let appendNode = nextNode.clone();
                // Show hidden node
                appendNode.show();
                // Bind event handlers an cloned node
                jQuery('.coronalaw__choice', appendNode).each(function(index, choice) {
                    bindEventHandler(choice);
                });
                jQuery('.coronalaw__decision-tree').append(appendNode);
                
            });
        }
        bindEventHandler(choice);
    });
});
