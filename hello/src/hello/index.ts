import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function hello(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name } = _options; // 從 _options 讀取 name

    // 定義文件的相對路徑
    const filePath = 'hello.js';

    // 如果文件已經存在，先刪除它
    if (tree.exists(filePath)) {
      tree.delete(filePath);
    }

    // 創建新的 hello.js 文件
    tree.create(filePath, `console.log('Hello ${name}');11111111111111111111111111`);

    return tree;
  };
}
