$(document).ready(function() {
    $('.stop-bus').each(function() {
        var right = $(this).children(".right");
        var totalWidth = right.width()-10;
        var stations = right.children('.stations');
        var stationsName = stations.children('.name');
        // console.log(stationsName.length);
        var anotherName = stations.children('.another-name');
        var height = stations.height();
        var length = stationsName.length;
        var averageWidth = totalWidth / (length+0.5) / 2;
        stationsName.width(averageWidth);
        anotherName.width(averageWidth);
        stations.css({
            'margin-left': averageWidth / 2,
        });
        stationsName.css({
            'font-size': averageWidth,
        });
        stationsName.each(function(index, elements) {
            var html = $(elements).html();
            var wordLength = html.length;
            if (html == $('.station-name>.chinese>p').html()) {
                $(elements).addClass('red-color');
            }
            if (wordLength < 7) {
                var word = wordLayout(wordLength, averageWidth, height);
                $(elements).css({
                    'height': word.height + 'px',
                    'line-height': word.lineHeight + 'px',
                    'margin-top': word.marginTop + 'px',
                })
            } else if (wordLength > 7) {
                if (wordLength == 8) {
                    var s1 = html.slice(0, 6);
                    var s2 = html.slice(-2);
                    $(elements).html(s1);
                    var word = wordLayout(6, averageWidth, height);
                    $(elements).css({
                        'height': word.height + 'px',
                        'line-height': word.lineHeight + 'px',
                        'margin-top': word.marginTop + 'px',
                    })
                } else {
                    var s1 = html.slice(0, 7);
                    var s2 = html.slice(7 - wordLength);
                    $(elements).html(s1);
                    var word = wordLayout(7, averageWidth, height);
                    $(elements).css({
                        'height': word.height + 'px',
                        'line-height': word.lineHeight + 'px',
                        'margin-top': word.marginTop + 'px',
                    })
                }
                word = wordLayout(s2.length, averageWidth, height);
                $(elements).after('<li class="name' + index + '">' + s2 + '</li>');
                $('.name' + index).css({
                    'float': 'left',
                    'display': 'inline',
                    'height': word.height + 'px',
                    'word-wrap': 'break-word',
                    'word-break': 'nomal',
                    'width': averageWidth,
                    'font-size': averageWidth,
                    'line-height': word.lineHeight + 'px',
                    'margin-top': word.marginTop + 'px',
                });

            }
        });
        anotherName.each(function(index, elements) {
            var html = $(elements).html();
            var wordLength = html.length;
            if (wordLength > 0) {
                $(elements).css({
                    'line-height': height / wordLength + 'px',
                })
            }
        });
        var left = $(this).children('.left');
        var to_where = left.children('.to-where');
        var fontSize = parseInt(to_where.children('p').css('font-size'));
        var to_whereLength = to_where.children('p').html().length;
        var to_whereWidth = to_where.width();
        if (fontSize * to_whereLength > to_whereWidth) {
            to_where.width(fontSize * to_whereLength);
            var scaleX = to_whereWidth / (fontSize * to_whereLength);
            to_where.css({
                'transform': 'scalex(' + scaleX + ')',
            })
        }
    })

})

function wordLayout(wordLength, fontSize, height) {
    var spaceHeight = (height - fontSize * wordLength) / (wordLength - 1);
    var lineHeight = spaceHeight + fontSize;
    var theHeight = wordLength * lineHeight;
    return { 'lineHeight': lineHeight, 'marginTop': -spaceHeight / 2, 'height': theHeight };
}
