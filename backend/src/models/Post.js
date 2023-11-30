
const PostSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comments',
        },
      ],
      imageURL:{
        type: String,
        required: true,
      }
  }, {
    timestamps: true,
    versionKey: false,
  });
  
  export const PostModel = model('Post', PostSchema);