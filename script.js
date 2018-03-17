(function(){

        // Variables
        var documentElem = $(document),
                projectVisibleContent = $('.visible-content'),
                projectExtraToggleBtn = projectVisibleContent.find('.project-extra-toggle'),
                nav = $('nav'),
                navigateElems = $('nav li a, .continue-btn'),
                htmlBody = $('html, body'),
                lastScrollTop = 0;

                // Navigation Toggle on Scrolling
                documentElem.on('scroll', function() {
                        var currentScrollTop= $(this).scrollTop();
                        if (currentScrollTop > lastScrollTop) {
                                nav.addClass('hidden');
                        } else{
                                nav.removeClass('hidden');

                        }
                        lastScrollTop = currentScrollTop;
                });

                // Jump to sections
                navigateElems.on('click', function(e) {
                        var targetElem = $(  $(this).data('scroll-target') ),
                                targetOffsetTop =  targetElem.offset().top;

                        htmlBody.animate({
                                        scrollTop: targetOffsetTop
                        }, 400);

                        e.preventDefault();
                });

                // Extra information toggle
                projectExtraToggleBtn.on('click', function(e) {
                        var self = $(this),
                        closestExtra = self.closest('.project') .find('.project-extra');
                        closestExtra.slideToggle( 400, function(){
                                if (closestExtra.is(':visible')) {
                                        self.text('Less');
                                } else{
                                        self.text('More');

                                }

                        });
                        e.preventDefault();
                });

})();
