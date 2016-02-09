jsPlumb.ready(function() {

  /** use nodeditor area */
  jsPlumb.setContainer('nodeeditor');

  /** make nodes dragable */
	jsPlumb.draggable($('.node'));

  /** connector options */
  var connctorOptions = {
      connector:[ "Flowchart", {
         stub: 50,
         cornerRadius: 5,
         alwaysRespectStubs: true
      }],
      anchor: ['Left', 'Right'],
      endpoint:["Dot", {radius:4}],
      paintStyle: { lineWidth:2, strokeStyle: "#32AEEB" },
      endpointStyle: { fillStyle: "#32AEEB" },
      overlays:[
          ['Arrow' , { width:12, length:12, location:0.67 }]
      ]
  };

  /** connection 1 */
  jsPlumb.connect({
      source: 'outport1',
      target: 'inport4'
  }, connctorOptions);

  jsPlumb.connect({
      source: 'outport1',
      target: 'inport4'
  }, connctorOptions);

  /** connection 2 */
  jsPlumb.connect({
      source: 'outport2',
      target: 'inport3'
  }, connctorOptions);

  /** connection 3 */
  jsPlumb.connect({
      source: 'outport4',
      target: 'inport6'
  }, connctorOptions);

  /** connection 4 */
  jsPlumb.connect({
      source: 'outport6',
      target: 'inport7'
  }, connctorOptions);

});
