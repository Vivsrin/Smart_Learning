// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Environment} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const firstsurface=new Surface(800,
    600,
    );
    const secondsurface=new Surface(
      800,
      600,
    );

    const thirdsurface=new Surface(
      800,
      600,
    );
    const fourthsurface=new Surface(
      800,
      600,
    );
    const buttonsurface=new Surface(
      300,
      600,
    );

    firstsurface.setShape(Surface.SurfaceShape.Flat)
    firstsurface.setAngle(0,0)
    secondsurface.setShape(Surface.SurfaceShape.Flat)
    secondsurface.setAngle(Math.PI/2,0)
    thirdsurface.setShape(Surface.SurfaceShape.Flat)
    thirdsurface.setAngle(2*Math.PI/2,0)
    fourthsurface.setShape(Surface.SurfaceShape.Flat)
    fourthsurface.setAngle(-Math.PI/2,0)
    buttonsurface.setShape(Surface.SurfaceShape.Flat)
    buttonsurface.setAngle(Math.PI/4,0)


  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('LeftScreen'),
    firstsurface
  );
  r360.renderToSurface(
    r360.createRoot('RightScreen'),
    secondsurface
  );
  r360.renderToSurface(
    r360.createRoot('rightscreen2'),
    thirdsurface
  );
  r360.renderToSurface(
    r360.createRoot('leftscreen2'),
    fourthsurface
  );
  r360.renderToSurface(
    r360.createRoot('buttonpage'),
    buttonsurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
