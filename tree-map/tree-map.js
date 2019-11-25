/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);


  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};


Tree.prototype.map = function(callback) {
  //retrieve the array of the original tree:
  var array = this.children;

  //get the new tree's value:
  var mapValue = callback( this.value );

  //create a new tree:
  var mapTree = new Tree( mapValue );
  mapTree.children = this.children;

  //iterate func
  function itr( array ) {
    
    array.forEach( function( element, index ) {
    //iterate over children
      //if children[i] is !array
      if( !Array.isArray( element ) ) {
        //grab the element
        var grab = element;
        //pass it to the callback function and push the result to the new tree:
        mapTree[array][index] = callback( grab ) ;
        return array.splice( index, 1 );

        // return mapTree.addChild( callback( grab ) );

      }else if ( Array.isArray( element ) ) {
      //else if children is array
        //iterate  
        return itr( element );
      }
    } );

  }

  itr(array);
  return mapTree;
}
