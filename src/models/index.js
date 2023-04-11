// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ToDo } = initSchema(schema);

export {
  ToDo
};