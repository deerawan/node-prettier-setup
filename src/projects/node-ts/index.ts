import { Project } from '../project';
import { configureForTslint } from '../prettier';

export class NodeTs extends Project {
  public static projectId = 'node_ts';
  public static projectName = 'Node TS';

  constructor() {
    super();
  }

  public runExtra(targetDir: string) {
    super.copyTemplates(NodeTs.projectName, __dirname, targetDir);
    return configureForTslint(targetDir);
  }
}
