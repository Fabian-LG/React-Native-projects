import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type ToDoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerToDo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly isComplete: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyToDo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly isComplete: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ToDo = LazyLoading extends LazyLoadingDisabled ? EagerToDo : LazyToDo

export declare const ToDo: (new (init: ModelInit<ToDo, ToDoMetaData>) => ToDo) & {
  copyOf(source: ToDo, mutator: (draft: MutableModel<ToDo, ToDoMetaData>) => MutableModel<ToDo, ToDoMetaData> | void): ToDo;
}