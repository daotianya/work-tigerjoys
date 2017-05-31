$(function() {
//	数字累加动画
var decimal_places = 1;
var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;

//div长度累加函数
function ChangeWidth(eve){
	var len = 0;
	var CommuntTimer = null;
	CommuntTimer = setInterval(function() {
		len+= 0.1;
		eve.data.element.css(eve.data.attr,len + '%');
		if (len >= eve.data.end) {
			clearInterval(CommuntTimer);
		}
	}, eve.data.time)
}
//div长度累加函数结束

//收入分布
function incomData(data){
	$("#income ul").width($("#income ul li")*data.incomelist);
	var incomTotalW=$('#income').width();
	$('#income li').each(function(i){
		$(this).css({'width':parseInt(100/data.incomelist.length)+'%'}).find('div').find('section').css({'height':data.incomelist[i].percentage*2.5+'%','margin-left':'-18px'}).find('div').css({'height':data.incomelist[i].disposable+'%'}).text(data.incomelist[i].disposable+'%');
		$(this).find('p').text(data.incomelist[i].income).siblings('div').find('h2').text('0.0%').css({'bottom':data.incomelist[i].percentage*2.7+'%'})
		$(this).find('section').on("myFun", {'element':$(this).find('section'),'end':data.incomelist[i].percentage*2.5,'attr':'height','time':'8'}, ChangeWidth).trigger('myFun');
		$(this).find('h2').on("myFun", {'element':$(this).find('h2'),'end':data.incomelist[i].percentage*2.7,'attr':'bottom','time':'7'}, ChangeWidth).trigger('myFun').animateNumber({
			number: data.incomelist[i].percentage * decimal_factor,
			numberStep: function(now, tween) {
				var floored_number = Math.floor(now) / decimal_factor, target = $(tween.elem);
				if (decimal_places > 0) {
			  		floored_number = floored_number.toFixed(decimal_places);
				}
		
				target.text(floored_number + ' %');
				}
			},1800);
	});
};
//	通勤时间分布曲线图
var CTDOption;
CTDOption={
 	chart:{
 		renderTo:'CTDLine',
 		type: 'line',
 		backgroundColor:null,
   		width:600
 	},
       title: {
        text: '通勤时间分布',
        style: {
			fontFamily: "微软雅黑",
			fontSize: '20px',
			color: '#333'
		}
    },
    credits: {
		enabled: false
	},
	legend:{
		enabled: false
	},
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: true
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
//      tickPositions: [3, 3.75, 4.5, 5.25,6]
    },
    plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
    series: [{
        data: []
    }]
};
//通勤耗时开始
function CommuntTimeData(data){
	$('#CommuntTime li').each(function(i){
		$(this).find('hgroup h2').text(data.commutelist[i].commute).siblings('p').text('0.0%').animateNumber({
			number: data.commutelist[i].percentage * decimal_factor,
			numberStep: function(now, tween) {
				var floored_number = Math.floor(now) / decimal_factor, target = $(tween.elem);
				if (decimal_places > 0) {
			  		floored_number = floored_number.toFixed(decimal_places);
				}
		
				target.text(floored_number + ' %');
				}
			},1800);
		$(this).find('.CommuntTotal div').on("myFun", {'element':$(this).find('.CommuntTotal div'),'end':data.commutelist[i].percentage,'attr':'width','time':'10'}, ChangeWidth).trigger('myFun');
	});
}

//通勤耗时结束
//职业分布开始
var careerOption;
careerOption={
    chart: {
    	renderTo:'career',
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false
	},
	title: {
		text: '职业分布',
		align: 'center',
		verticalAlign: 'middle'
	},
	credits: {
			enabled: false
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	colors:['#DB1D5C','#C0504D','#9BBB59','#8064A2','#4BACC6','#F79646','#14A79C'],
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
			    enabled: true,
			    distance:-40,
			    format: '{point.percentage:.1f} %',
				style: {
					color: '#333',
					fontSize: '18px'
				}
			},
			showInLegend: true
		}
	},
	series: [{
		type: 'pie',
		innerSize: '50%',
		name: '职业分布',
		data: []
	}]
};
//社保缴纳率
function insuranceData(data){
	$('#city option').each(function(i){
		$(this).text(data.insurancelist[i].city);
		var regularW=$('.insuranceTotal').width()*data.insurancelist[i].all_pay/100+'px';
		$('.regular').css('width',regularW);
		$('.SocialSecTotal').siblings('span').text(data.insurancelist[i].all_pay+'%');
		
		var irregularW=$('.insuranceTotal').width()*data.insurancelist[i].all_unpay/100+'px';
		$('.irregular').css('width',irregularW);
		$('.insuranceTotal').siblings('span').text(data.insurancelist[i].all_unpay+'%');
		
		var maleW=$('.irregularTotal').width()*data.insurancelist[i].male_unpay/100+'px';
		$('.male').css({'width':maleW,'height':maleW,'line-height':maleW}).find('span').text(data.insurancelist[i].male_unpay+'%');
		
		var femaleW=$('.irregularTotal').width()*data.insurancelist[i].female_unpay/100+'px';
		$('.female').css({'width':femaleW,'height':femaleW,'line-height':femaleW}).find('span').text(data.insurancelist[i].female_unpay+'%');
	});
}
//失业率
var unemployOption;
unemployOption={
		chart:{
			renderTo:'unemployment',
 			type: 'line',
 			backgroundColor:null,
 			width:1280,
 			style:{margin:'0 auto'}
 		},
        title: {
            text: '失业率',
            style: {
				fontFamily: "微软雅黑",
				fontSize: '20px',
				color: '#333'
			}
        },
        credits: {
			enabled: false
		},
		legend:{
			enabled: false
		},
        xAxis: {},
        yAxis: {
            title: {
                text: null
            },
            labels: {
                enabled: true
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            tickPositions: [3, 3.75, 4.5, 5.25,6]
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{}]
};

$.ajax({
	url : "http://192.168.11.243:8080/tigerdata/workdata",
	type : "get",
	dataType : "jsonp",
	jsonpCallback: 'callback',
	async: true,
	success: function (data) {
		$(".loading").css('display','block');
		
		$(".dataTime").text("数据最后更新于:"+data.lastupdata)
		//收入
		$("#incomelist").tmpl(data).appendTo('#income ul');
		incomData(data);
		//通勤时间分布
		var CTDTimeAttr=[];
		var CTDPerAttr=[];
		for (var i = 0; i < data.timedistributionlist.length; i++) {
		    CTDTimeAttr.push(data.timedistributionlist[i].Hour);
		    CTDPerAttr.push(data.timedistributionlist[i].percentage);
		}
        CTDOption.xAxis.categories = CTDTimeAttr;
     
		CTDOption.series[0].data =CTDPerAttr;
		CTDChart = new Highcharts.Chart(CTDOption);
		//通勤耗时
		$("#commutelist").tmpl(data).appendTo('#CommuntTime ul');
		CommuntTimeData(data);
		//职业分布
		var occuAttr1=[];
		for (var i = 0; i < data.occupationlist.length; i++) {
			var occuAttr2=[];
			occuAttr2.push(data.occupationlist[i].occupation);
			occuAttr2.push(data.occupationlist[i].percentage);
			occuAttr1.push(occuAttr2);
		}
		careerOption.series[0].data =occuAttr1;
		careerChart = new Highcharts.Chart(careerOption);
		//社保缴纳
		$("#insurancelist").tmpl(data).appendTo('#city');
		insuranceData(data);
		//失业率
		var unemployPerAttr=[];
		var unemployDateAttr=[];
		for (var i = 0; i < data.unemploymentlist.length; i++) {
			
		  unemployDateAttr.push(data.unemploymentlist[i].adddate); 
		  unemployPerAttr.push(data.unemploymentlist[i].percentage);
		  
		  
		}
		unemployOption.xAxis.categories = unemployDateAttr;
        unemployOption.series[0].data = unemployPerAttr;
        unemployChart = new Highcharts.Chart(unemployOption);
	},
	complete:function(data){
		$(".loading").css('display','none');
	}
	
});
});
