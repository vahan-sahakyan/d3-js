const DUMMY_DATA = [
  { id: 'd1', value: 10, region: 'USA' },
  { id: 'd2', value: 11, region: 'India' },
  { id: 'd3', value: 12, region: 'China' },
  { id: 'd4', value: 6, region: 'Germany' },
];

const xScale = d3
  .scaleBand()
  .domain(DUMMY_DATA.map(dataPoint => dataPoint.region))
  .rangeRound([5, 290])
  .padding(0.05);
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

const container = d3.select('svg').classed('container', true);

container
  //
  .selectAll('.bar')
  .data(DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height', data => 200 - yScale(data.value))
  .attr('x', data => xScale(data.region))
  .attr('y', data => yScale(data.value))
  .on('click', ({ clientX, clientY }) => {
    console.clear();
    console.log({ clientX, clientY });
    msg.innerHTML = `<pre>Your Click Coordinates<br/>x: ${clientX}<br/>y: ${clientY}</pre>`;
  });
const msg = document.body.insertAdjacentElement('beforeend', document.createElement('h2'));
msg.style.width = '100vw';
msg.style.textAlign = 'center';
