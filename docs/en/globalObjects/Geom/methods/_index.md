# Geom Object Methods
Below is a list of available methods provided by the `Geom` object. Click on the method name to see its detailed description and examples.

## Creating geometric primitives

- [point3()]: Creating a point
- [vector3()]: Creating a vector
- [boundingBox()]: Creating a bounding box.

## 2D primitives (flat)
- [arc()]: Arc
- [circle()]: Circle or sector of a circle
- [ring()]: Ring
- [ellipse()]: Ellipse or sector of an ellipse
- [square()]: Square
- [rectangle()]: Rectangle
- [ngon()]: Regular N-gon
- [infplane()]: Plane

- [segment()]: Segment
- [bspline()]: Smooth line passing through all given points
- [polysegment()]: Lomanted line
- [polygon()]: Polygon

## 3D primitives (volume)
- [box()]: Paralellipiped
- [collar()]: Collar
- [cone()]: Cone
- [cylinder()]: Cylinder
- [sphere()]: Sphere
- [torus()]: Tor

## Boolean operations
- [unite()]: Union of two or more bodies.
- [intersect()]: Intersection of two or more bodies.
- [diff()]: Difference of two or more bodies.
- [difference()]: Difference of two or more bodies.

## Geometric operations
- [angle()]: Getting the angle of a point.
- [angleX()]: Getting the angle of a point relative to the center of coordinates [0,0,0] in plane YOZ.
- [angleY()]: Getting the angle of a point relative to the center of coordinates [0,0,0] in plane XOZ.
- [angleZ()]: Getting the angle of a point relative to the center of coordinates [0,0,0] in plane XOY.

- [radius()]: Radius of a point in 2D space.
- [radiusX()]: Radius of a point in plane YOZ.
- [radiusY()]: Radius of a point in plane XOZ.
- [radiusZ()]: Radius of a point in plane XOY.

- [angleBetweenVectors()]: Angle between vectors.
- [pointAtSegment()]: Returns the point on a segment at a given parameter position.
- [distance()]: Calculates distance between two points. 

- [section()]: Creates a section. 
- [unify()]: Simplification of the geometric representation of an object.
- [fillet()]: Operation of radiusing body
- [chamfer()]: Operation of removing faceting.

## Creating part
- [piece()]: Creating a part