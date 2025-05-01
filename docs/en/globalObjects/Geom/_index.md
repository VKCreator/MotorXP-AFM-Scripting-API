# Geom Overview
The built-in `Geom` object implements a geometric core.

## Primary Capabilities of `Geom`
Represents functions for creating graphical primitives and operating on them.

## Methods of the `Geom` Object
Below is a list of available methods provided by the `Geom` object. Click on the name of the method to see its detailed description and examples.

### Creating Geometric Primitives
- [point3()](methods/point3.md): Creates a point.
- [vector3()](methods/vector3.md): Creates a vector.
- [boundingBox()](methods/boundingBox.md): Creates a bounding box.

### 2D Primitives (Planar)
- [arc()](methods/arc.md): An arc.
- [circle()](methods/circle.md): A circle or sector of a circle
- [ring()](methods/ring.md): A ring.
- [ellipse()](methods/ellipse.md): An ellipse or sector of an ellipse.
- [square()](methods/square.md): A square.
- [rectangle()](methods/rectangle.md): A rectangle
- [ngon()](methods/ngon.md): A regular N-gon.
- [infplane()](methods/infplane.md): A plane

- [segment()](methods/segment.md): A segment.
- [bspline()](methods/bspline.md): A smooth line passing through all given points.
- [polysegment()](methods/polysegment.md): A lomanted line
- [polygon()](methods/polygon.md): A polygon

### 3D Primitives (Volume)
- [box()](methods/box.md): A parallelepiped.
- [collar()](methods/collar.md): A collar.
- [cone()](methods/cone.md): A cone
- [cylinder()](methods/cylinder.md): A cylinder.
- [sphere()](methods/sphere.md): A sphere.
- [torus()](methods/torus.md): A tor.

### Boolean Operations
- [unite()](methods/unite.md): The union of two or more solids.
- [intersect()](methods/intersect.md): The intersection of two or more solids.
- [diff()](methods/diff.md): The difference of two or more solids.
- [difference()](methods/difference.md): The difference of two or more solids.

### Geometric Operations
- [angle()](methods/angle.md): Gets the angle of a point.
- [angleX()](methods/angleX.md): Gets the angle of a point relative to the origin in the YOZ plane.
- [angleY()](methods/angleY.md): Gets the angle of a point relative to the origin in the XOZ plane.
- [angleZ()](methods/angleZ.md): Gets the angle of a point relative to the origin in the XOY plane.

- [radius()](methods/radius.md): The radius of a point in 2D space.
- [radiusX()](methods/radiusX.md): The radius of a point in the YOZ plane.
- [radiusY()](methods/radiusY.md): The radius of a point in the XOZ plane.
- [radiusZ()](methods/radiusZ.md): The radius of a point in the XOY plane.

- [angleBetweenVectors()](methods/angleBetweenVectors.md): The angle between two vectors.
- [pointAtSegment()](methods/pointAtSegment.md): Returns a point at a parameterized position on a segment.
- [distance()](methods/distance.md): Calculates the distance between two points. 

- [section()](methods/section.md): Creates a section.
- [unify()](methods/unify.md): Simplifies a geometric representation of an object.
- [fillet()](methods/fillet.md): The fillet operation on a solid
- [chamfer()](methods/chamfer.md): The chamfer operation on a solid.

### Creating Assemblies
- [piece()](methods/piece.md): Creates an assembly