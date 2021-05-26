
import * as mongoose from 'mongoose';
export interface User extends mongoose.Document {
    name: string;
    dob: Date;
    email: string;
    
  }