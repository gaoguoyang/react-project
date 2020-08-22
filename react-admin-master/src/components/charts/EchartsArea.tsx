/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
let date = [];

let data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
    var now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

// const option = {
//     tooltip: {
//         trigger: 'axis',
//         position: function(pt: any) {
//             return [pt[0], '10%'];
//         },
//     },
//     title: {
//         left: 'center',
//         text: '大数据量面积图',
//     },
//     toolbox: {
//         feature: {
//             dataZoom: {
//                 yAxisIndex: 'none',
//             },
//             restore: {},
//             saveAsImage: {},
//         },
//     },
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: date,
//     },
//     yAxis: {
//         type: 'value',
//         boundaryGap: [0, '100%'],
//     },
//     dataZoom: [
//         {
//             type: 'inside',
//             start: 0,
//             end: 10,
//         },
//         {
//             start: 0,
//             end: 10,
//             handleIcon:
//                 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
//             handleSize: '80%',
//             handleStyle: {
//                 color: '#fff',
//                 shadowBlur: 3,
//                 shadowColor: 'rgba(0, 0, 0, 0.6)',
//                 shadowOffsetX: 2,
//                 shadowOffsetY: 2,
//             },
//         },
//     ],
//     series: [
//         {
//             name: '模拟数据',
//             type: 'line',
//             smooth: true,
//             symbol: 'none',
//             sampling: 'average',
//             itemStyle: {
//                 normal: {
//                     color: 'rgb(255, 70, 131)',
//                 },
//             },
//             areaStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                         {
//                             offset: 0,
//                             color: 'rgb(255, 158, 68)',
//                         },
//                         {
//                             offset: 1,
//                             color: 'rgb(255, 70, 131)',
//                         },
//                     ]),
//                 },
//             },
//             data: data,
//         },
//     ],
// };
const option = {
    title: {
        text: '',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12,
            },
        },
    },
    legend: {
        x: 'center',
        show: false,
        data: ['朋友', '战友', '亲戚'],
    },
    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
                {
                    name: '朋友',
                    itemStyle: {
                        normal: {
                            color: '#009800',
                        },
                    },
                },
                {
                    name: '战友',
                    itemStyle: {
                        normal: {
                            color: '#4592FF',
                        },
                    },
                },
                {
                    name: '亲戚',
                    itemStyle: {
                        normal: {
                            color: '#3592F',
                        },
                    },
                },
            ],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12,
                    },
                },
            },
            force: {
                repulsion: 1000,
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10,
                    },
                    formatter: '{c}',
                },
            },
            data: [
                {
                    name: '徐贱云',
                    draggable: true,
                },
                {
                    name: '冯可梁',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '邓志荣',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '李荣庆',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '郑志勇',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '赵英杰',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '王承军',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '陈卫东',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '邹劲松',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '赵成',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '陈现忠',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '陶泳',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '王德福',
                    category: 1,
                    draggable: true,
                },
            ],
            links: [
                {
                    source: 0,
                    target: 1,
                    category: 0,
                    value: '朋友',
                },
                {
                    source: 0,
                    target: 2,
                    value: '战友',
                },
                {
                    source: 0,
                    target: 3,
                    value: '房东',
                },
                {
                    source: 0,
                    target: 4,
                    value: '朋友',
                },
                {
                    source: 1,
                    target: 2,
                    value: '表亲',
                },
                {
                    source: 0,
                    target: 5,
                    value: '朋友',
                },
                {
                    source: 4,
                    target: 5,
                    value: '姑姑',
                },
                {
                    source: 2,
                    target: 8,
                    value: '叔叔',
                },
                {
                    source: 0,
                    target: 12,
                    value: '朋友',
                },
                {
                    source: 6,
                    target: 11,
                    value: '爱人',
                },
                {
                    source: 6,
                    target: 3,
                    value: '朋友',
                },
                {
                    source: 7,
                    target: 5,
                    value: '朋友',
                },
                {
                    source: 9,
                    target: 10,
                    value: '朋友',
                },
                {
                    source: 3,
                    target: 10,
                    value: '朋友',
                },
                {
                    source: 2,
                    target: 11,
                    value: '同学',
                },
            ],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0,
                },
            },
        },
    ],
};
class EchartsArea extends React.Component {
    render() {
        return (
            <ReactEcharts
                option={option}
                style={{ height: '300px', width: '100%' }}
                className={'react_for_echarts'}
            />
        );
    }
}

export default EchartsArea;
