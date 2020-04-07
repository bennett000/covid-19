import { deepFreeze } from '@ch1/utility';

export abstract class ReadOnlyAble {
  freeze() {
    return deepFreeze(this);
  }
}
