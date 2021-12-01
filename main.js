$(function(){
    var ex = false;
    $(window).scroll(function(){
        var sub = $('.main').offset().top + 600;
        if(!ex){
            if($(window).scrollTop() >= sub){
                var playerRate = $('.pl').attr('data-rate');
                var bandRate = $('.ban').attr('data-rate');
                var discordRate = $('.dis').attr('data-rate');

                $({percent: 0}).animate({percent:playerRate},{
                    duration: 1500,
                    progress: function(){
                        var now = this.percent;
                        console.log(now);
                        $('.pl').text(Math.ceil(now));
                        ex = true;
                    }
                })
                $({percent: 0}).animate({percent:bandRate},{
                    duration: 1500,
                    progress: function(){
                        var now = this.percent;
                        console.log(now);
                        $('.ban').text(Math.ceil(now));
                    }
                })
                $({percent: 0}).animate({percent:discordRate},{
                    duration: 1500,
                    progress: function(){
                        var now = this.percent;
                        console.log(now);
                        $('.dis').text(Math.ceil(now));
                    }
                })
            }
        }
    });
});

function warn_ning(){
    alert("오픈 준비중입니다.");
}

function user_search(){
    alert("Can't Access");
}