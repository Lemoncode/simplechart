import * as d3 from 'd3';

export class Gauge {

    container: string;
    configuration: any;
    config: any;

    range; // Angle range pointer movement
    r; // Circle radio
    pointerHeadLength; // Pointer length
    svg; // Svg gauge 
    arc; // Circle arc
    scale;
    ticks; // Gauge ticks
    tickData; // Range of semicircle that match one tick
    pointer; // Gauge pointer
    donut;

    constructor(container, configuration) {
        this.container = container;
        this.configuration = configuration;
        this.config = {
            size: 200,
            clipWidth: 200,
            clipHeight: 110,
            ringInset: 20,
            ringWidth: 20,

            pointerWidth: 10,
            pointerTailLength: 5,
            pointerHeadLengthPercent: 0.9,

            minValue: 0,
            maxValue: 10,

            minAngle: -90,
            maxAngle: 90,

            transitionMs: 750,

            majorTicks: 5,
            labelFormat: d3.format(',g'),
            labelInset: 10,

            arcColorFn: d3.interpolateHsl(d3.rgb('#e8e2ca'), d3.rgb('#3e6c0a'))
        };

        this.donut = d3.pie();

        this.configure(configuration);
    }

    // Degrees to Radians conversion
    private deg2rad = (deg) => (deg * Math.PI / 180);

    // Center translation
    private centerTranslation = () => ('translate(' + this.r + ',' + this.r + ')');

    // Get the new angle
    private newAngle = (d) => (this.config.minAngle + (this.scale(d) * this.range));

    // isRendered Gauge
    isRendered = () => ((this.svg !== undefined));

    // Update pointer value
    update = (newValue, newConfiguration?) => {
        if (newConfiguration) {
            this.configure(newConfiguration);
        }

        const newAngle = this.newAngle(newValue); // Get the new angle

        this.pointer.transition()
            .duration(this.config.transitionMs) // Duration
            .ease(d3.easeElastic) // Transition type
            .attr('transform', 'rotate(' + newAngle + ')'); // Rotate to new angle
    }

    // Configure
    configure = (configuration) => {
        let prop;

        // New configuration
        for (prop in configuration) {
            this.config[prop] = configuration[prop];
        }

        this.range = this.config.maxAngle - this.config.minAngle;
        this.r = this.config.size / 2;
        this.pointerHeadLength = Math.round(this.r * this.config.pointerHeadLengthPercent);

        // Linear scale that maps domain values to a percent from 0 to 1
        this.scale = d3.scaleLinear()
            .range([0, 1])
            .domain([this.config.minValue, this.config.maxValue]);

        // Tick configuration
        this.ticks = this.scale.ticks(this.config.majorTicks);  // Get the tick
        this.tickData = d3.range(this.config.majorTicks)
            .map(() => (1 / this.config.majorTicks)); // Get the range value for each tick (semicircle divided between 5 majorTicks)

        // Semicircle configuration
        this.arc = d3.arc()
            .innerRadius(this.r - this.config.ringWidth - this.config.ringInset) // Inner radio value
            .outerRadius(this.r - this.config.ringInset) // Outer radio value
            .startAngle((d, i) => {
                const ratio = d * i;
                return this.deg2rad(this.config.minAngle + (ratio * this.range)); // Start angle value
            })
            .endAngle((d, i) => {
                const ratio = d * (i + 1);
                return this.deg2rad(this.config.minAngle + (ratio * this.range)); // End angle value
            });
    }

    // Render gauge chart
    render = (newValue?) => {

        // Get the html element and append it the chart
        this.svg = d3.select(this.container)
            .append('svg:svg')
            .attr('class', 'gauge')
            .attr('width', this.config.clipWidth)
            .attr('height', this.config.clipHeight);

        const centerTx = this.centerTranslation(); // Get the translation

        // ARC: Append g html element to display the circle arc
        const arcs = this.svg.append('g')
            .attr('class', 'arc')
            .attr('transform', centerTx);

        // Fill each semicircle portion with different colors
        arcs.selectAll('path')
            .data(this.tickData)
            .enter().append('path')
            .attr('fill', (d, i) => (this.config.arcColorFn(d * i)))
            .attr('d', this.arc);


        // LABEL: Append g html element to display each range value
        const lg = this.svg.append('g')
            .attr('class', 'label')
            .attr('transform', centerTx);

        // Get and display each range value
        lg.selectAll('text')
            .data(this.ticks)
            .enter().append('text')
            .attr('transform', (d) => {
                const ratio = this.scale(d);
                const newAngle = this.config.minAngle + (ratio * this.range);
                return 'rotate(' + newAngle + ') translate(0,' + (this.config.labelInset - this.r) + ')';
            })
            .text(this.config.labelFormat);

        
        const lineData = [[this.config.pointerWidth / 2, 0], [0, -this.pointerHeadLength], [-(this.config.pointerWidth / 2), 0],
                          [0, this.config.pointerTailLength], [this.config.pointerWidth / 2, 0]
                         ];

        const pointerLine = d3.line().curve(d3.curveMonotoneX); // Get the pointer line


        // POINTER: Append g html element to display the pointer
        const pg = this.svg.append('g').data([lineData])
            .attr('class', 'pointer')
            .attr('transform', centerTx);

        // Set the pointer value
        this.pointer = pg.append('path')
            .attr('d', pointerLine)
            .attr('transform', 'rotate(' + this.config.minAngle + ')');

        this.update(newValue ? newValue : 0);
    }
}