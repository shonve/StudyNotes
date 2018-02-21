var http = require('http');
var cheerio = require("cheerio");
var url = "http://www.imooc.com/learn/935";

function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');

    var courseData = [];
    chapters.each(function (item, index) {
        var chapter = $(this);
        var chapterTitle = chapter.find("strong").text().trim().replace(/[\r\n]/g,"").replace(/[ ]/g,"");
        var videos = chapter.find(".video").children("li");
        // console.log(chapterTitle)

        var chapterData = {
            chapterTitle: chapterTitle.trim(),
            videos: []
        };
        videos.each(function (item, index) {
            var video = $(this).find(".J-media-item");
            var videoTitle = video.text();
            var id = video.attr('href').split('video/')[1];
            chapterData.videos.push({
                title: videoTitle.trim(),
                id: id.trim()
            });
        });
        courseData.push(chapterData);
    });
    return courseData;
}

function printCourseInfo(courseData) {
    courseData.forEach(function (item) {
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle);
        item.videos.forEach(function (video) {
            console.log(video.id + '---' + video.title);
        })
    })
}

http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data;
    })

    res.on("end", function () {
        var courseData = filterChapters(html);
        printCourseInfo(courseData);
    })
}).on('error', function () {
    console.log("获取数据失败！");
});
