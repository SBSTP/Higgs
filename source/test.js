var ffi = require('lib/ffi');

ffi.c.cdef(`
    typedef struct {
        double x;
        double y;
    } Point;
    typedef struct {
        Point p;
    } Something;
`);
