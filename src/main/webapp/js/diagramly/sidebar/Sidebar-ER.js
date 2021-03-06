(function()
{
	// Adds ER shapes
	Sidebar.prototype.addErPalette = function()
	{
		// Avoids having to bind all functions to "this"
		var sb = this;

		// Reusable cells
		var row = new mxCell('Row', new mxGeometry(0, 0, 40, 26), 'text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;');
		row.vertex = true;

		// Predefined dimensions
		var w = 100;
		var h = 100;
		
		// Default tags
		var dt = 'er entity relation ';
		
		function createEdge(style, m, n)
		{
			var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), style);
			edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
			edge.geometry.setTerminalPoint(new mxPoint(160, 0), false);
			edge.geometry.relative = true;
			edge.edge = true;
			
			if (m != null)
			{
		    	var cell1 = new mxCell(m, new mxGeometry(-1, 0, 0, 0), 'resizable=0;html=1;align=left;verticalAlign=bottom;');
		    	cell1.geometry.relative = true;
		    	cell1.setConnectable(false);
		    	cell1.vertex = true;
		    	edge.insert(cell1);
			}
			
			if (n != null)
			{
		    	var cell2 = new mxCell(n, new mxGeometry(1, 0, 0, 0), 'resizable=0;html=1;align=right;verticalAlign=bottom;');
		    	cell2.geometry.relative = true;
		    	cell2.setConnectable(false);
		    	cell2.vertex = true;
		    	edge.insert(cell2);
			}
			
			return edge;
		};
		
		var fns = [
	   		this.addEntry(dt + 'table', function()
			{
				var cell = new mxCell('Table', new mxGeometry(0, 0, 160, 110),
			    	'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;align=center;fontSize=14;');
				cell.vertex = true;
				cell.insert(sb.cloneCell(row, 'Row 1'));
				cell.insert(sb.cloneCell(row, 'Row 2'));
				cell.insert(sb.cloneCell(row, 'Row 3'));
		
				return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Table');
			}),
	   	 	this.addEntry(dt + 'table section subsection', function()
	   		{
				var cell = new mxCell('Section', new mxGeometry(0, 0, 140, 110),
		    		'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=22;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;align=center;fontSize=14;');
				cell.vertex = true;

				cell.insert(sb.cloneCell(row, 'Row 1'));
				cell.insert(sb.cloneCell(row, 'Row 2'));
				cell.insert(sb.cloneCell(row, 'Row 3'));
				
				return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Section'); 
	   		}),
			this.addDataEntry(dt + 'table section subsection', 160, 144, 'ER Table 1',
				'7Vhhb5swEP01fJ1sCOnysZCtmppKVdM/YMABa8amxlmS/vqdwTRJSZREKaydkIjEPc6H793Li2LHC/P1nSJF9iATyh3vh4NuHTRxvFBJqbdxBeXrkHLuuIgljjd1XBfBx3F/nkrDVRoqiKJCX7TSrVf+IXxJa+SZRJzWaKk33KLliuWcCIiChRR6bp8giOOM8WRGNnJpXl1qEv9uoiCTir1CPoHOpxgAeKz0nL2axe54L2NuVtqaipaQ89j0g99BD2S9lzgjpW52IzknRcmian9mYU5UykQgtZa5TSKcpQLuY6hFVdNTvSs8gtiyQpWm66MUV9Auv5biOypzqtUG0lcs0ZnNHtcjQRlladaUGI1qkJQ1kL6tPTA9QOwAT0zVa011KdjLkv5K2oPNSGFuoTHNCH+isSYiNU8DLQvLF6eLhl9lN2/uo4ZTvMNpnRsY7lhM+K2Fc5YkVdUF4zyUXALtUyErRZUFiZlIZ/VbvNEWerJvM5CEkgsuVxBmUIwKsxupiSbRmxYLyYSuqPQDuIDxEH3zHR86DSHG2xguk650KEWpFWHVVCkIaUWNmIJEyeIZpEObbnd177/TjHuuZtyLNDM5IBkPdaGYUUsxj/dXayXa/c4dmPu5ktnXx4fJ45QCTJtW3GfPOpZCGFqihjPU1oB3kQa83jTgtzSggE4X4W5MA51WQFXsiztG/w4Bv6sdqGPcUse/9odaHf+ZOfhXm0M34785Yg7Xq2Awh69vDt8Hc+jDHG4+qTlMjpiDN5jDYA4uRoM79OEOk0/qDhh//PwHX+jTF3An/zdx+/Bx8IUOfAFfdlB5yBiuFUAF7hx426S9g/G/'),
			this.addDataEntry(dt + 'table section subsection', 160, 112, 'ER Table 2',
				'7ZdRb6MwDMc/Da+nAKW7PQ5628M6aVr3BQykEF2IUciu7T79ORDWsrZqe92m7TSJStg4Tvz3D6t4YVItbzTU5R3mXHrhL49deezSCxONaNZ266qWCZfSC5jIvXDiBQGjnxdcHwrz2zBWg+bKnLQy6Fb+AfnEO88jpJJ33saspPM2C1FJUGTFc1Rm5p4wsrNSyHwKK3yyWzcGst+9FZeoxTPFA1U+8clBj7WZiWe7OBgPImZ2pcupeUMx9309/ivXHSwHgVNoTH8alBLqRqTt+ezCCnQhVIzGYOWCQIpC0X1Gubjua+pO5Y/Idqpwbfhyr8Sta1NfJ/ENx4obvaLwhchN6aLHXUtYyUVR9il81wBoOkfxsnZH98jjGnigq+FWVzUuyOFv97WE2t5SXUaAfOCZAVXYp7HB2skl+byXV7uz2/t0l6RdbGylExnIK+euRJ63WedCygQlkuoThS1QTQ2ZUMW022XM1q4Ht5ttCVLKuaQywklJybiyp0EDBtIXFGsUyrRKRjFdJHjCfkReRJUmZPtrmy4brk2CqjEaRNtUThwtuGUpzjXWj0QO76vdxD56hUxwLDLBSchc7iAmZO8BzGgLmPtbEuv69iRiNiXy9xE0oGYHDceCNKRm9FbQHOLClu3KO5qADJWyMqW9hmybjPAkMqLxR5ER7RklwfuMEv97lHzxUTLeN0pOIuZ7lPz7KIk+6Si5+HT/StpkX3yOfPzc6F/xt6Xj5xYdZ2Nx5nzo6PjPhsPF2cPh3Pa3zo2PXxc0+Ej+Cw=='),
				
			this.addEntry(dt + 'table row', function()
			{
				return sb.createVertexTemplateFromCells([row.clone()], row.geometry.width, row.geometry.height, 'Row 1');
			}),
	   		this.addEntry(dt + 'table row', function()
			{
	   			var cell = new mxCell('uniqueId', new mxGeometry(0, 0, 90, 26), 'shape=partialRectangle;top=0;left=0;right=0;bottom=0;fillColor=none;align=left;verticalAlign=top;fillColor=none;spacingLeft=34;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;dropTarget=0;fontSize=12;');
	   			cell.vertex = true;

	   			var cell1 = sb.cloneCell(row, 'PK');
	   			cell1.connectable = false;
	   			cell1.style = 'shape=partialRectangle;top=0;left=0;bottom=0;right=0;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[];portConstraint=eastwest;part=1;fontSize=12;'
	   			cell1.geometry.width = 30;
	   			cell.insert(cell1);
	   			
				return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Row 2');
			}),
	   		this.addEntry(dt + 'table row', function()
			{
	   			var cell = new mxCell('uniqueId', new mxGeometry(0, 0, 90, 26), 'shape=partialRectangle;top=0;left=0;right=0;bottom=1;align=left;verticalAlign=top;fillColor=none;spacingLeft=34;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;dropTarget=0;fontSize=12;');
	   			cell.vertex = true;

	   			var cell1 = sb.cloneCell(row, 'PK');
	   			cell1.connectable = false;
	   			cell1.style = 'shape=partialRectangle;top=0;left=0;bottom=0;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[];portConstraint=eastwest;part=1;fontSize=12;'
	   			cell1.geometry.width = 30;
	   			cell.insert(cell1);
	   			
				return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Row 3');
			}),
	   		this.addEntry(dt + 'table row', function()
			{
	   			var cell = new mxCell('row', new mxGeometry(0, 0, 120, 26), 'shape=partialRectangle;top=0;left=0;right=0;bottom=0;align=left;verticalAlign=top;fillColor=none;spacingLeft=60;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;dropTarget=0;fontSize=12;');
	   			cell.vertex = true;

	   			var cell1 = sb.cloneCell(row, '');
	   			cell1.connectable = false;
	   			cell1.style = 'shape=partialRectangle;fontStyle=1;top=0;left=0;bottom=0;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[];portConstraint=eastwest;part=1;fontSize=12;'
	   			cell1.geometry.width = 56;
	   			cell.insert(cell1);
	   			
				return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Row 4');
			}),
			this.addEntry(dt + 'table row', function()
			{
	   			var cell = new mxCell('uniqueId', new mxGeometry(0, 0, 90, 26), 'shape=partialRectangle;top=0;left=0;right=0;bottom=0;align=left;verticalAlign=top;fillColor=none;spacingLeft=34;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;dropTarget=0;fontSize=12;');
	   			cell.vertex = true;

	   			var cell1 = sb.cloneCell(row, 'PK');
	   			cell1.connectable = false;
	   			cell1.style = 'shape=partialRectangle;top=0;left=0;bottom=0;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[];portConstraint=eastwest;part=1;fontSize=12;'
	   			cell1.geometry.width = 30;
	   			cell.insert(cell1);
	   			
				return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Row 5');
			}),
	   		this.addEntry(dt + 'table row', function()
			{
	   			var cell = new mxCell('uniqueId', new mxGeometry(0, 0, 90, 26), 'shape=partialRectangle;top=0;left=0;right=0;bottom=0;align=left;verticalAlign=top;fillColor=none;spacingLeft=34;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;dropTarget=0;fontSize=12;');
	   			cell.vertex = true;

	   			var cell1 = sb.cloneCell(row, '');
	   			cell1.connectable = false;
	   			cell1.style = 'shape=partialRectangle;top=0;left=0;bottom=0;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[];portConstraint=eastwest;part=1;fontSize=12;'
	   			cell1.geometry.width = 30;
	   			cell.insert(cell1);
	   			
				return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Row 6');
			}),
			this.addEntry(dt + 'table row', function()
			{
	   			var cell = new mxCell('uniqueId', new mxGeometry(0, 0, 90, 26), 'shape=partialRectangle;top=0;left=0;right=0;bottom=0;align=left;verticalAlign=top;fillColor=none;spacingLeft=34;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;dropTarget=0;fontSize=12;');
	   			cell.vertex = true;

	   			var cell1 = sb.cloneCell(row, '');
	   			cell1.connectable = false;
	   			cell1.style = 'shape=partialRectangle;top=0;left=0;bottom=0;right=0;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[];portConstraint=eastwest;part=1;fontSize=12;'
	   			cell1.geometry.width = 30;
	   			cell.insert(cell1);
	   			
				return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Row 7');
			}),
			this.addEntry(dt + 'table row divider hline line separator', function()
			{
				var divider = new mxCell('', new mxGeometry(0, 0, 40, 8), 'line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;fontSize=12;');
				divider.vertex = true;
				
				return sb.createVertexTemplateFromCells([divider], divider.geometry.width, divider.geometry.height, 'Divider');
			}),
			this.addEntry(dt + 'table row spacer space gap separator', function()
			{
				var cell = new mxCell('', new mxGeometry(0, 0, 20, 14), 'text;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=4;spacingRight=4;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;fontSize=12;');
				cell.vertex = true;
				
				return sb.createVertexTemplateFromCells([cell.clone()], cell.geometry.width, cell.geometry.height, 'Spacer');
			}),
			this.createVertexTemplateEntry('text;align=center;verticalAlign=middle;spacingLeft=4;spacingRight=4;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=14;',
				80, 26, 'Title', 'Title', null, null, 'er entity relation table title label'),
	   		this.addEntry(dt + 'table', function()
			{
	   			var cell = new mxCell('Entity', new mxGeometry(0, 0, 160, 120),
	   		    	'swimlane;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;rounded=1;fontSize=14;fontStyle=0;strokeWidth=2;resizeParent=0;resizeLast=1;shadow=0;dashed=0;align=center;');
	   			cell.vertex = true;
	   			
	   			var cell1 = new mxCell('+Attribute1\n+Attribute2\n+Attribute3', new mxGeometry(0, 30, 160, 90),
	   				'align=left;strokeColor=none;fillColor=none;spacingLeft=4;fontSize=12;verticalAlign=top;resizable=0;rotatable=0;part=1;');
	   			cell1.vertex = true;

				cell.insert(cell1);
				
				return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Entity');
			}),
			this.createVertexTemplateEntry('whiteSpace=wrap;html=1;align=center;', 100, 40, 'Entity', 'Entity', null, null, dt),
			this.createVertexTemplateEntry('rounded=1;arcSize=10;whiteSpace=wrap;html=1;align=center;', 100, 40, 'Entity', 'Entity (Rounded)', null, null, dt + 'chen'),
			this.createVertexTemplateEntry('shape=ext;margin=3;double=1;whiteSpace=wrap;html=1;align=center;', 100, 40, 'Entity', 'Weak Entity', null, null, dt + 'chen'),
			this.createVertexTemplateEntry('ellipse;whiteSpace=wrap;html=1;align=center;',
				100, 40, 'Attribute', 'Attribute', null, null, dt + 'attribute chen'),
			this.createVertexTemplateEntry('ellipse;whiteSpace=wrap;html=1;align=center;fontStyle=4;',
				100, 40, 'Attribute', 'Key Attribute', null, null, dt + 'attribute key chen'),
			this.createVertexTemplateEntry('ellipse;whiteSpace=wrap;html=1;align=center;',
				100, 40, '<span style="border-bottom: 1px dotted">Attribute</span>', 'Weak Key Attribute', null, null, dt + 'attribute key weak chen'),
			this.createVertexTemplateEntry('ellipse;whiteSpace=wrap;html=1;align=center;dashed=1;',
				100, 40, 'Attribute', 'Derived Attribute', null, null, dt + 'attribute derived chen'),
			this.createVertexTemplateEntry('ellipse;shape=doubleEllipse;margin=3;whiteSpace=wrap;html=1;align=center;',
				100, 40, 'Attribute', 'Multivalue Attribute', null, null, dt + 'attribute multivalue chen'),
			this.createVertexTemplateEntry('shape=associativeEntity;whiteSpace=wrap;html=1;align=center;',
				140, 60, 'Associative\nEntity', 'Associative Entity', null, null, dt + 'associative entity chen'),
			this.createVertexTemplateEntry('shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;',
				120, 60, 'Relationship', 'Relationship', null, null, dt + 'chen'),
			this.createVertexTemplateEntry('shape=rhombus;double=1;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;',
				120, 60, 'Relationship', 'Identifying Relationship', null, null, dt + 'chen'),
			this.createVertexTemplateEntry('ellipse;shape=cloud;whiteSpace=wrap;html=1;align=center;', 100, 60, 'Cloud', 'Cloud', null, null, dt + 'cloud'),
	   	 	this.addEntry(dt + 'hierarchy', function()
	   		{
			   	var cell = new mxCell('', new mxGeometry(0, 0, 100, 100), 'rounded=1;absoluteArcSize=1;html=1;arcSize=10;');
			   	cell.vertex = true;
			   	
			   	var cell1 = new mxCell('main', new mxGeometry(0, 0, 50, 100), 'html=1;shape=mxgraph.er.anchor;whiteSpace=wrap;');
			   	cell1.vertex = true;
			   	cell.insert(cell1);
			   	
			   	var cell2 = new mxCell('sub', new mxGeometry(50, 5, 45, 90), 'rounded=1;absoluteArcSize=1;html=1;arcSize=10;whiteSpace=wrap;points=[];strokeColor=inherit;fillColor=inherit;');
			   	cell2.vertex = true;
			   	cell.insert(cell2);
				
				return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Hierarchy'); 
	   		}),
			this.createVertexTemplateEntry('shape=note;size=20;whiteSpace=wrap;html=1;', w, h, 'Note', 'Note', null, null, dt + 'note'),
			this.addEntry(dt + 'relation chen', function()
			{
				return sb.createEdgeTemplateFromCells(
					[createEdge('endArrow=none;html=1;rounded=0;')],
					160, 0, 'Untitled Relation');
			}),
			this.addEntry(dt + 'mandatory participation chen', function()
			{
				return sb.createEdgeTemplateFromCells(
					[createEdge('endArrow=none;html=1;rounded=0;', null, '1')],
					160, 0, 'Mandatory Participation (0:1)');
			}),
			this.addEntry(dt + 'mandatory participation chen', function()
			{
				return sb.createEdgeTemplateFromCells(
					[createEdge('endArrow=none;html=1;rounded=0;', null, 'N')],
					160, 0, 'Mandatory Participation (0:N)');
			}),
			this.addEntry(dt + 'mandatory participation chen', function()
			{
				return sb.createEdgeTemplateFromCells(
					[createEdge('endArrow=none;html=1;rounded=0;', 'M', 'N')],
					160, 0, 'Mandatory Participation (M:N)');
			}),
			this.addEntry(dt + 'optional participation chen', function()
			{
				return sb.createEdgeTemplateFromCells(
					[createEdge('endArrow=none;html=1;rounded=0;dashed=1;dashPattern=1 2;', null, '1')],
					160, 0, 'Optional Participation (0:1)');
			}),
			this.addEntry(dt + 'optional participation chen', function()
			{
				return sb.createEdgeTemplateFromCells(
					[createEdge('endArrow=none;html=1;rounded=0;dashed=1;dashPattern=1 2;', null, 'N')],
					160, 0, 'Optional Participation (0:N)');
			}),
			this.addEntry(dt + 'optional participation chen', function()
			{
				return sb.createEdgeTemplateFromCells(
					[createEdge('endArrow=none;html=1;rounded=0;dashed=1;dashPattern=1 2;', 'M', 'N')],
					160, 0, 'Optional Participation (M:N)');
			}),
			this.addEntry(dt + 'recursive relationship chen', function()
			{
				return sb.createEdgeTemplateFromCells(
					[createEdge('shape=link;html=1;rounded=0;', null, '1')],
					160, 0, 'Recursive Relationship (0:1)');
			}),
			this.addEntry(dt + 'recursive relationship chen', function()
			{
				return sb.createEdgeTemplateFromCells(
					[createEdge('shape=link;html=1;rounded=0;', null, 'N')],
					160, 0, 'Recursive Relationship (0:N)');
			}),
			this.addEntry(dt + 'recursive relationship chen', function()
			{
				return sb.createEdgeTemplateFromCells(
					[createEdge('shape=link;html=1;rounded=0;', 'M', 'N')],
					160, 0, 'Recursive Relationship (M:N)');
			}),
			this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;endFill=1;', w, h, '', '0 to Many Optional', null, dt + 'zero many optional'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;', w, h, '', '1 to Many', null, dt + 'one many'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmandOne;', w, h, '', '1 Mandatory', null, dt + 'one mandatory'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmandOne;startArrow=ERmandOne;', w, h, '', '1 to 1', null, dt + 'one'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERone;endFill=1;', w, h, '', '1', null, dt + 'one'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToOne;endFill=1;', w, h, '', '0 to 1', null, dt + 'zero one'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmany;', w, h, '', 'Many', null, dt + 'many'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmany;startArrow=ERmany;', w, h, '', 'Many to Many', null, dt + 'many'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;startArrow=ERzeroToOne;', w, h, '', '1 Optional to Many Optional', null, dt + 'one optional many'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;startArrow=ERmandOne;', w, h, '', '1 Mandatory to Many Optional', null, dt + 'one mandatory many optional'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToOne;startArrow=ERmandOne;', w, h, '', '1 Mandatory to 1 Optional', null, dt + 'one mandatory optional'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERmandOne;', w, h, '', '1 Mandatory to Many Mandatory', null, dt + 'one mandatory many'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERzeroToOne;', w, h, '', '1 Optional to Many Mandatory', null, dt + 'one optional mandatory many'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERoneToMany;', w, h, '', 'Many Mandatory to Many Mandatory', null, dt + 'mandatory many'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERzeroToMany;', w, h, '', 'Many Optional to Many Mandatory', null, dt + 'mandatory many optional'),
		 	this.createEdgeTemplateEntry('edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;endFill=1;startArrow=ERzeroToMany;', w, h, '', 'Many Optional to Many Optional', null, dt + 'many optional')
	 	];

		this.addPaletteFunctions('er', mxResources.get('entityRelation'), false, fns);
	};

})();
