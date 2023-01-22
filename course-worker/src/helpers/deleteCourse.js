import { table } from './airtable';
import {formattedReturn} from './formattedReturn';

export const deleteCourse = async (event) => {
    table('Course_table').destroy(['rec3PC7kEsFyy1rhK', 'recnl7lyIKx5vzGAk'], function(err, deletedRecords) {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
      });
};