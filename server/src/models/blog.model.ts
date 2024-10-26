import mongoose, { Document, Model, Schema, ObjectId } from "mongoose";

export interface IBlog extends Document {
  title: string;
  subtitle: string;
  thumbnailImage: string;
  subImages: string[];
  subTitle: string;
  searchKeyword: string;
  contents: { title: string; description: string }[];
  description: string;
  likedUsers: mongoose.Types.ObjectId[];
  viewedUsers: mongoose.Types.ObjectId[];
  user: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
  category: string;
  sharedUsers: mongoose.Types.ObjectId[];
  publishStatus: "published" | "unpublished";
}

// Create the Blog Schema
const BlogSchema: Schema<IBlog> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnailImage: {
      type: String,
      // required: true,
    },
    subImages: {
      type: [String],
      default: [],
    },
    subTitle: {
      type: String,
      trim: true,
    },
    searchKeyword: {
      type: String,
      // required: true,
      trim: true,
    },
    contents: [
      {
        title: {
          type: String,
          trim: true,
          //   required: true,
        },
        description: {
          type: String,
          trim: true,
          //   required: true,
        },
      },
    ],
    description: {
      type: String,
      trim: true,
      required: true,
    },
    likedUsers: [
      {
        type: mongoose.Types.ObjectId,
        default: [],
      },
    ],
    viewedUsers: [
      {
        type: mongoose.Types.ObjectId,
        default: [],
      },
    ],
    category: {
      type: String,
      required: true,
      trim: true,
    },
    sharedUsers: [
      {
        type: mongoose.Types.ObjectId,
        default: [],
      },
    ],
    publishStatus: {
      type: String,
      enum: ["published", "unpublished"],
      default: "unpublished",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the model
const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
export default Blog;
