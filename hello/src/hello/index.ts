import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    //   console.log('Hello world');
    //   tree.create('hello.js', `console.log('Hello World');`);
    //   return tree;
    // };
    const { name } = _options; // 從 _options 讀取 name

    tree.create("hello.js", `console.log('Hello ${name}');`);
    return tree;
  };
}
