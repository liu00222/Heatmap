var myChart = echarts.init(document.getElementById('main'));

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
			  top : 60,
        data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    series: [
        {
            name: 'Numeber of Econ Related Events ',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 2, name: 'January'},
                {value: 27, name: 'February'},
                {value: 7, name: 'March'},
							  {value: 3, name: 'April'},
							  {value: 0, name: 'May'},
							  {value: 1, name: 'June'},
							  {value: 2, name: 'July'},
							  {value: 2, name: 'August'},
							  {value: 19, name: 'September'},
							  {value: 31, name: 'October'},
							  {value: 9, name: 'November'},
							  {value: 1, name: 'December'},
            ]
        }
    ]
};

myChart.setOption(option);