import React, { useRef, useEffect } from 'react';
import paper from 'paper';

const DrawingApp: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize Paper.js
    paper.setup(canvasRef.current as HTMLCanvasElement);

    // Event handlers
    const onMouseDown = (event: paper.ToolEvent) => {
      const path = new paper.Path();
      path.strokeColor = new paper.Color('red');
      path.add(event.point);
    };

    const onMouseDrag = (event: paper.ToolEvent) => {
      const path = paper.project.activeLayer.lastChild as paper.Path;
      path.add(event.point);
    };

    // Attach event listeners
    const tool = new paper.Tool();
    tool.onMouseDown = onMouseDown;
    tool.onMouseDrag = onMouseDrag;

    // Cleanup
    return () => {
      tool.off('mousedown', onMouseDown);
      tool.off('mousedrag', onMouseDrag);
    };
  }, []);

  return <canvas ref={canvasRef} data-resize="true" />;
};

export default DrawingApp;
