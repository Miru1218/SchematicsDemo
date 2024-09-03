import { normalize, strings } from '@angular-devkit/core';
import { apply, applyTemplates, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';


export function exercise3(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: _options.name
      }),
      move(normalize(_options.path as string))
    ]);
    return mergeWith(templateSource);
  };
}
