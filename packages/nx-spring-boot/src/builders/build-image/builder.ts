import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect'
import { of, Observable } from 'rxjs'
import * as path from 'path'
import { BuildImageBuilderSchema } from './schema'
import { runBootPluginCommand } from '../../utils/boot-utils'

export function builder(options: BuildImageBuilderSchema, context: BuilderContext): Observable<BuilderOutput> {
  const root = path.resolve(context.workspaceRoot, options.root);
  return of(runBootPluginCommand(context, 'buildImage', options.args, { cwd : root, ignoreWrapper: options.ignoreWrapper}));
}

export default createBuilder(builder);