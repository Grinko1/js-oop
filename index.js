//1
// let geom = {
//     name: 'figure',
//     sp:{x:0, y: 0},
//     ep:{x:100, y:20},
//     get nameGeom () {return this.name},
//     set nameGeom (name) {this.name = name}
// }

// let rect = {
//     draw(){
//         console.log('drawing a rectange:' +
//         this.sp.x+","+this.sp.y+","+ this.ep.x+","+this.ep.y)
//     }
// }

// rect.__proto__ = geom

// // console.log(rect.nameGeom);

// rect.name = 'new Figure 123'

// // console.log(rect.nameGeom);

// for (let prop in rect) {
//    if(rect.hasOwnProperty(prop)){console.log(prop + ":" + rect[prop]);}

// }

//2

let prop = {
  sp: { x: 0, y: 0 },
  ep: { x: 100, y: 20 },
  get coords() {
      return [this.sp.x, this.sp.y, this.ep.x, this.ep.y]
  },
  set coords(coords){
    this.ep.x = coords[0], this.ep.y = coords[1], this.sp.x = coords[2], this.sp.y = coords[3]
  }
};

function Rect() {
  this.name = 'figure';
  this.draw = function () {
    'drawing fugure:' + this.name;
  };
//   this.__proto__ = prop
// this.prototipe = prop
}
this.prototipe = prop;
let r = new Rect();
// r.draw();

for( let p in r) {
    console.log(p +':' + r[p]);
}
