phantom.outputEncoding = "GBK";

var casper = require('casper').create({
	clientScripts: ["jquery.js"]
});
var t = new Date(),
	aa = {
		code: 1,
		msg: '抓取成功',
		word: '百度',
		time: 0,
		dataList: []
	};

casper.start('http://www.baidu.com/', function() {
	this.echo(this.getTitle());
});

casper.then(function() {
	this.fill('form[action="/s"]', { wd: aa.word }, true);
});
casper.then(function() {
	aa.time = new Date() - t;
	var con = $(".c-container");
	for(var i = 0, len = con.length; i < len; i++) {
		aa.dataList.push({
			title: con.find('.t').text
		})
	}
	this.echo(this)
	this.wait(500, function() {
		this.capture('search-results.png');
		this.echo(JSON.stringify(aa.dataList))
	});
});
casper.run();