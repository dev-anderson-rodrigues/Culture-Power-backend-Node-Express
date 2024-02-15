/* eslint-disable import/no-duplicates */
import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_URL as string,).then(() =>{
  console.log('Database is running');

}).catch((err) => console.log(err));

export { mongoose };
