import { Schema, model } from 'mongoose';

const CommentsSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
    author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
  versionKey: false,
});

export const CommentsModel = model('Comments', CommentsSchema);