! function(a) {
    a(document).ready(function() {
        setTimeout(function() {
            function c() {
                b = !0;
                document.getElementById("bigbox").style.height = "67rem";
                a("#fullpage").fullpage({
                    navigation: !0,
                    showActiveTooltip: !0,
                    scrollingSpeed: 700,
                    autoScrolling: !0,
                    fitToSection: !0,
                    onLeave: function(d, e, f) {
                        setTimeout(function() {
                            a(".section" + e + " [data-aos]").addClass("aos-animate");
                            a(".section" + d + " [data-aos]").removeClass("aos-animate")
                        }, 100)
                    },
                    afterResize: function() {
                        768 > window.innerWidth && (a.fn.fullpage.destroy("all"), b = !1, document.getElementById("bigbox").style.height =
                            "auto")
                    }
                })
            }
            document.getElementById("preloader").style.opacity = 0;
            setTimeout(function() {
                document.getElementById("preloader").style.display = "none"
            }, 650);
            let b = !1;
            768 <= window.innerWidth ? c() : document.getElementById("bigbox").style.height = "auto";
            a(window).on("resize", function() {
                768 <= window.innerWidth && !1 === b && c()
            });
            AOS.init({
                startEvent: "DOMContentLoaded",
                offset: 100,
                duration: 800
            });
            new Swiper(".mySwiper", {
                direction: "vertical",
                slidesPerView: 3,
                allowTouchMove: !1
            });
            a(".scroll_down").click(function() {
                b ? a.fn.fullpage.moveSectionDown() :
                    a("html, body").animate({
                        scrollTop: a(".content-section").position().top + "px"
                    }, 1)
            });
            a(".scroll_down2").click(function() {
                b ? a.fn.fullpage.moveSectionDown() :
                    a("html, body").animate({
                        scrollTop: a(".content-section").position().top + "px"
                    }, 1)
            });
            a(".video-popup").magnificPopup({
                type: "iframe",
                gallery: {
                    enabled: !0,
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: !1,
                    fixedContentPos: !0
                }
            })
        }, 1)
    })
}(jQuery);