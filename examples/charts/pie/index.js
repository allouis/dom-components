const PieChart = require('../../../charts/pie')

const chart = PieChart({
  data: [
    { color: '#FF4136', percentage: 0.4 },
    { color: '#FF851B', percentage: 0.01 },
    { color: '#FFDC00', percentage: 0.19 },
    { color: '#2ECC40', percentage: 0.25 },
    { color: '#0074D9', percentage: 0.1 },
    { color: '#B10DC9', percentage: 0.05 }
  ]
})

document.body.appendChild(chart)
